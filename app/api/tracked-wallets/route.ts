import { NextResponse } from "next/server";
import { wallets } from "@/lib/wallets";

export async function GET() {
  return NextResponse.json({
    count: wallets.length,
    wallets,
  });
}