import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { login } from "../api/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userObj = {
      email,
      password,
    };

    try {
      const res = await login(userObj);
      console.log(res);
      res.status === 200 && setSuccessMsg("Successfully Logged In");
      setErrorMsg("");
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      console.log(err.response);
      setErrorMsg(err.response.data.message);
      setSuccessMsg("");
    }
  };

  useEffect(() => {
    successMsg && setTimeout(() => navigate("/"), 2000);
  });

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
        {successMsg ? (
          <p className="success-msg">{successMsg}</p>
        ) : (
          <p className="error-msg">{errorMsg}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
