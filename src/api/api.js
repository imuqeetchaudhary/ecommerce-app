import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
});

const config = api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["authorization"] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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

export const addCartItem = (productId) => {
  return api.post(`/cart/${productId}`, {}, config);
};

export const createProduct = (data) => {
  return api.post("/product", data, config);
};

export const updateProduct = (productId, data) => {
  return api.patch(`/product/${productId}`, data, config);
};

export const deleteProduct = (productId) => {
  return api.delete(`/product/${productId}`, config);
};
