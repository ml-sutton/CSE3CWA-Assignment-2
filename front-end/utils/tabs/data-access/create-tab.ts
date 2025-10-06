"use server"
import { CreateTabRequest } from "@/domain/DTO/CreateTabRequest";
import { revalidatePath } from "next/cache";
export default async function CreateTabAsync(tabCount: number) {
  const apiUrlFromEnv = process.env.API_URL
  const apiUrl = apiUrlFromEnv === undefined ? "http://127.0.0.1:3000/api/tabs" : `${apiUrlFromEnv}/api/tabs`

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

    }

  })
  if (res.status === 500)
    return null
  else
    revalidatePath("/[...tabs]", "page")
  return true


}
