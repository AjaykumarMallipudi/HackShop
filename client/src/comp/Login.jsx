import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here (API call, validation, etc.)
    alert(`Logging in with ${email}`);
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login to Hackshop</h2>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="submit-btn">
          Login
        </button>

        <p style={{ marginTop: "15px", color: "#d1fae5" }}>
          Don’t have an account?{" "}
          <span
            onClick={goToRegister}
            style={{ color: "#05b726", cursor: "pointer", fontWeight: "bold" }}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
