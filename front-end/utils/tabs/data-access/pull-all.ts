"use server"
import { Tab } from "@/domain/models/tab";

export default async function PullAllTabs(): Promise<Tab[]> {
  const apiUrlFromEnv = process.env.API_URL
  const apiUrl = apiUrlFromEnv === undefined ? "http://127.0.0.1:3000/api/tabs" : `${apiUrlFromEnv}/api/tabs`

  const allTabs = await fetch(apiUrl)
  const reqBody = await allTabs.json();
  console.log(reqBody)

  const tabArray: Tab[] = reqBody
  return tabArray;
}
