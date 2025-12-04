import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Login</h1>
        <p className="subtitle">Welcome back! Please login to continue</p>

        <form className="auth-form">
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />

          <button type="submit" className="auth-btn">Login</button>
        </form>

        <p className="redirect-text">
          Don't have an account? <a href="/signin">Create Account</a>
        </p>
      </div>
    </div>
  );
}
