import React from "react";
import "../App.css";

const Publishes = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Stay Productive in a Remote World",
      excerpt:
        "Working from home can be both a blessing and a challenge. Here’s how to keep your focus and energy high...",
      date: "Oct 20, 2025",
    },
    {
      id: 2,
      title: "The Power of Simplicity in Design",
      excerpt:
        "Great design isn’t about adding more — it’s about removing what doesn’t serve the user...",
      date: "Oct 15, 2025",
    },
    {
      id: 3,
      title: "Balancing Work and Life with Better Tools",
      excerpt:
        "In today’s fast-paced digital era, the key to balance lies in the tools you use daily...",
      date: "Oct 10, 2025",
    },
  ];

  return (
    <section className="publishes page-with-glow">
      <h1>
        Latest <span className="highlight">Publishes</span>
      </h1>
      <p className="subtitle">
        Explore our latest thoughts, insights, and updates on productivity,
        design, and simplicity.
      </p>

      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.excerpt}</p>
            <div className="blog-meta">
              <span>{blog.date}</span>
              <button className="read-more">Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publishes;
