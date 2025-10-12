import { NextRequest, NextResponse } from "next/server";
import CorsHeaders from "../../../../consts/corsHeaders";
import { Prisma } from "../../../_lib/Prisma";
import { GenerateTabOutput } from "@/utils/GenerateOutput";
import { Tab } from "../../../../models/tab";
export async function GET() {
  try {
    // Fetch all tabs from the database
    const allTabs: Tab[] = await Prisma.tabs.findMany();

    // Process them using your custom output generator
    const compiledTabs = GenerateTabOutput(allTabs);

    // Return JSON response with data and CORS headers
    return NextResponse.json(compiledTabs, {
      status: 200,

    });
  } catch (error) {
    console.error("Error fetching tabs:", error);
    return NextResponse.json(
      { error: "Failed to fetch tabs" },
      { status: 500, }
    );
  }
}
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: CorsHeaders,
  });
}
