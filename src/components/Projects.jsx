import Reveal from "./Reveal";

import project1 from
"../assets/images/project1.jpg";

import project2 from
"../assets/images/project2.jpg";

import project3 from
"../assets/images/project3.jpg";

const projects = [

  {
    image: project1,

    title:
      "Business Company Website",

    description:
      "Modern responsive company website with professional UI and scalable frontend architecture.",

    tech:
      ["React", "CSS", "Responsive"],

    live:
      "#",

    github:
      "#",
  },

  {
    image: project2,

    title:
      "Restaurant Landing Page",

    description:
      "Clean restaurant website focused on customer experience and responsive design.",

    tech:
      ["React", "UI Design"],

    live:
      "#",

    github:
      "#",
  },

  {
    image: project3,

    title:
      "Portfolio Website",

    description:
      "Premium frontend developer portfolio with modern UI and clean interactions.",

    tech:
      ["React", "Frontend"],

    live:
      "#",

    github:
      "#",
  },

];

export default function Projects() {

  return (

    <section
      className="projects"
      id="projects"
    >

      <div className="projects-header section-width">

        <span className="section-tag">
          Projects
        </span>

        <h2>
          Selected work and recent
          projects.
        </h2>

        <p>
          A collection of responsive
          websites and frontend projects
          focused on clean UI,
          usability, and performance.
        </p>

      </div>

      <div className="projects-grid section-width">

        {
          projects.map(
            (project, index) => (

            <Reveal key={index}>

              <div className="project-card">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-content">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-tech">

                    {
                      project.tech.map(
                        (item, i) => (

                        <span key={i}>
                          {item}
                        </span>

                      ))
                    }

                  </div>

                  <div className="project-buttons">

                    <a href={project.live}>
                      Live Demo
                    </a>

                    <a href={project.github}>
                      Github
                    </a>

                  </div>

                </div>

              </div>

            </Reveal>

          ))
        }

      </div>

    </section>
  );
}