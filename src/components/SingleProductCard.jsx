import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { HandleCartProductsContext } from "./Context";

const SingleProductCard = ({ img, title, detail, price, no }) => {
  const handleCartChange = useContext(HandleCartProductsContext);
  return (
    <Card border="primary" className="single-card">
      <Card.Img src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{detail}</Card.Text>
        <Card.Text>$ {price}</Card.Text>
        <Card.Text>quantity {no}</Card.Text>
        <Button variant="primary" type="submit" onClick={handleCartChange}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleProductCard;
