import fs from "fs/promises";
import path from "path";

import { PolymarketSnapshot } from "@/types/polymarket";

async function readSnapshot(
  filename: string
): Promise<PolymarketSnapshot> {
  const file = path.join(
    process.cwd(),
    "data",
    filename
  );

  const contents = await fs.readFile(file, "utf8");

  return JSON.parse(contents);
}

export async function getCurrentSnapshot() {
  return readSnapshot("snapshot.json");
}

export async function getPreviousSnapshot() {
  return readSnapshot("previous-snapshot.json");
}