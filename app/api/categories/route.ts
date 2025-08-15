import { NextResponse } from "next/server";
import data from "@/constants/categories.json";

export async function GET() {
  return NextResponse.json(data);
}


