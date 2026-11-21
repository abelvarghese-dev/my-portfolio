
import "./Education.css";
import { FaGraduationCap, FaCode } from "react-icons/fa";

export default function Education() {

  const education = [
    {
      icon: <FaGraduationCap />,
      title: "Master of Computer Applications (MCA)",
      status: "Currently Pursuing",
      description: "Distance Education"
    },
    {
      icon: <FaGraduationCap />,
      title: "Bachelor of Computer Applications (BCA)",
      status: "Completed",
      description: "Computer Applications"
    },
    {
      icon: <FaCode />,
      title: "Python Full Stack Development",
      status: "Training with Internship",
      description: "Aitrich Academy"
    }
  ];

  return (
    <section className="education" id="education">

      <div className="education-heading">
        <p>MY JOURNEY</p>
        <h2>Education & Training</h2>
      </div>

      <div className="education-container">

        {education.map((item, index) => (

          <div className="education-item" key={index}>

            <div className="education-icon">
              {item.icon}
            </div>

            <div className="education-info">

              <h3>{item.title}</h3>

              <span>{item.status}</span>

              <p>{item.description}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}