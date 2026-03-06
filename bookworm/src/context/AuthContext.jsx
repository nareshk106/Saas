// ✅ src/context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";
import axios from "axios"; // 🆕 added for backend verification

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // 🆕 added loading to handle token checking phase

  useEffect(() => {
    const verifyUser = async () => { // 🆕 new async func to check backend token
      const token = localStorage.getItem("authToken");
      if (!token) {
        setLoading(false); // 🆕 stop loading if no token
        return;
      }

      try {
        // 🆕 verify token with backend
        const res = await axios.get("http://localhost:5000/auth/verify-token", {
          headers: { Authorization: `Bearer ${token}` },
        });

        // 🆕 if backend confirms token is valid, mark authenticated
        if (res.data.valid) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("authToken"); // 🆕 remove invalid token
        }
      } catch (err) {
        localStorage.removeItem("authToken"); // 🆕 also remove if API fails
      } finally {
        setLoading(false); // 🆕 finish loading no matter success/failure
      }
    };

    verifyUser(); // 🆕 call it once when app loads
  }, []);

  const login = (token) => {
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    // 🆕 added loading in context value so any component can check if app is verifying
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
