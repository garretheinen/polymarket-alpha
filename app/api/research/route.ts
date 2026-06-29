import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const archivePath = path.join(
    process.cwd(),
    "data",
    "archive.json"
  );

  let archive: any[] = [];

  try {
    archive = JSON.parse(
      fs.readFileSync(archivePath, "utf8")
    );
  } catch {
    archive = [];
  }

  const strong = archive.filter(
    (a) => a.confidence === "Strong"
  ).length;

  const moderate = archive.filter(
    (a) => a.confidence === "Moderate"
  ).length;

  const weak = archive.filter(
    (a) => a.confidence === "Weak"
  ).length;

  return NextResponse.json({
    archivedSignals: archive.length,
    strong,
    moderate,
    weak,
    archive,
  });
}