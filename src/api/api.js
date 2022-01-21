import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
});

// const config = {
//   headers: {
//     Authorization: localStorage.getItem("token"),
//   },
// };

export const register = (data) => {
  return api.post("/user/register", { ...data });
};

export const login = (data) => {
  return api.post("/user/login", { ...data });
};
