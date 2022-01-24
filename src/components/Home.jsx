import React from "react";
import CarouselCard from "./CarouselCard";
import ProductsListing from "./ProductsListing";
import Footer from "./Footer";

const Home = ({ products, handleCartChange, handleDeleteProduct }) => {
  return (
    <div>
      <CarouselCard />
      <ProductsListing
        products={products}
        handleCartChange={handleCartChange}
        handleDeleteProduct={handleDeleteProduct}
      />
      <Footer />
    </div>
  );
};

export default Home;
