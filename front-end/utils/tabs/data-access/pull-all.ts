export default async function PullAllTabs() {
  const apiUrlFromEnv = process.env.API_URL
  const apiUrl = apiUrlFromEnv === "undefined" ? "http://127.0.0.1:3000/api/tabs" : apiUrlFromEnv

  const allTabs = await fetch(apiUrl as string)
  const reqBody = allTabs.body;

  return reqBody;
}
