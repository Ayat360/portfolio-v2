import Reveal from "./Reveal";

function Clients() {
  const clients = [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      review: "Outstanding work quality and communication throughout the project.",
    },
    {
      name: "Sarah Johnson",
      role: "Startup Founder",
      review: "Highly skilled and reliable. Delivered on time and beyond expectation.",
    },
    {
      name: "Michael Chen",
      role: "UI Specialist",
      review: "Excellent expertise in responsive and modern interface design.",
    },
  ];

  return (
    <Reveal>
    <section className="clients section-card" id="clients">
      <div className="section-header">
        <h2>My Clients</h2>
        <span>See all reviews →</span>
      </div>

      <div className="clients-grid">
        {clients.map((client, index) => (
          <div className="client-card" key={index}>
            <div className="stars">★★★★★</div>
            <p>{client.review}</p>
            <h4>{client.name}</h4>
            <span>{client.role}</span>
          </div>
        ))}
      </div>
    </section>
    </Reveal>
  );
}

export default Clients;