import React from "react";
import { CardGroup } from "react-bootstrap";
import SingleProductCard from "./SingleProductCard";
import Footer from "./Footer";

const AllProducts = ({ handleCartChange, products }) => {
  return (
    <div>
      <CardGroup className="card-group">
        {products.map((product) => {
          console.log(product._id);
          return (
            <SingleProductCard
              key={product._id}
              img={product.image}
              title={product.title}
              detail={product.description}
              price={product.price}
              handleCartChange={handleCartChange}
              children={{ button: "Add to Cart" }}
            />
          );
        })}
      </CardGroup>
      <Footer />
    </div>
  );
};

export default AllProducts;
