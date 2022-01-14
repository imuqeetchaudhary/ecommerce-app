import React from "react";
import { CardGroup } from "react-bootstrap";
import SingleProductCard from "./SingleProductCard";

const ProductsListing = ({ products, handleCartChange }) => {
  return (
    <div>
      <CardGroup className="card-group">
        {products.map((product) => (
          <SingleProductCard
            key={product.id}
            img={product.img}
            title={product.title}
            detail={product.detail}
            price={product.price}
            handleCartChange={handleCartChange}
            children={{ button: "Add to Cart" }}
          />
        ))}
      </CardGroup>
    </div>
  );
};

export default ProductsListing;
