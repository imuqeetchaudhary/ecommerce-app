import React from "react";
import { CardGroup } from "react-bootstrap";
import SingleProductCard from "./SingleProductCard";
import { products } from "../Products";

const ProductsListing = () => {
  // const [products, setProducts] = useState(productsArray);

  return (
    <div>
      <CardGroup className="card-group">
        {products.map((product) => (
          <SingleProductCard
            key={product.id}
            img={product.img}
            title={product.title}
            detail={product.detail}
          />
        ))}
      </CardGroup>
    </div>
  );
};

export default ProductsListing;
