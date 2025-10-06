import { Prisma } from "@/app/_lib/Prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const allTabs = await Prisma.tabs.findMany();
  return NextResponse.json(allTabs);
}
export async function POST(request: NextRequest) {
  const newTab = request.body;
  console.log(newTab);
}

