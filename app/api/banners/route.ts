import { NextResponse } from "next/server";
import data from "@/constants/banners.json";

export async function GET() {
  return NextResponse.json(data);
}


