"use server"
import { Tab } from "@/domain/models/tab";
import { getAPIURL } from "./getAPIURL";

export default async function PullAllTabs(): Promise<Tab[]> {
  const apiUrl = await getAPIURL();


  const allTabs = await fetch(apiUrl)
  const reqBody = await allTabs.json();
  console.log(reqBody)

  const tabArray: Tab[] = reqBody
  return tabArray;
}
