import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { updateProduct } from "../api/api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProduct = ({ products, setProducts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [productId, setProductId] = useState();
  const [msg, setMsg] = useState({ error: "", success: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataObj = {
      title,
      description,
      price,
    };

    try {
      await updateProduct(productId, dataObj);
      setMsg({ success: "Successfully updated Product", error: "" });
      toast(`Successfully updated ${title}`);

      const newProducts = products.filter((product) => {
        if (product._id === productId) {
          product.title = title ? title : product.title;
          product.description = description ? description : product.description;
          product.price = price ? price : product.price;
        }
        return product;
      });

      setProducts(newProducts);
    } catch (err) {
      setMsg({
        success: "",
        error: "Something went wrong while updated product",
      });
      throw new Error(err);
    }
  };

  const handleSelectChange = (e) => {
    setProductId(e.target.value);
  };

  return (
    <div className="create-product">
      <h1 className="heading">Update New Product</h1>
      <select
        className="select"
        defaultValue={productId}
        onChange={handleSelectChange}
      >
        Select a product
        {products.map((product) => (
          <option key={product._id} value={product._id}>
            {product.title}
          </option>
        ))}
      </select>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            className="input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Description: </label>
          <input
            className="input"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Price: </label>
          <input
            className="input"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {msg.error && <p className="error-msg">{msg.error}</p>}
      </form>
    </div>
  );
};

export default UpdateProduct;
