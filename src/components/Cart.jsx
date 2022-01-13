import React, { useContext } from "react";
import { CartProductsContext } from "./Context";
import { CardGroup } from "react-bootstrap";
import SingleProductCard from "./SingleProductCard";

const Cart = () => {
  const cartProducts = useContext(CartProductsContext);
  return (
    <div className="cart">
      <h1>Cart</h1>
      <CardGroup className="card-group">
        {cartProducts.map((product) => (
          <SingleProductCard
            key={product.id}
            img={product.img}
            title={product.title}
            detail={product.detail}
            price={product.price}
          />
        ))}
      </CardGroup>
    </div>
  );
};

export default Cart;
