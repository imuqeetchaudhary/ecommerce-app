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
import {
  ProductsContext,
  SetProductsContext,
  CartProductsContext,
  HandleCartProductsContext,
} from "./components/Context";

function App() {
  const [products, setProducts] = useState(productsArray);
  const [cartProducts, setCartProducts] = useState([]);

  const handleCartChange = (e) => {
    e.preventDefault();
    const selectedProductTitle = e.target.parentNode.firstChild.innerText
    const selctedProduct = products.filter(
      (product) => product.title === selectedProductTitle
    );
    setCartProducts([...cartProducts, ...selctedProduct]);
  };

  return (
    <div className="App">
      <Navbar />
      <ProductsContext.Provider value={products}>
        <SetProductsContext.Provider value={setProducts}>
          <Routes>
            <Route
              path="/"
              element={
                <HandleCartProductsContext.Provider value={handleCartChange}>
                  <Home />
                </HandleCartProductsContext.Provider>
              }
            />
            <Route
              path="products"
              element={
                <HandleCartProductsContext.Provider value={handleCartChange}>
                  <AllProducts />
                </HandleCartProductsContext.Provider>
              }
            />
            <Route
              path="cart"
              element={
                <CartProductsContext.Provider value={cartProducts}>
                  <Cart/>
                </CartProductsContext.Provider>
              }
            />
          </Routes>
        </SetProductsContext.Provider>
      </ProductsContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
