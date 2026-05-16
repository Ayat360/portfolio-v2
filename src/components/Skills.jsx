import Reveal from "./Reveal";

const skills = [

  {
    title: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind"]
  },

  {
    title: "UI/UX",
    items: ["Figma", "Design Systems", "Responsive Design"]
  },

  {
    title: "Tools",
    items: ["Git", "Vite", "VS Code", "API Integration"]
  }

];

export default function Skills() {

  return (

    <section className="skills" id="skills">

      <div className="skills-container">

        <div className="skills-header">

          <span className="section-tag">
            Skills
          </span>

          <h2>
            Technologies and tools I use
            to build modern products.
          </h2>

        </div>

        <div className="skills-grid">

          {skills.map((group, index) => (

            <Reveal key={index}>

              <div className="skill-card">

                <h3>{group.title}</h3>

                <div className="skill-tags">

                  {group.items.map((item, i) => (

                    <span key={i}>
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>

  );

}