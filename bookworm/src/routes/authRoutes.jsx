import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/login";
import Register from "../pages/Auth/register";
export const authRoutes = {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
  ],
};
