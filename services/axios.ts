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

// Routes

/**
 * LOGIN
 *
 *  POST -   login   - /
 *  POST -  signup  - /signup
 *
 *
 * FETCH DATA
 *
 * GET  /conversations
 *      Fetch the conversation history log
 *
 *
 * GET  /conversations/:id
 *      Fetch specific  conversation by id:string
 *
 * POST /conversations
 *      Creates a new conversation. This endpoint is used when starting a new conversation thread.
 *      Will pass id from the frontend to be synced.
 *
 * PATCH - /conversations/:id
 *      Updates an existing conversation, typically used for adding a new message to a conversation. The :id parameter identifies the specific conversation to be updated.
 *
 */
