import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import AllProducts from "./components/AllProducts";
import {
  getAllProducts,
  addCartItem,
  getCartItems,
  deleteCartItem,
  updateCartItem,
} from "./api/api";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [isFetchedAllProducts, setIsFetchedAllProducts] = useState(false);
  const [isFetchedCartItems, setIsFetchedCartItems] = useState(false);

  const handleDeleteCartChange = async (e, cartId) => {
    e.preventDefault();

    const foundIndex = cartProducts.findIndex((cart) => cart._id === cartId);

    try {
      await deleteCartItem(cartId);
      cartProducts.splice(foundIndex, 1);
      toast(`Removed from the cart`);
      navigate("/cart");
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleCartChange = async (e, id) => {
    e.preventDefault();

    const foundIndex = cartProducts.findIndex(
      (cart) => cart.productId._id === id
    );

    if (foundIndex < 0) {
      try {
        await addCartItem(id);
        toast(`Added product into the cart`);

        const cartRes = await getCartItems();
        setCartProducts(cartRes.data.cart);
      } catch (err) {
        throw new Error(err);
      }
    } else {
      cartProducts[foundIndex].quantity += 1;

      const updatedCartObj = {
        productId: cartProducts[foundIndex].productId._id,
        quantity: cartProducts[foundIndex].quantity,
      };

      const cartId = cartProducts[foundIndex]._id;

      try {
        await updateCartItem(cartId, updatedCartObj);
        toast(
          `Incremented ${cartProducts[foundIndex].productId.title}'s quantity in the cart`
        );
      } catch (err) {
        throw new Error(err);
      }
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (!isFetchedAllProducts) {
          const res = await getAllProducts();
          setProducts(res.data.products);
          setIsFetchedAllProducts(true);
        }
      } catch (err) {
        throw new Error(err);
      }
    };

    const fetchCartItems = async () => {
      try {
        if (!isFetchedCartItems) {
          const res = await getCartItems();
          setCartProducts(res.data.cart);
          setIsFetchedCartItems(true);
        }
      } catch (err) {
        throw new Error(err);
      }
    };

    fetchProducts();
    fetchCartItems();
  }, [isFetchedAllProducts, isFetchedCartItems]);

  return (
    <div className="App">
      <Navbar />
      <ToastContainer position="top-right" theme="light" />
      <Routes>
        <Route
          path="/"
          element={
            <Home products={products} handleCartChange={handleCartChange} />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="products"
          element={
            <AllProducts
              products={products}
              handleCartChange={handleCartChange}
            />
          }
        />
        <Route
          path="cart"
          element={
            <Cart
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              handleDeleteCartChange={handleDeleteCartChange}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
