
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {

  const projects = [
    {
      title: "Smart Library Management System",
      description:
        "A web-based library management application designed to manage books and simplify library operations.",
      technologies: ["Python", "Flask", "MySQL", "HTML", "CSS"],
      github:
        "https://github.com/abelvarghese-dev/Smart-Library-Management-System"
    },

    {
      title: "Exam Seat and Class Scheduler",
      description:
        "A web application designed to organize examination seating arrangements and classroom scheduling.",
      technologies: ["Python", "Flask", "MySQL", "HTML", "CSS"],
      github:
        "https://github.com/abelvarghese-dev/Exam-Seat-and-Class-Scheduler"
    }
  ];

  return (
    <section className="projects" id="projects">

      <div className="projects-heading">
        <p>MY RECENT WORK</p>
        <h2>Featured Projects</h2>
        <span>
          Some of the projects I have worked on.
        </span>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-number">
              0{index + 1}
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-technologies">

              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}

            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <FaGithub />
              View Source Code
              <FaExternalLinkAlt />
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}