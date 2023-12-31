import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("user");
    if (token) {
      const accessToken = JSON.parse(token).accessToken;
      config.headers['x-access-token'] = `${accessToken}`;
    }
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return error;
  },
);

instance.interceptors.response.use((response) => {
  if (response.status === 204) {
    return true;
  }
  return response.data;
});

export default instance;
