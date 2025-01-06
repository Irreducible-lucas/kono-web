import axios, { AxiosInstance } from "axios";

const env: any = "live"; // or dev
const instance: AxiosInstance = axios.create({
  baseURL:
    env === "dev"
      ? "http://127.0.0.1:3000/api/"
      : "https://kono-backend-api.onrender.com/api/",
});

export default instance;
// https://kono-backend-api.onrender.com
