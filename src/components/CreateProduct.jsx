import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { createProduct } from "../api/api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProduct = ({ products, setProducts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [selectedImage, setSelectedImage] = useState();
  const [msg, setMsg] = useState({ error: "", success: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", selectedImage);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);

    try {
      const res = await createProduct(formData);
      setMsg({ success: "Successfully created new Product", error: "" });
      toast(`Successfully created ${title}`);
      setProducts([...products, res.data.product]);
    } catch (err) {
      setMsg({
        success: "",
        error: "Something went wrong while creating new product",
      });
      throw new Error(err);
    }
  };

  return (
    <div className="create-product">
      <h1 className="heading">Create New Product</h1>
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
        <div>
          <label>Select Image: </label>
          <input
            className="input-image"
            type="file"
            onChange={(e) => setSelectedImage(e.target.files[0])}
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

export default CreateProduct;
