import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
});

const config = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
};

export const register = (data) => {
  return api.post("/user/register", { ...data });
};

export const login = (data) => {
  return api.post("/user/login", { ...data });
};

export const getAllProducts = () => {
  return api.get("/product");
};

export const getCartItems = () => {
  return api.get("/cart", config);
};

export const updateCartItem = (cartId, data) => {
  return api.patch(`/cart/${cartId}`, { ...data }, config);
};

export const deleteCartItem = (cartId) => {
  return api.delete(`/cart/${cartId}`, config);
};
