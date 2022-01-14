import React from "react";
import CarouselCard from "./CarouselCard";
import ProductsListing from "./ProductsListing";
import Footer from "./Footer";

const Home = ({ products, handleCartChange }) => {
  return (
    <div>
      <CarouselCard />
      <ProductsListing
        products={products}
        handleCartChange={handleCartChange}
      />
      <Footer />
    </div>
  );
};

export default Home;
