// src/pages/dashboard/Profile.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
  // 🧠 State variables
  const [user, setUser] = useState(null);   // store fetched user info
  const [name, setName] = useState("");     // editable name field
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // 🔑 Get token from localStorage
  const token = localStorage.getItem("authToken");

  // 📦 Fetch user info from backend
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:5000/api/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.user);
        setName(res.data.user.name); // prefill editable field
      } catch (err) {
        console.error("Error fetching profile:", err);
        setMessage("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [token]);

  // 🧾 Update profile info (PUT request)
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        "http://localhost:5000/api/me",
        { name },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUser(res.data.user);
      setMessage("Profile updated successfully ✅");
    } catch (err) {
      console.error("Error updating profile:", err);
      setMessage("Update failed ❌");
    }
  };

  // 🧱 UI
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>

      {loading && <p>Loading...</p>}
      {message && <p className="text-sm text-violet-600 mb-2">{message}</p>}

      {user && (
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border px-3 py-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="text"
              value={user.email}
              disabled
              className="border px-3 py-2 rounded w-full bg-gray-100"
            />
          </div>

          <button
            type="submit"
            className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-md"
          >
            Update Profile
          </button>
        </form>
      )}
    </div>
  );
}
