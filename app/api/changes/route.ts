import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  const currentPath = path.join(
    process.cwd(),
    "data",
    "snapshot.json"
  );

  const previousPath = path.join(
    process.cwd(),
    "data",
    "previous-snapshot.json"
  );

  const current = JSON.parse(
    await fs.readFile(currentPath, "utf8")
  );

  const previous = JSON.parse(
    await fs.readFile(previousPath, "utf8")
  );

  const previousPositions = new Map();
  const currentPositions = new Map();

  // Build Previous Position Map
  for (const wallet of previous.snapshots || []) {
    for (const position of wallet.positions || []) {
      const key = `${wallet.address}-${position.asset}`;

      previousPositions.set(key, {
        wallet: wallet.name,
        market: position.title,
        size: Number(position.size || 0),
      });
    }
  }

  // Build Current Position Map
  for (const wallet of current.snapshots || []) {
    for (const position of wallet.positions || []) {
      const key = `${wallet.address}-${position.asset}`;

      currentPositions.set(key, {
        wallet: wallet.name,
        market: position.title,
        size: Number(position.size || 0),
      });
    }
  }

  const alerts = [];

  // NEW + SIZE CHANGES
  for (const [key, currentPos] of currentPositions.entries()) {
    const previousPos = previousPositions.get(key);

    if (!previousPos) {
      alerts.push({
        wallet: currentPos.wallet,
        type: "NEW_POSITION",
        market: currentPos.market,
        size: currentPos.size,
      });
      continue;
    }

    const diff = currentPos.size - previousPos.size;

    if (diff > 1000) {
      alerts.push({
        wallet: currentPos.wallet,
        type: "INCREASED_POSITION",
        market: currentPos.market,
        change: diff,
        oldSize: previousPos.size,
        newSize: currentPos.size,
      });
    }

    if (diff < -1000) {
      alerts.push({
        wallet: currentPos.wallet,
        type: "DECREASED_POSITION",
        market: currentPos.market,
        change: diff,
        oldSize: previousPos.size,
        newSize: currentPos.size,
      });
    }
  }

  // CLOSED POSITIONS
  for (const [key, previousPos] of previousPositions.entries()) {
    if (!currentPositions.has(key)) {
      alerts.push({
        wallet: previousPos.wallet,
        type: "CLOSED_POSITION",
        market: previousPos.market,
        previousSize: previousPos.size,
      });
    }
  }

  return NextResponse.json({
    alertsGenerated: alerts.length,
    alerts: alerts
      .sort((a: any, b: any) => {
        const aSize =
          a.newSize ||
          a.previousSize ||
          a.size ||
          0;

        const bSize =
          b.newSize ||
          b.previousSize ||
          b.size ||
          0;

        return bSize - aSize;
      })
      .slice(0, 100),
  });
}