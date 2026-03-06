// src/components/LogoutButton.jsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isAuthenticated) return null; // hide button before login

  return (
    <button
      className="logout-btn cursor-pointer"
      onClick={() => {
        logout();
        navigate("/auth/login");
      }}
    >
      Logout
    </button>
  );
}
