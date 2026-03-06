import React, { useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext"; // <-- import context
import "../../App.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
// login logic fuunction 
const Login = () => {
  // 1️⃣ State holds form fields
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //navigate
  const navigate = useNavigate()
  // 2️⃣ Handles form submission
  async function handleLogin(e) {
    e.preventDefault(); // prevent page reload

    try {
      // 3️⃣ Send form data to backend
      const res = await axios.post("http://localhost:5000/auth/login", {
        email, password
      });

      // 🔑 Extract token from backend response
      const token = res.data.token;
      // ✅ Pass token to AuthContext
      login(token);

      alert("Login successful!");
      navigate('/user/Index')
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed, please check your credentials.");
    }
  }

  // 4️⃣ JSX - Controlled inputs
  return (
    <section className="auth page-with-glow">
      <h1>
        Welcome <span className="highlight">Back</span>
      </h1>
      <p className="subtitle">
        Log in to continue exploring your dashboard and managing your tasks efficiently.
      </p>

      {/* onSubmit triggers handleLogin */}
      <form className="auth-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="primary">
          Login
        </button>

        <p className="auth-switch">
          Don’t have an account? <a href="/auth/register">Register here</a>
        </p>
      </form>
    </section>
  );
};

export default Login;
