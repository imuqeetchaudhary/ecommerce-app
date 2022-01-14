import React from "react";
import { CardGroup, Col, Row } from "react-bootstrap";
import SingleProductCard from "./SingleProductCard";

const Cart = ({ cartProducts, handleDeleteCartChange }) => {
  const totalCartProductsPrice = cartProducts.reduce(
    (accumulator, nextProduct) => {
      return nextProduct.no * nextProduct.price + accumulator;
    },
    0
  );

  return (
    <div className="cart">
      <h1>Cart Products</h1>
      <Row xs={20} md={20} className="cart-row g-4">
        <Col>
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
                handleCartChange={handleDeleteCartChange}
                children={{ button: "Remove From Cart", quantity: "quantity" }}
              />
            ))}
          </CardGroup>
        </Col>
      </Row>
      <h3>Total Cart Products Price: {totalCartProductsPrice}</h3>
    </div>
  );
};

export default Cart;
