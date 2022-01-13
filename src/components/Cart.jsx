import React from "react";
import { CardGroup } from "react-bootstrap";
import SingleProductCard from "./SingleProductCard";

const Cart = ({ cartProducts }) => {
  const totalCartProductsPrice = cartProducts.reduce(
    (accumulator, nextProduct) => {
      return nextProduct.no * nextProduct.price + accumulator;
    },
    0
  );

  return (
    <div className="cart">
      <h1>Cart</h1>
      <h3>Total Cart Products Price: {totalCartProductsPrice}</h3>
      <CardGroup className="card-group">
        {cartProducts.map((product) => (
          <SingleProductCard
            key={product.id}
            img={product.img}
            title={product.title}
            detail={product.detail}
            price={product.price}
            no={product.no}
            cartProducts={cartProducts}
            children={"Remove From Cart"}
          />
        ))}
      </CardGroup>
    </div>
  );
};

export default Cart;
