import axios from "axios";
import instance from "../config/axios";

const API_URL = "http://localhost:3000/api/auth/";

const url = "/v1/auth";

const register = (username, email, password) => {
  return axios.post(url + "signup", {
    username,
    email,
    password,
  });
};

const login = (data) => {
  return instance.post(`${url}/signin`, data);
};

const logout = () => {
  return instance.post(`${url}/signout`);
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
