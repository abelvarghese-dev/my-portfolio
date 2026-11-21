
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">

      <div className="about-heading">
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">

        <div className="about-text">
          <h3>I'm Abel Varghese</h3>

          <p>
            I am a Computer Applications graduate
            passionate about Python Full Stack Development
            and building web applications.
          </p>

          <p>
            I have knowledge of frontend and backend
            technologies, including HTML, CSS, JavaScript,
            React, Python, Flask, Django and MySQL.
          </p>

          <p>
            Currently, I am pursuing MCA through distance
            education and undergoing Python Full Stack
            Development training with internship.
          </p>

          <p>
            My goal is to become a skilled Full Stack
            Developer and contribute to real-world
            software development projects.
          </p>
        </div>

        <div className="about-details">

          <div className="detail-card">
            <h4>Education</h4>
            <p>BCA - Completed</p>
            <p>MCA - Pursuing</p>
          </div>

          <div className="detail-card">
            <h4>Training</h4>
            <p>Python Full Stack Development</p>
            <p>Aitrich Academy</p>
          </div>

          <div className="detail-card">
            <h4>Career Interest</h4>
            <p>Python Full Stack Developer</p>
            <p>Web Application Development</p>
          </div>

        </div>

      </div>

    </section>
  );
}