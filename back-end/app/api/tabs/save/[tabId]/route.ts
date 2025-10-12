import CorsHeaders from "@/consts/corsHeaders";
import { Prisma } from "../../../../_lib/Prisma";
import { NextRequest, NextResponse } from "next/server";

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: CorsHeaders,
  });
}


export async function PATCH(request: NextRequest, { params }: { params: { tabId: string } }) {
  try {
    const localTabId = parseInt(params.tabId, 10);

    if (isNaN(localTabId)) {
      return NextResponse.json({ error: "Invalid tabId" }, { status: 400 });
    }

    const tab = await request.json();

    // Validate required fields
    if (
      typeof tab.tabName !== "string" ||
      typeof tab.tabBody !== "string" ||
      typeof tab.isSelected !== "boolean"
    ) {
      return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
    }

    // Update the specific tab
    const updatedTab = await Prisma.tabs.update({
      where: { tabId: localTabId },
      data: {
        tabName: tab.tabName,
        tabBody: tab.tabBody,
        isSelected: tab.isSelected,
      },
    });

    return NextResponse.json({
      message: "Tab updated successfully",
      tab: updatedTab,
    });
  } catch (error) {
    console.error("Error updating tab:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { tabId: string } }) {
  try {
    console.log("this runs on the server")
    const localTabId = Number(params.tabId);

    if (isNaN(localTabId) || localTabId <= 0) {
      return NextResponse.json({ error: "Invalid or missing tabId" }, { status: 400, headers: CorsHeaders });
    }

    const deletedTab = await Prisma.tabs.delete({
      where: { tabId: localTabId },
    });

    return NextResponse.json(
      { message: "Tab deleted successfully", tab: deletedTab },
      { status: 200, headers: CorsHeaders }
    );
  } catch (error: any) {
    console.error("Error deleting tab:", error);

    if (error.code === "P2025") {
      return NextResponse.json({ error: "Tab not found" }, { status: 404, headers: CorsHeaders });
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500, headers: CorsHeaders });
  }
}

