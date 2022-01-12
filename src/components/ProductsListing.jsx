import React from "react";
import { CardGroup } from "react-bootstrap";
import img from "../img/IMG_9356.jpg";
import SingleProductCard from "./SingleProductCard";
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit ecommerce";

const ProductsListing = () => {
  return (
    <div>
      <CardGroup className="card-group">
        <SingleProductCard img={img} title="Lofer # 1" text={text} />
        <SingleProductCard img={img} title="Lofer # 2" text={text} />
        <SingleProductCard img={img} title="Lofer # 3" text={text} />
        <SingleProductCard img={img} title="Lofer # 4" text={text} />
      </CardGroup>
    </div>
  );
};

export default ProductsListing;
