import React from "react";
import { CardGroup, Col, Row } from "react-bootstrap";
import SingleProductCard from "./SingleProductCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({ cartProducts, setCartProducts, handleDeleteCartChange }) => {
  const totalCartProductsPrice = cartProducts.reduce(
    (accumulator, nextProduct) => {
      return nextProduct.no * nextProduct.price + accumulator;
    },
    0
  );

  let updatedCartProducts = cartProducts;
  const handleIncrementCartProductQuantityChange = (e) => {
    e.preventDefault();

    const selectedProductTitle =
      e.target.parentNode.parentNode.firstChild.innerText;

    const foundIndex = updatedCartProducts.findIndex(
      (product) => product.title === selectedProductTitle
    );

    updatedCartProducts[foundIndex].no += 1;

    setCartProducts(
      updatedCartProducts.filter((product) =>
        product.title === selectedProductTitle
          ? (product.no = updatedCartProducts[foundIndex].no)
          : product
      )
    );

    toast(`Incremented ${selectedProductTitle}'s quantity in the cart`);
  };

  const handleDecrementCartProductQuantityChange = (e) => {
    e.preventDefault();
    const selectedProductTitle =
      e.target.parentNode.parentNode.firstChild.innerText;
    const selctedProduct = cartProducts.filter(
      (product) => product.title === selectedProductTitle
    );

    selctedProduct[0].no -= 1;

    selctedProduct[0].no < 1
      ? setCartProducts(
          cartProducts.filter(
            (product) => product.title !== selectedProductTitle
          )
        )
      : setCartProducts(
          cartProducts.filter((product) =>
            product.title === selectedProductTitle
              ? (product.no = selctedProduct[0].no)
              : product
          )
        );

    toast(`Decremented ${selectedProductTitle}'s quantity in the cart`);
  };

  return (
    <div className="cart">
      {/* <h1>Cart Products</h1> */}
      <h4 className="total-cart-price">
        Total Cart Products Price: {totalCartProductsPrice}
      </h4>
      <Row xs={20} md={20} className="cart-row g-4">
        <Col>
          <CardGroup className="card-group">
            {cartProducts.map((product) => (
              <SingleProductCard
                key={product.id}
                img={product.image}
                title={product.title}
                detail={product.detail}
                price={product.price}
                no={product.no}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                handleCartChange={handleDeleteCartChange}
                children={{
                  button: "Remove From Cart",
                  quantity: "quantity",
                  cart: true,
                }}
                handleIncrementCartProductQuantityChange={
                  handleIncrementCartProductQuantityChange
                }
                handleDecrementCartProductQuantityChange={
                  handleDecrementCartProductQuantityChange
                }
              />
            ))}
          </CardGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
