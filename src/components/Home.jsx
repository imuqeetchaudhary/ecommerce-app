import React from "react";
import CarouselCard from "./CarouselCard";
import ProductsListing from "./ProductsListing";

const Home = ({ products, handleCartChange }) => {
  return (
    <div>
      <CarouselCard />
      <ProductsListing
        products={products}
        handleCartChange={handleCartChange}
      />
    </div>
  );
};

export default Home;
