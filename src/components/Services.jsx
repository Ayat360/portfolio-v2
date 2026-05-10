import Reveal from "./Reveal";

import {
  FaCode,
  FaPalette,
  FaRocket,
  FaMobileAlt,
  FaShoppingCart,
  FaLaptopCode,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description:
      "Building fast, scalable, and modern React applications with clean architecture.",
  },

  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    description:
      "Designing immersive interfaces focused on usability and premium visual experiences.",
  },

  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    description:
      "Optimizing websites for speed, SEO, responsiveness, and smooth interactions.",
  },

  {
    icon: <FaMobileAlt />,
    title: "Responsive Websites",
    description:
      "Creating pixel-perfect experiences across desktop, tablet, and mobile devices.",
  },

  {
    icon: <FaShoppingCart />,
    title: "E-Commerce Solutions",
    description:
      "Developing conversion-focused online stores with premium user experience.",
  },

  {
    icon: <FaLaptopCode />,
    title: "Portfolio & Business Sites",
    description:
      "Building premium digital identities for brands, startups, and creatives.",
  },
];

export default function Services() {

  return (

    <Reveal>

      <section
        className="services section-card"
        id="services"
      >

        <div className="section-title">

          <h2>
            Services I Provide
          </h2>

          <p>
            Premium digital solutions crafted
            with modern technologies and
            creative frontend engineering.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service, index) => (

            <div
              className="service-card"
              key={index}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

              <button className="service-btn">
                Learn More
              </button>

            </div>

          ))}

        </div>

      </section>

    </Reveal>

  );
}