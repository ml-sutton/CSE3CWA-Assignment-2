import { Prisma } from "../../_lib/Prisma";
import { NextRequest, NextResponse } from "next/server";
import { CreateTabRequest } from "../../../models/CreateTabRequest";
// GET ALL FROM DB
export async function GET() {
  const allTabs = await Prisma.tabs.findMany();
  return NextResponse.json(allTabs);
}
// This just handled creating tabs. NOT SAVING THEM.
export async function POST(request: NextRequest) {
  try {
    // Parse JSON body
    const data: CreateTabRequest = await request.json();

    // Create the new tab in the DB
    const newTab = await Prisma.tabs.create({
      data: {
        tabName: data.tabName,
        tabBody: data.tabBody,
        isSelected: data.isSelected,
      },
    });

    return NextResponse.json(newTab, { status: 201 });
  } catch (error) {
    console.error("Error creating tab:", error);
    return NextResponse.json(
      { error: "Failed to create tab" },
      { status: 500 }
    );
  }
}
