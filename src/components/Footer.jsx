
import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>Abel Varghese<span>.</span></h2>
          <p>Python Full Stack Developer</p>

          <p className="footer-description">
            Building modern and responsive web applications
            using Python and React.
          </p>
        </div>

        
        <div className="footer-links">
        <h3>Quick Links</h3>

        <div className="footer-link-list">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
        </div>
        </div>


        <div className="footer-social">
          <h3>Connect With Me</h3>

          <div className="footer-icons">
            <a href="https://github.com/abelvarghese-dev"
               target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/abelll/"
               target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=abelvarghese2005@gmail.com"
                target="_blank"
                rel="noreferrer"
                >
               <FaEnvelope />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Abel Varghese.
          All Rights Reserved.
        </p>

        <p>Designed & Developed by Abel Varghese</p>

      </div>

    </footer>
  );
}