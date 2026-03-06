import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Publishes from "../pages/Publishes";
import RootLayout from "../layout/RootLayout";
// import CreateTask from "../pages/dashboard/CreateTask";

import ProtectedRoute from "../components/ProtectedRoute"; // ✅ import
export const rootRoutes= {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "publishes", element: <Publishes /> },
      // { path: "auth/user", element: <User /> },
    ],
}                                                                                               