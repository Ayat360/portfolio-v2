import Reveal from "./Reveal";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {

  return (

    <section
      className="contact"
      id="contact"
    >

      <div className="contact-container">

        {/* LEFT */}

        <Reveal>

          <div className="contact-info">

            <span className="section-tag">
              Contact
            </span>

            <h2>
              Let’s build something
              great together.
            </h2>

            <p>
              Open to freelance projects,
              collaborations, and frontend
              development opportunities.
            </p>

            <div className="contact-details">

              <div className="contact-item">

                <FaEnvelope />

                <span>
                  aregbeadekunle@gmail.com
                </span>

              </div>

              <div className="contact-item">

                <FaMapMarkerAlt />

                <span>
                  Lagos, Nigeria
                </span>

              </div>

            </div>

            <div className="contact-socials">

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

            </div>

          </div>

        </Reveal>

        {/* RIGHT */}

        <Reveal>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <textarea
              placeholder="Your Message"
              rows="6"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </Reveal>

      </div>

    </section>
  );
}