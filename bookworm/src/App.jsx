// src/App.jsx
import {createBrowserRouter,RouterProvider, Outlet,NavLink,} from "react-router-dom";
import { rootRoutes } from "./routes/rootRoutes";
import { authRoutes } from "./routes/authRoutes";
import { dashboardRoutes } from "./routes/dashboardRoute";
import Footer from "./components/footer";
// import LogoutButton from "./components/LogoutButton";
export default function App() {

  
// Router setup (inside App)
const router = createBrowserRouter([
  rootRoutes,
  dashboardRoutes,
  authRoutes  
]);

  return (
    <>
    {/* <LogoutButton/> */}
    
    <RouterProvider router={router} />
    <Footer/>
    </>
  )
}
