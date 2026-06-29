import { NextResponse } from "next/server";
import { wallets } from "@/lib/wallets";
import { getWalletData } from "@/lib/polymarket";

export async function GET() {
  const results = await Promise.all(
    wallets.map(async (wallet) => {
      const data = await getWalletData(wallet.address);

      return {
        name: wallet.name,
        address: wallet.address,
        positions: data.positions,
      };
    })
  );

  return NextResponse.json({
    walletsTracked: wallets.length,
    snapshotsCollected: results.length,
    data: results,
  });
}