import axios from "axios";

const ACCESS_KEY = "KEzkfcVmUKxKt9TosH4RcNxHqSP4xZtZ0mYg7qwDGuE";

axios.defaults.baseURL = "https://api.unsplash.com";

export default async function searchRequest(topic) {
  try {
    const response = await axios.get("/search/photos", {
      params: {
        query: topic,
        client_id: ACCESS_KEY,
        per_page: 10,
        orientation: "landscape",
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Search error:", error);
    return [];
  }
}
