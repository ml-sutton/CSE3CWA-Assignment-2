"use server"
import { CreateTabRequest } from "@/domain/DTO/CreateTabRequest";
import { revalidatePath } from "next/cache";
import { getAPIURL } from "./getAPIURL";
export default async function CreateTabAsync(tabCount: number) {
  const apiUrl = await getAPIURL();

  if (tabCount + 1 === 16) {
    return false
  }
  const newTab: CreateTabRequest = {
    tabName: `New Tab #${tabCount + 1}`,
    tabBody: "This is a new tab, Please edit me!",
    isSelected: tabCount != 0 ? false : true
  }

  const res = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newTab),
    headers: {
      "Content-Type": "application/json",
    }

  })
  if (res.status === 500)
    return null
  else
    revalidatePath("/[...tabs]", "page")
  return true


}
