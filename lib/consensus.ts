import { PolymarketSnapshot } from "@/types/polymarket";
import {
  scoreConsensus,
  type ConsensusTrade,
  type RankedConsensusTrade,
} from "./scoring";

export function buildConsensus(snapshot: PolymarketSnapshot) {
  const consensusMap = new Map<
    string,
    {
      market: string;
      outcome: string;
      traders: Set<string>;
      capital: number;
    }
  >();

  for (const wallet of snapshot.snapshots ?? []) {
    for (const position of wallet.positions ?? []) {
      const market = position.title;
      const outcome = position.outcome || "Unknown";

      // Use the immutable conditionId instead of the title
      const key = `${position.conditionId}-${outcome}`;

      if (!consensusMap.has(key)) {
        consensusMap.set(key, {
          market,
          outcome,
          traders: new Set<string>(),
          capital: 0,
        });
      }

      const entry = consensusMap.get(key)!;

      entry.traders.add(wallet.name);

      const value = Math.max(
        Number(position.currentValue || 0),
        Number(position.size || 0),
        Number(position.initialValue || 0)
      );

      entry.capital += value;
    }
  }

  return Array.from(consensusMap.values())
    .map((item): RankedConsensusTrade => {
      const trade: ConsensusTrade = {
        market: item.market,
        outcome: item.outcome,
        wallets: item.traders.size,
        capital: Math.round(item.capital),
        traders: Array.from(item.traders),
      };

      return {
        ...trade,
        ...scoreConsensus(trade),
      };
    })
    .filter((trade) => trade.wallets >= 2)
    .sort((a, b) => b.score - a.score)
    .slice(0, 50);
}