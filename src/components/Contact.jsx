
import contactImage from "../assets/images/contact-character.png";
import Reveal from "./Reveal";
function Contact() {
  return (
    <Reveal>
      <section className="contact section-card" id="contact">
        <div className="contact-form">
          <h2>Send Message</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="primary-btn">
            Send Message
          </button>
        </form>
      </div>

      <div className="contact-image">
        <img src={contactImage} alt="Contact Character" />
      </div>
    </section>
    </Reveal>
  );
}

export default Contact;