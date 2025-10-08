import { Prisma } from "../../_lib/Prisma";
import { NextRequest, NextResponse } from "next/server";
import { CreateTabRequest } from "../../../models/CreateTabRequest";
import CorsHeaders from "../../../consts/corsHeaders";
// GET ALL FROM DB
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: CorsHeaders,
  });
}

export async function GET() {
  const allTabs = await Prisma.tabs.findMany();
  return NextResponse.json(allTabs);
}




export async function PATCH(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const tabIdParam = searchParams.get("tabId");
    const tabId = tabIdParam ? parseInt(tabIdParam, 10) : NaN;

    if (isNaN(tabId)) {
      return NextResponse.json({ error: "Invalid or missing tabId" }, { status: 400 });
    }

    // Unselect all tabs
    await Prisma.tabs.updateMany({
      data: { isSelected: false },
    });

    // Select the given tab
    const updatedTab = await Prisma.tabs.update({
      where: { tabId },
      data: { isSelected: true },
    });

    return NextResponse.json({ message: "Tab selection updated", tab: updatedTab });
  } catch (error) {
    console.error("Error updating selected tab:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const tabIdParam = searchParams.get("tabId");
    const tabId = tabIdParam ? parseInt(tabIdParam, 10) : NaN;

    if (isNaN(tabId)) {
      return NextResponse.json({ error: "Invalid or missing tabId" }, { status: 400 });
    }

    const deletedTab = await Prisma.tabs.delete({
      where: { tabId },
    });

    return NextResponse.json({ message: "Tab deleted successfully", tab: deletedTab });
  } catch (error: any) {
    console.error("Error deleting tab:", error);

    if (error.code === "P2025") {
      return NextResponse.json({ error: "Tab not found" }, { status: 404 });
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
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
