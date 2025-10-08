"use server"

import { getAPIURL } from "./getAPIURL";

export default async function UpdateSelected(tabId: number) {
  const apiUrl = await getAPIURL();
  await fetch(`${apiUrl}?tabId=${tabId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    }
  },)


}
