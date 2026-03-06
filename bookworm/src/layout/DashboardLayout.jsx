// src/layouts/DashboardLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar stays visible on all child routes */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top header/navigation */}

        {/* The nested route content appears here */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet /> {/* 👈 React Router will inject child page here */}
        </main>
      </div>
    </div>
  );
}
