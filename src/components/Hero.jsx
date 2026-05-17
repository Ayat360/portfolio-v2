import Reveal from "./Reveal";
import heroImage from "../assets/images/hero-character.png";

export default function Hero() {

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">

      <div className="hero-content">

        {/* LEFT */}
        <Reveal>
          <div className="hero-text">

            <span className="hero-badge">
              Frontend Developer
            </span>

            <h1>
              Building modern digital experiences with clean frontend development.
            </h1>

            <p>
              I create responsive, scalable, and user-focused web applications using React and modern frontend technologies.
            </p>

            <div className="hero-buttons">

              {/* VIEW PROJECTS */}
              <button
                className="primary-btn"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </button>

              {/* CONTACT */}
              <button
                className="secondary-btn"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </button>

            </div>

          </div>
        </Reveal>

        {/* RIGHT */}
        <Reveal>
          <div className="hero-image">
            <img src={heroImage} alt="Developer" />
          </div>
        </Reveal>

      </div>

    </section>
  );
}