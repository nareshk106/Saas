import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <section className="contact page-with-glow">
      <h1>
        Get In <span className="highlight">Touch</span>
      </h1>
      <p>
        Have questions, feedback, or ideas? We’d love to hear from you!
        Reach out using the form below.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <div>

        <textarea placeholder="Your Message" rows="5" required></textarea>
        </div>
        <div>
        <button type="submit" className="primary">Send Message</button>

        </div>
      </form>
    </section>
  );
};

export default Contact;
