import ThemeToggle from "./ThemeToggle";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {

  return (

    <header className="navbar">

      <div className="nav-container">

        {/* TOP ROW */}

        <div className="nav-top">

          <div className="logo">
            &lt;/&gt; PROXIMA A3
          </div>

          <div className="nav-actions">

            <ThemeToggle />

            <div className="nav-icons">

              <a
                href="https://github.com/Ayat360"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/aregbe-adekunle-7265b3361"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:aregbeadekunle@gmail.com"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM ROW */}

        <nav className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#clients">
            Clients
          </a>

          <a href="#contact">
            Contact
          </a>

        </nav>

      </div>

    </header>
  );
}