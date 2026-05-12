import Reveal from "./Reveal";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {

  return (

    <Reveal>

      <section
        className="contact section-card"
        id="contact"
      >

        <div className="section-title">

          <h2>
            Let’s Build Something Amazing
          </h2>

          <p>
            Ready to bring your vision to life?
            Let’s create modern digital experiences
            together.
          </p>

        </div>

        <div className="contact-container">

          <div className="contact-info">

            <div className="contact-card">

              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>

                <h3>Email</h3>

                <p>
                  aregbeadekunle@gmail.com
                </p>

              </div>

            </div>

            <div className="contact-card">

              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div>

                <h3>Phone</h3>

                <p>
                  07082798562
                </p>

              </div>

            </div>

            <div className="contact-card">

              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>

                <h3>Location</h3>

                <p>
                  Lagos, Nigeria
                </p>

              </div>

            </div>

          </div>

          <form className="contact-form">

            <div className="input-group">

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Tell me about your project..."
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

    </Reveal>

  );
}