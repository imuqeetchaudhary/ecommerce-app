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
}) => {
  return (
    <div className="single-card">
      <Card border="primary">
        <Card.Img src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{detail}</Card.Text>
          <Card.Text>$ {price}</Card.Text>
          <Card.Text>quantity {no}</Card.Text>
          <Button variant="primary" type="submit" onClick={handleCartChange}>
            {children}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProductCard;
