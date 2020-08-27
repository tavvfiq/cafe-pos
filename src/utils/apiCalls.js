import Axios from "axios";

export const fetchAllMenus = () => {
  return Axios.get(`${process.env.REACT_APP_BACKEND_API}/menu`);
};

export const searchAndSortMenus = (query) => {
  const URLString = `${process.env.REACT_APP_BACKEND_API}/menu/filter?name=${
    query.search
  }&by=${query.sortby.replace(" ", "_")}&order=${query.order
    .replace("ending", "")
    .toUpperCase()}`;
  return Axios.get(URLString);
};

export const logIn = (data) => {
  return Axios.post(`${process.env.REACT_APP_BACKEND_API}/auth/login`, data);
};

export const register = (data) => {
  return Axios.post(`${process.env.REACT_APP_BACKEND_API}/auth/register`, data);
};