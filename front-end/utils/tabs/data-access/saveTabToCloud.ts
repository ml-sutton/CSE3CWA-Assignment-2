"use server"

import { UpdateTabRequest } from "@/domain/DTO/UpdateTabRequest";
import { getAPIURL } from "./getAPIURL";

export default async function SaveTabToCloud(tabId: number, tab: UpdateTabRequest) {
  const apiUrl = await getAPIURL();
  await fetch(`${apiUrl}/save/${tabId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tab)
  },)


}
