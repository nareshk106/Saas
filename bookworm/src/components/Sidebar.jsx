// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
export default function Sidebar() {

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", path: "/user/Index" },
    { name: "CreateTasks", path: "/user/CreateTask" },
    { name: "Tasks", path: "/user/tasks" },
    { name: "Profile", path: "/user/profile" },
    { name: "Settings", path: "/user/settings" },
  ];

    const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  return (
    <aside className="w-64 bg-white shadow-lg p-5 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-6">My Dashboard</h2>
        <nav className="flex flex-col gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md ${isActive ? "bg-violet-500 text-white" : "hover:bg-gray-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
         <button
          onClick={handleLogout}
          className="bg-violet-500 text-white px-4 py-2 rounded-md hover:bg-violet-600"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
