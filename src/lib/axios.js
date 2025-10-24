import axios from "axios";

// Use Vite env variable VITE_API_URL for production API base URL.
// In development fall back to localhost:3000. In production, if VITE_API_URL
// is not provided, an empty string will make axios request to the same origin
// which is useful when backend and frontend are served from the same host.
const API_BASE = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL.replace(/\/$/, "")
  : import.meta.env.MODE === "development"
  ? "http://localhost:3000"
  : "";

export const axiosInstance = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});
