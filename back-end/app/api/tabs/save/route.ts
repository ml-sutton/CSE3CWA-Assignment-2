import { Prisma } from "../../../_lib/Prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const tabs = await request.json();

    if (!Array.isArray(tabs)) {
      return NextResponse.json({ error: "Expected an array of tabs" }, { status: 400 });
    }

    // Validate required fields
    const validTabs = tabs.filter(
      (t) =>
        typeof t.tabName === "string" &&
        typeof t.tabBody === "string" &&
        typeof t.isSelected === "boolean"
    );

    if (validTabs.length !== tabs.length) {
      return NextResponse.json({ error: "Some tabs are missing required fields" }, { status: 400 });
    }

    // Clear old tabs (optional — remove if you want to append instead)
    await Prisma.tabs.deleteMany();

    // Bulk insert all new tabs
    const createdTabs = await Prisma.tabs.createMany({
      data: validTabs,
    });

    return NextResponse.json({
      message: "Tabs saved successfully",
      count: createdTabs.count,
    });
  } catch (error) {
    console.error("Error saving tabs:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

