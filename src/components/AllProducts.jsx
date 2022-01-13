import React, { useContext } from "react";
import { CardGroup } from "react-bootstrap";
import SingleProductCard from "./SingleProductCard";
import { ProductsContext } from "./Context";

const AllProducts = () => {
  const products = useContext(ProductsContext);
  return (
    <div>
      <CardGroup className="card-group">
        {products.map((product) => (
          <SingleProductCard
            key={product.id}
            img={product.img}
            title={product.title}
            detail={product.detail}
          />
        ))}
      </CardGroup>
    </div>
  );
};

export default AllProducts;
