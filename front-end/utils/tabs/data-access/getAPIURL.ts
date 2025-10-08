"use server"

export const getAPIURL = async () => {
  const apiUrlFromEnv = process.env.API_URL
  const apiUrl = apiUrlFromEnv === undefined ? "http://127.0.0.1:3000/api/tabs" : `${apiUrlFromEnv}/api/tabs`
  return apiUrl;
}
