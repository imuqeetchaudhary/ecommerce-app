import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";
import { productsArray } from "./Products";

let cartProducts2 = [];

function App() {
  const [products] = useState(productsArray);
  const [cartProducts, setCartProducts] = useState([]);

  const handleDeleteCartChange = (e) => {
    e.preventDefault();
    const selectedProductTitle = e.target.parentNode.firstChild.innerText;
    const selctedProduct = cartProducts.filter(
      (product) => product.title !== selectedProductTitle
    );
    setCartProducts(selctedProduct);
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
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home products={products} handleCartChange={handleCartChange} />
          }
        />
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
      <Footer />
    </div>
  );
}

export default App;
