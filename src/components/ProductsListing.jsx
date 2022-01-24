import React from "react";
import { CardGroup } from "react-bootstrap";
import SingleProductCard from "./SingleProductCard";

const ProductsListing = ({
  products,
  handleCartChange,
  handleDeleteProduct,
}) => {
  return (
    <div>
      <CardGroup className="card-group">
        {products.map((product) => (
          <SingleProductCard
            key={product._id}
            id={product._id}
            img={product.image}
            title={product.title}
            detail={product.description}
            price={product.price}
            handleCartChange={handleCartChange}
            handleDeleteProduct={handleDeleteProduct}
            children={{
              button: "Add to Cart",
              id: product._id,
              route: "/products",
            }}
          />
        ))}
      </CardGroup>
    </div>
  );
};

export default ProductsListing;
