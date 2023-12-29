import axios from "axios";
import instance from "../config/axios";

const API_URL = "http://localhost:3000/api/test/";

const url = "/v1/user";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user");
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod");
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin");
};

const createUser = (data) => {
  return instance.post(url, data);
};

const updateUser = (id, data) => {
  return instance.patch(`${url}/${id}`, data);
};

const getUsers = (keyword) => {
  return instance.get(url, {
    params: {
      keyword,
    },
  });
};

const getUserByRole = (role, keyword) => {
  return instance.get(`${url}/getUserByRole/${role}`);
};
const getUserById = (id) => {
  return instance.get(`${url}/${id}`);
};

const deleteUserById = (id) => {
  return instance.delete(`${url}/${id}`);
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  createUser,
  updateUser,
  getUsers,
  getUserById,
  deleteUserById,
  getUserByRole,
};

export default UserService;
