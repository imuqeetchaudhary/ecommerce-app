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
  SetCartProductsContext,
} from "./components/Context";

function App() {
  const [products, setProducts] = useState(productsArray);
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <ProductsContext.Provider value={products}>
        <SetProductsContext.Provider value={setProducts}>
          <CartProductsContext.Provider value={cartProducts}>
            <SetCartProductsContext.Provider value={setCartProducts}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products" element={<AllProducts />} />
                <Route path="cart" element={<Cart />} />
              </Routes>
            </SetCartProductsContext.Provider>
          </CartProductsContext.Provider>
        </SetProductsContext.Provider>
      </ProductsContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
