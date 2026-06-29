import { NextResponse } from "next/server";
import { wallets } from "@/lib/wallets";
import { getWalletData } from "@/lib/polymarket";

export async function GET() {
  const marketMap = new Map();

  const snapshots = await Promise.all(
    wallets.map(async (wallet) => {
      const data = await getWalletData(wallet.address);
      return data.positions || [];
    })
  );

  for (const positions of snapshots) {
    for (const position of positions) {
      const market = position.title;
      const size = Number(position.size || 0);

      if (!market) continue;

      if (!marketMap.has(market)) {
        marketMap.set(market, {
          market,
          wallets: 0,
          capital: 0,
        });
      }

      const existing = marketMap.get(market);

      existing.wallets += 1;
      existing.capital += size;
    }
  }

  const alpha = Array.from(marketMap.values())
    .map((market: any) => ({
      ...market,
      score: Math.round(
        market.wallets * 100 +
        market.capital / 1000
      ),
    }))
    .sort((a: any, b: any) => b.score - a.score)
    .slice(0, 25);

  return NextResponse.json(alpha);
}