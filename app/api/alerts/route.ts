import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "alerts-engine-ready",
    message: "Snapshot comparison coming next",
  });
}