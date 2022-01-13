import React, { useContext } from "react";
import { CartProductsContext } from "./Context";
import { CardGroup } from "react-bootstrap";
import SingleProductCard from "./SingleProductCard";

const Cart = () => {
  const cartProducts = useContext(CartProductsContext);

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
          />
        ))}
      </CardGroup>
    </div>
  );
};

export default Cart;
