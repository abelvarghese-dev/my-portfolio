
import "./Skills.css";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaPython, FaBootstrap, FaGitAlt, FaGithub
} from "react-icons/fa";

import {
  SiDjango, SiFlask, SiMysql, SiPostman,
  SiVite
} from "react-icons/si";

export default function Skills() {

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Bootstrap", icon: <FaBootstrap /> }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Flask", icon: <SiFlask /> }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql /> }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Vite", icon: <SiVite /> }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">

      <div className="skills-heading">
        <p>MY EXPERTISE</p>
        <h2>Technical Skills</h2>
      </div>

      <div className="skills-container">

        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>

            <h3>{category.title}</h3>

            <div className="skill-list">

              {category.skills.map((skill, i) => (
                <div className="skill-item" key={i}>

                  <span className="skill-icon">
                    {skill.icon}
                  </span>

                  <span>{skill.name}</span>

                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}