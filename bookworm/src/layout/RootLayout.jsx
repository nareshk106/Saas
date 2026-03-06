import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { Outlet } from 'react-router-dom'
const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "1rem" }}>
        <Outlet /> {/* Nested routes render here */}
      </main>
    </div>
  )
}

export default RootLayout