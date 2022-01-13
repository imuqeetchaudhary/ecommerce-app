import React from "react";
import { Card, Button } from "react-bootstrap";

const SingleProductCard = ({ img, title, detail }) => {
  return (
    <Card border="primary" style={{ width: "18rem" }}>
      <Card.Img src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{detail}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleProductCard;
