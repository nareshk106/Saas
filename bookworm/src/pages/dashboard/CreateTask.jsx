// src/pages/dashboard/CreateTask.jsx
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function CreateTask() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // 🔹 Form state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);

  // 🔹 Data state
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔹 Helper
  const getToken = () => localStorage.getItem("authToken");

  // 🔹 Fetch tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/user", {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      setItems(res.data.data || []);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      if (err.response?.status === 401) {
        logout();
        navigate("/auth/login");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // 🔹 Add or update task
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { title, content };

    try {
      if (editId) {
        const res = await axios.put(`http://localhost:5000/user/${editId}`, payload, {
          headers: { Authorization: `Bearer ${getToken()}` },
        });
        setItems(items.map((i) => (i._id === editId ? res.data.data : i)));
        setEditId(null);
      } else {
        const res = await axios.post(`http://localhost:5000/user`, payload, {
          headers: { Authorization: `Bearer ${getToken()}` },
        });
        setItems([...items, res.data.data]);
      }
      setTitle("");
      setContent("");
    } catch (err) {
      console.error("Error submitting:", err.message);
    }
  };

  // 🔹 Edit task
  const handleEdit = (item) => {
    setTitle(item.title);
    setContent(item.content);
    setEditId(item._id);
  };

  // 🔹 Delete task
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/user/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      setItems(items.filter((i) => i._id !== id));
    } catch (err) {
      console.error("Error deleting:", err.message);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            {editId ? "Edit Task" : "Create a New Task"}
          </h1>
          {items.length > 0 && (
            <span className="text-sm text-gray-500">{items.length} total tasks</span>
          )}
        </div>

        {/* Task Form */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:outline-none p-3 rounded-lg"
              required
            />
            <textarea
              placeholder="Task details..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:outline-none p-3 rounded-lg"
              rows="4"
              required
            />
            <button
              type="submit"
              className="bg-violet-600 text-white py-3 rounded-lg hover:bg-violet-700 transition-all font-semibold"
            >
              {editId ? "Update Task" : "Add Task"}
            </button>
          </form>
        </div>

        {/* Error / Loading */}
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Task List */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Tasks</h2>
          {items.length === 0 ? (
            <p className="text-gray-500 text-center">No tasks yet. Add your first one!</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {items.map((it) => (
                <li
                  key={it._id}
                  className="py-4 flex justify-between items-start hover:bg-gray-50 px-2 rounded-md transition"
                >
                  <div>
                    <h3 className="font-medium text-gray-800">{it.title}</h3>
                    <p className="text-gray-500 text-sm">{it.content}</p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleEdit(it)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(it._id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
