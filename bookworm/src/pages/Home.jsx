import React from 'react'
import '../App.css'
import { Navigate, useNavigate } from 'react-router-dom';
import dashboardPreview from "../assets/image.jpg";
import ClientsSection from '../components/ClientsSection';
// import Footer from '../components/footer';
// import example from '/vite.svg';

const Home = () => {

  const navigate=useNavigate()
  return (
    <>
      <section className="hero">
        <div className="hero-bg"></div> {/* 👈 background glow */}

        <p className="tag">✨ We've just released a new feature</p>
        <h1>
          Boost Your <span className="highlight">Productivity</span>,<br />
          Simplify Your <span className="highlight">Life</span>
        </h1>
        <p className="subtitle">
          We’re here to simplify the intricacies of your life, providing a user-friendly
          platform that manages your tasks effortlessly.
        </p>
        <div className="buttons">
          <button onClick={()=>(navigate("/auth/register"))} className="primary">Get Started</button>
          {/* <button className="secondary">Preview Platform</button> */}
        </div>
              {/* 🖼 Dashboard mockup image */}
      <div className="hero-image">
        <img src={dashboardPreview} alt="Dashboard Preview" />
      </div>
      </section>

      {/* clients badges */}
       <section>
        <ClientsSection/>
       </section>

    </>
  )
}

export default Home
