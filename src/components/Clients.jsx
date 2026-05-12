import Reveal from "./Reveal";

import {
  FaStar,
} from "react-icons/fa";

import client1 from "../assets/images/client1.jpg";
import client2 from "../assets/images/client2.jpg";
import client3 from "../assets/images/client3.jpg";

const testimonials = [
  {
    image: client1,
    name: "Daniel Johnson",
    role: "Restaurant Owner",
    review:
      "An exceptional frontend developer. The final website exceeded expectations with premium animations and responsiveness.",
  },

  {
    image: client2,
    name: "Sophia Williams",
    role: "Creative Director",
    review:
      "The attention to detail and modern UI quality was absolutely impressive. Smooth workflow and excellent communication.",
  },

  {
    image: client3,
    name: "Michael Brown",
    role: "Startup Founder",
    review:
      "Professional, creative, and highly skilled. Delivered a modern digital experience that truly elevated our brand.",
  },
];

export default function Clients() {

  return (

    <Reveal>

      <section
        className="testimonials section-card"
        id="clients"
      >

        <div className="section-title">

          <h2>
            Client Testimonials
          </h2>

          <p>
            Trusted by clients to craft
            modern, immersive, and
            high-performance digital experiences.
          </p>

        </div>

        <div className="testimonials-grid">

          {testimonials.map((client, index) => (

            <div
              className="testimonial-card"
              key={index}
            >

              <div className="testimonial-top">

                <img
                  src={client.image}
                  alt={client.name}
                />

                <div>

                  <h3>
                    {client.name}
                  </h3>

                  <span>
                    {client.role}
                  </span>

                </div>

              </div>

              <div className="stars">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <p className="testimonial-text">
                "{client.review}"
              </p>

            </div>

          ))}

        </div>

      </section>

    </Reveal>

  );
}