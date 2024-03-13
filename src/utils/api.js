import axios from 'axios';

const client = axios.create({
  baseURL: "https://api.adriatic.hr"
});

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export const fetchaccommodationsData = async () => {
  try {
    const response = await client.get("/test/accommodation");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
