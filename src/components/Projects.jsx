import Reveal from "./Reveal";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";

const projects = [
  {
    title: "Portfolio V2",
    image: project1,
    description:
      "An advanced developer portfolio showcasing modern UI engineering, smooth animations, and performance-focused architecture. Built to highlight projects, skills, and professional identity through a clean, interactive, and conversion-driven experience.",
    tech: ["React", "Vite", "Framer Motion"],
    github:
      "https://github.com/Ayat360/portfolio-v2",
    live:
      "https://portfolio-v2-beryl-eight-50.vercel.app/",
  },

  {
    title: "Slush Café Website",
    image: project2,
    description:
      "A modern café experience platform designed to showcase a vibrant food and drinks brand with menu highlights, smooth navigation, and a visually rich interface that reflects a cozy, aesthetic dining atmosphere.",
    tech: ["React", "CSS", "Framer Motion"],
    github:
      "https://github.com/Ayat360/Slush-cafe",
    live:
      "https://slush-cafe.vercel.app/",
  },

  {
    title: "More Grace & Blessing Enterprise",
    image: project3,
    description:
      "A structured business platform built to showcase household plastic products, enabling customers to browse and engage with a reliable supply brand focused on affordability, quality, and everyday utility.",
    tech: ["React", "Bootstrap", "API"],
    github:
      "https://github.com/Ayat360/More-Grace-Blessing-Nig.-Ent",
    live:
      "https://more-grace-blessing-nig-ent.vercel.app/",
  },

  {
    title: "dammy-confectionery",
    image: project4,
    description:
      "A modern café experience platform designed to showcase a vibrant food and drinks brand with menu highlights, smooth navigation, and a visually rich interface that reflects a cozy, aesthetic dining atmosphere.",
    tech: ["React", "CSS", "Framer Motion"],
    github:
      "https://github.com/Ayat360/dammy-confectionery",
    live:
      "https://dammy-confectionery.vercel.app/",
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