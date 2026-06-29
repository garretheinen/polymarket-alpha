import { NextResponse } from "next/server";
import { getWalletData } from "@/lib/polymarket";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ address: string }> }
) {
  const { address } = await params;

  const data = await getWalletData(address);

  return NextResponse.json(data);
}