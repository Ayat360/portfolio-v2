import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {

  return (

    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>
            PROXIMA A3
          </h2>

          <p>
            Crafting immersive digital experiences
            with modern frontend engineering,
            premium UI/UX, and creative development.
          </p>

          <div className="footer-socials">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

          </div>

        </div>

        <div className="footer-links">

          <div>

            <h3>
              Navigation
            </h3>

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

          <div>

            <h3>
              Services
            </h3>

            <a href="#">
              Web Development
            </a>

            <a href="#">
              UI/UX Design
            </a>

            <a href="#">
              Branding
            </a>

            <a href="#">
              Consulting
            </a>

          </div>

          <div>

            <h3>
              Contact
            </h3>

            <p>
              Lagos, Nigeria
            </p>

            <p>
              aregbeadekunle@gmail.com
            </p>

            <p>
              07082798562
            </p>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 PROXIMA A3.
          All Rights Reserved.
        </p>

      </div>

    </footer>

  );
}