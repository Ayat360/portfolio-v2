import Reveal from "./Reveal";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
} from "react-icons/fa";

const services = [

  {
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    description:
      "Building scalable and responsive web applications using modern React architecture and clean code practices.",
  },

  {
    icon: <FaPaintBrush />,
    title: "UI Design Implementation",
    description:
      "Translating UI designs into pixel-perfect interfaces with strong attention to detail and usability.",
  },

  {
    icon: <FaMobileAlt />,
    title: "Responsive Web Design",
    description:
      "Ensuring seamless user experience across all devices with fully responsive and adaptive layouts.",
  },

];

export default function Services() {

  return (

    <section className="services" id="services">

      <div className="services-container">

        <Reveal>

          <div className="services-header">

            <span className="section-tag">
              Services
            </span>

            <h2>
              What I do to help
              businesses grow online
            </h2>

            <p>
              Focused on building clean,
              functional and scalable
              frontend experiences that
              deliver real value.
            </p>

          </div>

        </Reveal>

        <div className="services-grid">

          {services.map((item, index) => (

            <Reveal key={index}>

              <div className="service-card">

                <div className="service-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>

  );

}