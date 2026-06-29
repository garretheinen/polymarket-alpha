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

      if (!market) continue;

      if (!marketMap.has(market)) {
        marketMap.set(market, {
          market,
          count: 0,
        });
      }

      marketMap.get(market).count++;
    }
  }

  const consensus = Array.from(marketMap.values())
    .sort((a: any, b: any) => b.count - a.count)
    .slice(0, 25);

  return NextResponse.json(consensus);
}