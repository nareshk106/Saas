// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../App.css";

export default function Navbar() {
  const { isAuthenticated,loading } = useContext(AuthContext);
   if (loading) return null; // don't render anything while verifying
  // 🧠 If logged in → hide navbar completely
  if (isAuthenticated) return null;

  return (
    <nav className="navbar">
      <div>
        <h2>LOGO</h2>
      </div>

      <div className="navlinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/publishes">Publishes</NavLink>
      </div>

      <div>
        <button><NavLink to="/auth/login">Login</NavLink></button>
        <button><NavLink to="/auth/register">Register</NavLink></button>
      </div>
    </nav>
  );
}
