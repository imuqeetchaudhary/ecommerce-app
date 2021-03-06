import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { login } from "../api/api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userObj = {
      email,
      password,
    };

    try {
      const res = await login(userObj);
      localStorage.setItem("token", res.data.token);

      toast(`Successfully Logged In`);
      setErrorMsg("");
      setTimeout(() => navigate("/"), 500);
      // setTimeout(() => (window.location.href = "http://localhost:3000/"), 500);
    } catch (err) {
      setErrorMsg(err.response.data.message);
      throw new Error(err);
    }
  };

  return (
    <div className="login">
      <h1 className="heading">Log In</h1>
      <form onSubmit={handleSubmit}>
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
        {errorMsg && <p className="error-msg">{errorMsg}</p>}
      </form>
    </div>
  );
};

export default Login;
