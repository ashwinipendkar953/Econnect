import axios from "axios";
import store from "../app/store";
// import { logout } from "../features/auth/authSlice";

// Ensure the environment variable is loaded correctly
const API_URL = import.meta.env.VITE_APP_API_URL;

const api = axios.create({
  baseURL: `${API_URL}/api`,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      //   store.dispatch(logout());
      alert("Session expired. Please login again.");
    }
    return Promise.reject(error);
  }
);

export default api;
