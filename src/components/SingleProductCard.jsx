import React from "react";
import { Card, Button } from "react-bootstrap";

const SingleProductCard = ({
  productId,
  cartId,
  img,
  title,
  detail,
  price,
  no,
  children,
  handleCartChange,
  handleIncrementCartProductQuantityChange,
  handleDecrementCartProductQuantityChange,
}) => {
  return (
    <div className="single-card">
      <Card border="primary">
        <Card.Img src={`http://localhost:8000/${img}`} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{detail}</Card.Text>
          <Card.Text>$ {price}</Card.Text>
          {children.cart && (
            <Card.Text>
              <Button
                variant="outline-danger"
                onClick={(e) =>
                  handleDecrementCartProductQuantityChange(e, cartId)
                }
              >
                -
              </Button>
              {`         ${children.quantity} ${no}         `}
              <Button
                variant="outline-success"
                onClick={(e) =>
                  handleIncrementCartProductQuantityChange(e, cartId)
                }
              >
                +
              </Button>
            </Card.Text>
          )}
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleCartChange(e, productId, cartId)}
          >
            {children.button}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProductCard;
