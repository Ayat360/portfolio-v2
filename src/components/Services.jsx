
import serviceImage from "../assets/images/service-character.png";
import Reveal from "./Reveal";
function Services() {
  return (
    <Reveal>
      <section className="services section-card" id="services">
        <div className="services-text">
          <h2>Let’s grow your brand together!</h2>
        <p>
          I help businesses build strong digital presence through clean design,
          smooth development, and smart solutions.
        </p>
        <button className="primary-btn">My Services →</button>
      </div>

      <div className="services-image">
        <img src={serviceImage} alt="Service Character" />
      </div>
    </section>
    </Reveal>
  );
}

export default Services;