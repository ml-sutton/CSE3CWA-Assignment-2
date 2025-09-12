-- CreateTable
CREATE TABLE "public"."Tab" (
    "tabId" SERIAL NOT NULL,
    "tabName" TEXT NOT NULL,
    "tabBody" TEXT,
    "isSelected" BOOLEAN NOT NULL,
    "inDB" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Tab_pkey" PRIMARY KEY ("tabId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tab_isSelected_key" ON "public"."Tab"("isSelected");
