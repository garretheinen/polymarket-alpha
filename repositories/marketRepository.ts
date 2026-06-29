import { Market } from "@/types/market";
import { getCurrentSnapshot } from "./snapshotRepository";

export async function getMarkets(): Promise<Market[]> {
  const snapshot = await getCurrentSnapshot();

  const markets = new Map<string, Market>();

  for (const wallet of snapshot.snapshots) {
    for (const position of wallet.positions ?? []) {
      if (!markets.has(position.slug)) {
        markets.set(position.slug, {
          id: position.conditionId,
          title: position.title,
          slug: position.slug,
          category: "other",
          status: "active",
          createdAt: snapshot.savedAt,
        });
      }
    }
  }

  return [...markets.values()];
}