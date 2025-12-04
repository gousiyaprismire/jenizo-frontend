import React, { useState } from "react";
import axios from "axios";
import "./SignIn.css";

export default function SignIn() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/auth/signup", {
        fullName: form.fullName,
        email: form.email,
        password: form.password
      });

      alert("Account created successfully!");
      window.location.href = "/login";
    } catch (error) {
      alert(error.response.data.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Create Account</h1>
        <p className="subtitle">Sign up to continue with Jenizo IT Tech Pvt Ltd</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input name="fullName" type="text" placeholder="Full Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email Address" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} required />

          <button type="submit" className="auth-btn">Sign In</button>
        </form>

        <p className="redirect-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
