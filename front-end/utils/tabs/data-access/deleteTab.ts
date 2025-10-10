"use server"

import { redirect } from "next/navigation";
import { getAPIURL } from "./getAPIURL"

export default async function DeleteTabAsync(tabId: number) {
  const apiUrl = await getAPIURL();

  const res = await fetch(`${apiUrl}/save/${tabId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });
  if (res.status === 404)
    return false
  if (res.status === 500)
    return null
  redirect("/")
  return true

}
