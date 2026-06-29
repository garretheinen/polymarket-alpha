import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "snapshot.json"
  );

  const fileContents = await fs.readFile(filePath, "utf8");
  const snapshot = JSON.parse(fileContents);

  const alerts: any[] = [];

  for (const wallet of snapshot.snapshots || []) {
    const positions = wallet.positions || [];

    for (const position of positions) {
      alerts.push({
        wallet: wallet.name,
        type: "POSITION_FOUND",
        market: position.title,
        size: position.size,
      });
    }
  }

  return NextResponse.json({
    alertsGenerated: alerts.length,
    alerts: alerts.slice(0, 50),
  });
}