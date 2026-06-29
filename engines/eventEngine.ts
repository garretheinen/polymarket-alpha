import { PolymarketSnapshot } from "@/types/polymarket";
import { SignalEvent } from "@/types/signal-event";

export const eventEngine = {
  generate(
    current: PolymarketSnapshot,
    previous: PolymarketSnapshot
  ): SignalEvent[] {
    const events: SignalEvent[] = [];

    // ---------------------------------------
    // Build lookup of previous positions
    // ---------------------------------------

    const previousPositions = new Set<string>();

    for (const wallet of previous.snapshots ?? []) {
      for (const position of wallet.positions ?? []) {
        previousPositions.add(
          `${wallet.address}-${position.conditionId}-${position.outcome}`
        );
      }
    }

    // ---------------------------------------
    // Scan current snapshot
    // ---------------------------------------

    for (const wallet of current.snapshots ?? []) {
      for (const position of wallet.positions ?? []) {
        const key =
          `${wallet.address}-${position.conditionId}-${position.outcome}`;

        if (!previousPositions.has(key)) {
          events.push({
            id: crypto.randomUUID(),

            marketId: position.conditionId,

            traderId: wallet.address,

            timestamp: current.savedAt,

            type: "POSITION_OPENED",

            title: "New Position Opened",

            description:
              `${wallet.name} opened a position on "${position.outcome}" in "${position.title}".`,

            metadata: {
              wallet: wallet.name,
              address: wallet.address,

              market: position.title,
              outcome: position.outcome,

              conditionId: position.conditionId,

              size: position.size,

              currentValue: position.currentValue,

              averagePrice: position.avgPrice,
            },
          });
        }
      }
    }

    // ---------------------------------------
    // Sort newest first
    // ---------------------------------------

    events.sort(
      (a, b) =>
        new Date(b.timestamp).getTime() -
        new Date(a.timestamp).getTime()
    );

    return events;
  },
};