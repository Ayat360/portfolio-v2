import Reveal from "./Reveal";

import heroImage from
"../assets/images/hero-character.png";

export default function Hero() {

  return (

    <section
      className="hero"
      id="home"
    >

      <div className="hero-content">

        {/* LEFT */}

        <Reveal>

          <div className="hero-text">

            <span className="hero-badge">
              Frontend Developer
            </span>

            <h1>
              Building modern digital
              experiences with clean
              frontend development.
            </h1>

            <p>
              I create responsive,
              scalable, and user-focused
              web applications using
              React and modern frontend
              technologies.
            </p>

            <div className="hero-buttons">

              <button className="primary-btn">
                View Projects
              </button>

              <button className="secondary-btn">
                Contact Me
              </button>

            </div>

          </div>

        </Reveal>

        {/* RIGHT */}

        <Reveal>

          <div className="hero-image">

            <img
              src={heroImage}
              alt="Developer"
            />

          </div>

        </Reveal>

      </div>

    </section>
  );
}