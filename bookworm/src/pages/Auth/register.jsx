import React, { useState } from "react";
import "../../App.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  //for navigation
  const navigate=useNavigate()

  // register logic for sending post request 
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/auth/register", {
        name,
        email,
        password,
        confirmPassword,
      });

      console.log("✅ Registration Successful:", response.data);
      setName("")
      alert("Registration successful!");


      navigate('/auth/login')


    } catch (error) {
      console.error("❌ Registration failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Registration failed!");
    }
  }


  return (
    <section className="auth-page">
      <div className="auth">
        <h1>
          Create <span className="highlight">Account</span>
        </h1>
        <p className="subtitle">
          Join our community and start your productivity journey today.
        </p>

        <form className="auth-form " onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type="password" placeholder="Confirm Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

          <button type="submit" className="primary">Register</button>

          <p className="auth-switch">
            Already have an account? <a href="/auth/login">Login here</a>
          </p>
        </form>
      </div>
    </section>

  );
};

export default Register;
