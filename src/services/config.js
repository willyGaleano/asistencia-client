import axios from "axios";
import { BASE_URL_API_LOCAL } from "../utils/consts";

const axiosInstance = axios.create({
  baseURL: BASE_URL_API_LOCAL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    if (err.message === "Network Error" && !err.response) {
      console.log("Network Error - Asegúrese de que la API se este ejecutando");
      return;
    }

    return Promise.reject(err);
  }
);

export default axiosInstance;
