import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const snapshotPath = path.join(
    process.cwd(),
    "data",
    "snapshot.json"
  );

  const previousPath = path.join(
    process.cwd(),
    "data",
    "previous-snapshot.json"
  );

  const snapshot = JSON.parse(
    fs.readFileSync(snapshotPath, "utf8")
  );

  

const previous = JSON.parse(
  fs.readFileSync(previousPath, "utf8")
);

  // =========================
  // TOP WALLETS
  // =========================

  let totalPositions = 0;

  const walletStats = (snapshot.snapshots || []).map(
    (wallet: any) => {
      const positions = wallet.positions || [];

      totalPositions += positions.length;

      const capital = positions.reduce(
        (sum: number, p: any) =>
          sum +
          Math.max(
            Number(p.currentValue || 0),
            Number(p.size || 0),
            Number(p.initialValue || 0)
          ),
        0
      );

      return {
        name: wallet.name,
        address: wallet.address,
        positions: positions.length,
        capital: Math.round(capital),
      };
    }
  );

  walletStats.sort(
    (a: any, b: any) => b.capital - a.capital
  );

  // =========================
  // ALERT ENGINE
  // =========================

  const previousPositions = new Map();
  const currentPositions = new Map();

  for (const wallet of previous.snapshots || []) {
    for (const position of wallet.positions || []) {
      previousPositions.set(
        `${wallet.address}-${position.asset}`,
        {
          wallet: wallet.name,
          market: position.title,
          outcome: position.outcome,
          oppositeOutcome: position.oppositeOutcome,
          size: Number(position.size || 0),
        }
      );
    }
  }

  for (const wallet of snapshot.snapshots || []) {
    for (const position of wallet.positions || []) {
      currentPositions.set(
        `${wallet.address}-${position.asset}`,
        {
          wallet: wallet.name,
          market: position.title,
          outcome: position.outcome,
          oppositeOutcome: position.oppositeOutcome,
          size: Number(position.size || 0),
        }
      );
    }
  }

  const alerts: any[] = [];

  for (const [key, currentPos] of currentPositions.entries()) {
    const previousPos = previousPositions.get(key);

    if (!previousPos) {
      alerts.push({
        wallet: currentPos.wallet,
        type: "NEW_POSITION",
        market: currentPos.market,
        outcome: currentPos.outcome,
        size: currentPos.size,
      });

      continue;
    }

    const diff =
      currentPos.size - previousPos.size;

    if (diff > 1000) {
      alerts.push({
        wallet: currentPos.wallet,
        type: "INCREASED_POSITION",
        market: currentPos.market,
        outcome: currentPos.outcome,
        change: Math.round(diff),
      });
    }

    if (diff < -1000) {
      alerts.push({
        wallet: currentPos.wallet,
        type: "DECREASED_POSITION",
        market: currentPos.market,
        outcome: currentPos.outcome,
        change: Math.round(diff),
      });
    }
  }

  for (const [key, previousPos] of previousPositions.entries()) {
    if (!currentPositions.has(key)) {
      alerts.push({
        wallet: previousPos.wallet,
        type: "CLOSED_POSITION",
        market: previousPos.market,
        outcome: previousPos.outcome,
      });
    }
  }

  alerts.sort((a: any, b: any) => {
    const aValue =
      a.size || Math.abs(a.change || 0);

    const bValue =
      b.size || Math.abs(b.change || 0);

    return bValue - aValue;
  });

  // =========================
  // CONSENSUS ENGINE
  // =========================



const consensusMap = new Map();

for (const wallet of snapshot.snapshots || []) {
  for (const position of wallet.positions || []) {
    const market = position.title;
    const outcome = position.outcome || "Unknown";

    const key = `${market}-${outcome}`;

    if (!consensusMap.has(key)) {
      consensusMap.set(key, {
        market,
        outcome,
        traders: new Set<string>(),
        capital: 0,
      });
    }

    const entry = consensusMap.get(key);

    entry.traders.add(wallet.name);

    const positionValue = Math.max(
      Number(position.currentValue || 0),
      Number(position.size || 0),
      Number(position.initialValue || 0)
    );

    entry.capital += positionValue;
  }
}

const consensus = Array.from(
  consensusMap.values()
)
  .map((item: any) => {
    const score =
      item.traders.size * 50 +
      Math.round(item.capital / 1000);

    let confidence = "Weak";

    if (score > 500) {
      confidence = "Strong";
    } else if (score > 250) {
      confidence = "Moderate";
    }

    return {
  market: item.market,
  outcome: item.outcome,
  wallets: item.traders.size,
  capital: Math.round(item.capital),
  traders: Array.from(item.traders),
  score,
  confidence,
  featured:
    score >= 1000 &&
    item.traders.size >= 2,
};
  })
  .filter((item: any) => item.wallets >= 2)
  .sort(
    (a: any, b: any) =>
      b.score - a.score
  )
  .slice(0, 50);

  // =========================
  // RESPONSE
  // =========================

 // =========================
// FEATURED OPPORTUNITY
// =========================

const featured =
  consensus.find((trade) => trade.featured) ??
  consensus[0] ??
  null;

return NextResponse.json({
  stats: {
    walletsTracked: snapshot.walletsTracked,
    totalPositions,
    snapshotTime: snapshot.savedAt,
    alertsGenerated: alerts.length,
  },

  featured,

  alerts: alerts.slice(0, 15),

  consensus,

  topWallets: walletStats.slice(0, 10),
});
}