import CorsHeaders from "@/consts/corsHeaders";
import { NextResponse } from "next/server";

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: CorsHeaders,
  });
}

