// components/auth/Register.js
import React, { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import "../common/Form.css";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords don't match");
      return;
    }

    try {
      const newUser = await authService.register(email, password);
      console.log("New user registered:", newUser);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const onClose = () => {
    navigate("/");
  };

  return (
    <div className="form-container">
      {" "}
      {/* Apply form styling */}
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="auth-form">
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
        <InputField
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <div className="buttons">
          <Button type="button" onClick={onClose}>
            Close
          </Button>

          <Button type="submit">Register</Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
