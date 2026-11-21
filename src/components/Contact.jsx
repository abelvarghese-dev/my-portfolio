
import "./Contact.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane
} from "react-icons/fa";

export default function Contact() {

  function handleSubmit(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const subject = encodeURIComponent(
        "Portfolio Contact - " + name
    );

    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=abelvarghese2005@gmail.com&su=${subject}&body=${body}`,
        "_blank"
    );
    }

  return (
    <section className="contact" id="contact">

      <div className="contact-heading">
        <p>GET IN TOUCH</p>
        <h2>Contact Me</h2>
        <span>
          Feel free to contact me for opportunities or collaborations.
        </span>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            I'm interested in Python Full Stack Developer
            opportunities and exciting projects.
          </p>

          <div className="contact-item">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <a    href="https://mail.google.com/mail/?view=cm&fs=1&to=abelvarghese2005@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    abelvarghese2005@gmail.com
                </a>
            </div>
          </div>

          <div className="contact-item">
            <FaGithub />
            <div>
              <h4>GitHub</h4>
              <a href="https://github.com/abelvarghese-dev"
                 target="_blank" rel="noreferrer">
                View GitHub Profile
              </a>
            </div>
          </div>

          <div className="contact-item">
            <FaLinkedin />
            <div>
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/abelll/"
                 target="_blank" rel="noreferrer">
                View LinkedIn Profile
              </a>
            </div>
          </div>

        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message <FaPaperPlane />
          </button>

        </form>

      </div>

    </section>
  );
}