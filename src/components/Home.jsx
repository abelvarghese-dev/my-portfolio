
import "./Home.css";

export default function Home() {
  return (
    <section className="home" id="home">

      <div className="home-content">

        <p className="intro">HELLO, I'M</p>

        <h1>Abel Varghese</h1>

        <h2>Python Full Stack Developer</h2>

        <p className="description">
          I build responsive websites and web applications
          using Python, React, MySQL and modern technologies.
          Passionate about creating real-world solutions.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/abelvarghese-dev"
             target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/abelll/"
             target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

      </div>

      <div className="home-image">
        <img
          src={`${import.meta.env.BASE_URL}photo.jpg`}
          alt="Abel Varghese"
        />
      </div>

    </section>
  );
}

