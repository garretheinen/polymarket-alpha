import { NextResponse } from "next/server";
import { wallets } from "@/lib/wallets";
import { getWalletData } from "@/lib/polymarket";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  const currentSnapshotPath = path.join(
    process.cwd(),
    "data",
    "snapshot.json"
  );

  const previousSnapshotPath = path.join(
    process.cwd(),
    "data",
    "previous-snapshot.json"
  );

  // Move current snapshot to previous snapshot
  try {
    const currentSnapshot = await fs.readFile(
      currentSnapshotPath,
      "utf8"
    );

    await fs.writeFile(
      previousSnapshotPath,
      currentSnapshot
    );
  } catch (error) {
    console.log("No existing snapshot found");
  }

  // Fetch all wallet data
  const snapshots = await Promise.all(
    wallets.map(async (wallet) => {
      const data = await getWalletData(wallet.address);

      return {
        name: wallet.name,
        address: wallet.address,
        positions: data.positions || [],
      };
    })
  );

  const snapshotData = {
    savedAt: new Date().toISOString(),
    walletsTracked: snapshots.length,
    snapshots,
  };

  // Save new snapshot
  await fs.writeFile(
    currentSnapshotPath,
    JSON.stringify(snapshotData, null, 2)
  );

  return NextResponse.json({
    success: true,
    savedAt: snapshotData.savedAt,
    walletsTracked: snapshots.length,
    previousSnapshotUpdated: true,
  });
}