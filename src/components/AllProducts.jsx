import React from "react";
import { CardGroup } from "react-bootstrap";
import SingleProductCard from "./SingleProductCard";
import Footer from "./Footer";

const AllProducts = ({ handleCartChange, products, handleDeleteProduct }) => {
  return (
    <div>
      <CardGroup className="card-group">
        {products.map((product) => {
          return (
            <SingleProductCard
              key={product._id}
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
          );
        })}
      </CardGroup>
      <Footer />
    </div>
  );
};

export default AllProducts;
