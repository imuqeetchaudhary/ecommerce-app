import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { register, login } from "../api/api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userObj = {
      name,
      email,
      password,
    };

    try {
      const registerRes = await register(userObj);

      const loginRes = await login(userObj);
      localStorage.setItem("token", loginRes.data.token);

      toast(`${registerRes.data.message}`);
      setErrorMsg("");

      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      setErrorMsg(err.response.data.message);
    }
  };

  return (
    <div className="register">
      <h1 className="heading">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            required
          />
        </div>
        <br />
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
        </div>
        <br />
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
          />
        </div>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
    </div>
  );
};

export default Register;
