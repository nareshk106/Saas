// src/pages/dashboard/Settings.jsx
import React, { useState } from "react";
import axios from "axios";

export default function Settings() {
  const token = localStorage.getItem("authToken");

  // 🧠 Preferences (example)
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  // 🧠 Password change fields
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [message, setMessage] = useState("");

  // 🔑 Handle password update
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (newPass !== confirmPass) {
      setMessage("Passwords do not match ❌");
      return;
    }
    try {
      await axios.put(
        "http://localhost:5000/api/change-password",
        { oldPass, newPass },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage("Password updated successfully ✅");
      setOldPass("");
      setNewPass("");
      setConfirmPass("");
    } catch (err) {
      console.error("Password update failed:", err);
      setMessage("Error updating password ❌");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Settings ⚙️</h2>

      {/* Preferences section */}
      <div className="space-y-4 mb-8">
        <h3 className="text-lg font-semibold mb-2">Preferences</h3>
        <div className="flex justify-between items-center">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
        <div className="flex justify-between items-center">
          <span>Email Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>
      </div>

      {/* Password change section */}
      <h3 className="text-lg font-semibold mb-2">Change Password</h3>
      {message && <p className="text-sm text-violet-600 mb-2">{message}</p>}
      <form onSubmit={handlePasswordChange} className="flex flex-col gap-4">
        <input
          type="password"
          placeholder="Current Password"
          value={oldPass}
          onChange={(e) => setOldPass(e.target.value)}
          className="border px-3 py-2 rounded w-full"
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
          className="border px-3 py-2 rounded w-full"
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          className="border px-3 py-2 rounded w-full"
          required
        />
        <button
          type="submit"
          className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-md"
        >
          Update Password
        </button>
      </form>
    </div>
  );
}
