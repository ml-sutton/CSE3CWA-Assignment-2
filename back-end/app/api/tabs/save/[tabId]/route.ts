import { Prisma } from "../../../../_lib/Prisma";
import { NextRequest, NextResponse } from "next/server";
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

