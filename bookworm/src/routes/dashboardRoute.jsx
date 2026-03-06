// src/routes/dashboardRoute.js
import { DashboardLayout } from "../layout/DashboardLayout";
import ProtectedRoute from "../components/ProtectedRoute";

// dashboard pages
import Tasks from "../pages/dashboard/Tasks";
import Profile from "../pages/dashboard/Profile";
import Settings from "../pages/dashboard/Settings";
import CreateTask from "../pages/dashboard/CreateTask";
import Index from "../pages/dashboard/Index";
// import Index from "../pages/dashboard/Index";

export const dashboardRoutes = {
  path: "/user", // 👈 this is the missing piece
  element: (
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  ),
  children: [
    { index: true, element: <Index /> },
    { path: "CreateTask", element: <CreateTask /> },
    { path: "tasks", element: <Tasks /> },
    { path: "profile", element: <Profile /> },
    { path: "settings", element: <Settings /> },
    { path: "Index", element: <Index /> },
  ],
};
