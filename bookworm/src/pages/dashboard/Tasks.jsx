// src/pages/dashboard/Tasks.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  async function fetchTasks() {
    const token = localStorage.getItem("authToken");
    const res = await axios.get("http://localhost:5000/user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(res.data.data || []);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Your Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((t) => (
            <li key={t._id} className="bg-white shadow p-3 rounded-md">
              <h3 className="font-medium">{t.title}</h3>
              <p>{t.content}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
