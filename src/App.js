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
import { getAllProducts } from "./api/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let cartProducts2 = [];

function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  const handleDeleteCartChange = (e) => {
    e.preventDefault();
    const selectedProductTitle = e.target.parentNode.firstChild.innerText;
    const selctedProduct = cartProducts.filter(
      (product) => product.title !== selectedProductTitle
    );
    setCartProducts(selctedProduct);

    toast(`Removed ${selectedProductTitle} from the cart`);
  };

  const handleCartChange = (e) => {
    e.preventDefault();
    const selectedProductTitle = e.target.parentNode.firstChild.innerText;
    const selctedProduct = products.filter(
      (product) => product.title === selectedProductTitle
    );

    let isFound;
    let foundIndex;

    cartProducts2.length > 0
      ? (foundIndex = cartProducts2.findIndex((product) => {
          return product.id === selctedProduct[0].id
            ? (isFound = true)
            : (isFound = false);
        }))
      : (isFound = false);

    isFound
      ? (cartProducts2[foundIndex].no += 1)
      : (cartProducts2 = [...cartProducts2, ...selctedProduct]);

    setCartProducts(cartProducts2);

    toast(`Added ${selectedProductTitle} into the cart`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (!isFetched) {
          const res = await getAllProducts();
          setProducts(res.data.products);
          setIsFetched(true);
        }
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchProducts();
  }, [isFetched]);

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
