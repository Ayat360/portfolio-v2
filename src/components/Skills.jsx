import Reveal from "./Reveal";

const skills = [
  {
    title: "Frontend Development",
    level: "95%",
  },

  {
    title: "React & Vite",
    level: "92%",
  },

  {
    title: "UI/UX Design",
    level: "90%",
  },

  {
    title: "Responsive Design",
    level: "96%",
  },

  {
    title: "JavaScript",
    level: "88%",
  },

  {
    title: "Animations & Interactions",
    level: "93%",
  },
];

export default function Skills() {

  return (

    <Reveal>

      <section
        className="skills section-card"
        id="skills"
      >

        <div className="section-title">

          <h2>
            Technical Expertise
          </h2>

          <p>
            Combining creativity and engineering
            to build immersive digital experiences.
          </p>

        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <div
              className="skill-item"
              key={index}
            >

              <div className="skill-header">

                <h3>{skill.title}</h3>

                <span>{skill.level}</span>

              </div>

              <div className="skill-bar">

                <div
                  className="skill-progress"
                  style={{
                    width: skill.level,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </section>

    </Reveal>

  );
}