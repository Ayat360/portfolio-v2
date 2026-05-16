import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import footerBg from
"../assets/images/footer-bg.jpg";

export default function Footer() {

  return (

    <footer className="footer">

      {/* BACKGROUND */}

      <img
        src={footerBg}
        alt="Footer Background"

        className="footer-bg"
      />

      {/* OVERLAY */}

      <div className="footer-overlay"></div>

      {/* CONTENT */}

      <div className="footer-content">

        <div className="footer-top">

          {/* LEFT */}

          <div className="footer-brand">

            <h2>
              PROXIMA A3
            </h2>

            <p>
              Frontend developer focused
              on building clean,
              responsive, and modern
              digital experiences.
            </p>

          </div>

          {/* CENTER */}

          <div className="footer-links">

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#services">
              Services
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

          {/* RIGHT */}

          <div className="footer-socials">

            <a
              href="https://github.com/Ayat360"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
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

        {/* BOTTOM */}

        <div className="footer-bottom">

          <p>
            © 2026 PROXIMA A3.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}