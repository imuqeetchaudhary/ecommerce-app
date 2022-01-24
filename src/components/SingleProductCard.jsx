import React from "react";
import { Card, Button } from "react-bootstrap";

const SingleProductCard = ({
  img,
  title,
  detail,
  price,
  no,
  children,
  handleCartChange,
  handleDeleteProduct,
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
                  handleDecrementCartProductQuantityChange(e, children.id)
                }
              >
                -
              </Button>
              {`         ${children.quantity} ${no}         `}
              <Button
                variant="outline-success"
                onClick={(e) =>
                  handleIncrementCartProductQuantityChange(e, children.id)
                }
              >
                +
              </Button>
            </Card.Text>
          )}
          {children.route === "/products" && (
            <Button
              className="delete-btn"
              variant="primary"
              type="submit"
              onClick={(e) => handleDeleteProduct(e, children.id)}
            >
              Delete Product
            </Button>
          )}
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleCartChange(e, children.id)}
          >
            {children.button}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProductCard;
