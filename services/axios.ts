import axios from "axios";

// Configuration of axios

export const axiosInstance = axios.create({
  baseURL: "https://api.openai.com/v1/chat/completions",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_API_KEY}`,
  },
});

export const axiosServerInstance = axios.create({
  baseURL: "http://localhost:3000/",
});
