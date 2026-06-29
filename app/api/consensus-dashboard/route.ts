import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  const snapshotPath = path.join(
    process.cwd(),
    "data",
    "snapshot.json"
  );

  const snapshot = JSON.parse(
    await fs.readFile(snapshotPath, "utf8")
  );

  const marketMap = new Map();

  for (const wallet of snapshot.snapshots || []) {
    for (const position of wallet.positions || []) {
      const market = position.title;

      if (!marketMap.has(market)) {
        marketMap.set(market, {
          market,
          wallets: 0,
          capital: 0,
          traders: [],
        });
      }

      const entry = marketMap.get(market);

      entry.wallets += 1;
      entry.capital += Number(
        position.currentValue || 0
      );

      entry.traders.push(wallet.name);
    }
  }

  const consensus = Array.from(
    marketMap.values()
  )
    .filter((m: any) => m.wallets >= 2)
    .sort(
      (a: any, b: any) =>
        b.wallets - a.wallets ||
        b.capital - a.capital
    )
    .slice(0, 25);

  return NextResponse.json({
    markets: consensus,
  });
}