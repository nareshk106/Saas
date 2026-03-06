import React from "react";
import "../App.css";

const About = () => {
  return (
    <section className="about page-with-glow">
      <h1>
        About <span className="highlight">Us</span>
      </h1>
      <p>
        We’re passionate about building digital tools that make life simpler.
        Our platform empowers individuals and teams to organize, collaborate,
        and achieve their goals effortlessly.
      </p>

      <div className="about-cards">
        <div className="card">
          <h3>🌟 Our Mission</h3>
          <p>
            To simplify productivity and help people focus on what truly matters.
          </p>
        </div>
        <div className="card">
          <h3>🚀 Our Vision</h3>
          <p>
            A world where managing work, goals, and life feels intuitive and empowering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
