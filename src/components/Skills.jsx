import Reveal from "./Reveal";

const skills = [
  "React",
  "JavaScript",
  "Bootstrap",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "GitHub",
  "Responsive UI",
];

export default function Skills() {
  return (
    <Reveal>
      <section className="skills section-card" id="skills">
        <div className="section-title">
          <h2>Tech Stack</h2>
          <p>Modern technologies I use to craft digital experiences.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}