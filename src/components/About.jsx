import Reveal from "./Reveal";

import {
  FaCode,
  FaPalette,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

import aboutImage from "../assets/images/about-character.png";

export default function About() {

  const achievements = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      text: "Building scalable modern React interfaces.",
    },

    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      text: "Crafting clean and immersive user experiences.",
    },

    {
      icon: <FaLaptopCode />,
      title: "Responsive Design",
      text: "Pixel-perfect experiences across all devices.",
    },

    {
      icon: <FaRocket />,
      title: "Performance Focused",
      text: "Fast optimized websites with smooth interactions.",
    },
  ];

  return (
    <Reveal>

      <section
        className="about section-card"
        id="about"
      >

        <div className="about-left">

          <div className="about-image-wrapper">

            <img
              src={aboutImage}
              alt="About"
              className="about-image"
            />

            <div className="experience-badge">
              <h2>2+</h2>
              <p>Years Experience</p>
            </div>

          </div>

        </div>

        <div className="about-right">

          <span className="section-subtitle">
            ABOUT ME
          </span>

          <h2>
            Creating Premium Digital
            Experiences With Modern
            Frontend Technologies.
          </h2>

          <p>
            I’m Aregbe Ayatulah Adekunle,
            a frontend developer and designer focused
            on building visually stunning, responsive,
            and high-performance web experiences.

            My passion is turning ideas into
            elegant digital products that combine
            creativity with modern engineering.
          </p>

          <div className="about-stats">

            <div className="about-stat-card">
              <h3>50+</h3>
              <span>Projects</span>
            </div>

            <div className="about-stat-card">
              <h3>20+</h3>
              <span>Clients</span>
            </div>

            <div className="about-stat-card">
              <h3>99%</h3>
              <span>Satisfaction</span>
            </div>

          </div>

          <div className="achievements-grid">

            {achievements.map((item, index) => (

              <div
                className="achievement-card"
                key={index}
              >

                <div className="achievement-icon">
                  {item.icon}
                </div>

                <div>

                  <h4>{item.title}</h4>

                  <p>{item.text}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </Reveal>
  );
}