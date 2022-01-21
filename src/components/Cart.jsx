import React from "react";
import { CardGroup, Col, Row } from "react-bootstrap";
import SingleProductCard from "./SingleProductCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateCartItem, deleteCartItem } from "../api/api";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartProducts, setCartProducts, handleDeleteCartChange }) => {
  const navigate = useNavigate();

  const totalCartProductsPrice = cartProducts.reduce(
    (accumulator, nextProduct) => {
      return nextProduct.quantity * nextProduct.productId.price + accumulator;
    },
    0
  );

  let updatedCartProducts = cartProducts;
  const handleIncrementCartProductQuantityChange = async (e, cartId) => {
    e.preventDefault();
    const foundIndex = updatedCartProducts.findIndex(
      (cart) => cart._id === cartId
    );

    updatedCartProducts[foundIndex].quantity += 1;
    const updatedCartObj = {
      productId: updatedCartProducts[foundIndex].productId._id,
      quantity: updatedCartProducts[foundIndex].quantity,
    };

    try {
      await updateCartItem(cartId, updatedCartObj);
      navigate("/cart");
      toast(
        `Incremented ${updatedCartProducts[foundIndex].productId.title}'s quantity in the cart`
      );
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleDecrementCartProductQuantityChange = async (e, cartId) => {
    e.preventDefault();

    const foundIndex = updatedCartProducts.findIndex(
      (cart) => cart._id === cartId
    );

    updatedCartProducts[foundIndex].quantity -= 1;

    const productTitle = updatedCartProducts[foundIndex].productId.title;

    const updatedCartObj = {
      productId: updatedCartProducts[foundIndex].productId._id,
      quantity: updatedCartProducts[foundIndex].quantity,
    };

    if (updatedCartObj.quantity < 1) {
      try {
        await deleteCartItem(cartId);
        updatedCartProducts.splice(foundIndex, 1);
        navigate("/cart");
        toast(`Removed ${productTitle} from the cart`);
      } catch (err) {
        throw new Error(err);
      }
    } else {
      try {
        await updateCartItem(cartId, updatedCartObj);
        navigate("/cart");
        toast(
          `Decremented ${updatedCartProducts[foundIndex].productId.title}'s quantity in the cart`
        );
      } catch (err) {
        throw new Error(err);
      }
    }
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
            {cartProducts.map((product) => {
              return (
                <SingleProductCard
                  key={product.productId._id}
                  productId={product.productId._id}
                  cartId={product._id}
                  img={product.productId.image}
                  title={product.productId.title}
                  detail={product.productId.description}
                  price={product.productId.price}
                  no={product.quantity}
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
              );
            })}
          </CardGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
