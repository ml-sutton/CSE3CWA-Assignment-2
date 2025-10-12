"use server"
import { getAPIURL } from "./getAPIURL";

export default async function CompileTabs() {
  const apiUrl = await getAPIURL();
  const compiledTabs = await fetch(`${apiUrl}/generate`)
  return await compiledTabs.json();
}
