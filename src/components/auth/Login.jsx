// components/auth/Login.js
import React, { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import "../common/Form.css"; // Import shared form styling
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await authService.login(email, password);
      console.log("Logged in:", user);
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  const onClose = () => {
    navigate("/");
  };
  return (
    <div className="form-container">
      {" "}
      {/* Apply form styling */}
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
        {" "}
        {/* Apply form styling */}
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="buttons">
          <Button type="button" onClick={onClose}>
            Close
          </Button>

          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
