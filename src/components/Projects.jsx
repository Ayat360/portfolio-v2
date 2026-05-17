import Reveal from "./Reveal";

import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";

/* ===== ICONS (NO DEPENDENCIES, ZERO ERRORS) ===== */

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M12 .5C5.7.5.7 5.7.7 12.3c0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 2 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.6-.3-5.3-1.4-5.3-6.1 0-1.4.5-2.5 1.3-3.4-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.4 1.3a11.2 11.2 0 0 1 6.2 0C17 5.8 18 6 18 6c.7 1.7.2 3 .1 3.3.8.9 1.3 2 1.3 3.4 0 4.7-2.7 5.8-5.3 6.1.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.7-1.6 8.1-6.1 8.1-11.4C23.3 5.7 18.3.5 12 .5z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 3h7v7"/>
    <path d="M21 3l-9 9"/>
    <path d="M10 7H7a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-3"/>
  </svg>
);

const projects = [
  {
    image: project1,
    title: "Business Company Website",
    description:
      "Modern responsive company website with professional UI and scalable frontend architecture.",
    tech: ["React", "CSS", "Responsive"],
    live: "https://more-grace-blessing-nig-ent.vercel.app/",
    github: "https://github.com/Ayat360/More-Grace-Blessing-Nig.-Ent",
  },
  {
    image: project2,
    title: "Restaurant Landing Page",
    description:
      "Clean restaurant website focused on customer experience and responsive design.",
    tech: ["React", "UI Design"],
    live: "https://slush-cafe.vercel.app/",
    github: "https://github.com/Ayat360/Slush-Cafe",
  },
  {
    image: project3,
    title: "Range Rover Specialist Portfolio",
    description:
      "Mechanic specialist portfolio with modern UI and clean interactions.",
    tech: ["React", "Frontend"],
    live: "https://ayat360.github.io/RangeRover_specialist/",
    github: "https://github.com/Ayat360/RangeRover_specialist",
  },
  {
    image: project4,
    title: "Dammy Confectionery Website",
    description:
      "Modern responsive confectionery website with professional UI and scalable frontend architecture.",
    tech: ["React", "Frontend"],
    live: "https://dammy-confectionery.vercel.app/",
    github: "https://github.com/Ayat360/Dammy-Confectionery",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-header section-width">
        <span className="section-tag">Projects</span>

        <h2>Selected work and recent projects.</h2>

        <p>
          A collection of responsive websites and frontend projects focused on clean UI, usability, and performance.
        </p>
      </div>

      <div className="projects-grid section-width">

        {projects.map((project, index) => (

          <Reveal key={index}>

            <div className="project-card">

              {/* IMAGE */}
              <div className="project-image-wrapper">

                <img src={project.image} alt={project.title} />

                {/* HOVER OVERLAY */}
                <div className="project-overlay">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-btn live"
                  >
                    <ExternalIcon />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-btn github"
                  >
                    <GithubIcon />
                  </a>

                </div>

              </div>

              {/* CONTENT */}
              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>

              </div>

            </div>

          </Reveal>

        ))}

      </div>
    </section>
  );
}