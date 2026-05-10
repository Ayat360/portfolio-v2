import Reveal from "./Reveal";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";

const projects = [
  {
    title: "Luxury Restaurant Website",
    image: project1,
    description:
      "Premium restaurant experience with modern UI animations and responsive architecture.",
    tech: ["React", "CSS", "Framer Motion"],
    github: "#",
    live: "#",
  },

  {
    title: "Modern Portfolio Experience",
    image: project2,
    description:
      "Interactive frontend portfolio with glassmorphism and smooth transitions.",
    tech: ["React", "Vite", "JavaScript"],
    github: "#",
    live: "#",
  },

  {
    title: "E-Commerce Platform",
    image: project3,
    description:
      "Clean scalable online store experience with conversion-focused UI design.",
    tech: ["React", "Bootstrap", "API"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <Reveal>
      <section
        className="projects section-card"
        id="projects"
      >
        <div className="section-title">
          <h2>Featured Projects</h2>

          <p>
            A collection of premium digital experiences
            crafted with modern frontend technologies.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <div
              className="project-card"
              key={index}
            >

              <div className="project-image-wrapper">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-overlay">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-icon"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-icon"
                  >
                    <FaExternalLinkAlt />
                  </a>

                </div>

              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">

                  {project.tech.map((tech, i) => (
                    <span key={i}>
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>
      </section>
    </Reveal>
  );
}