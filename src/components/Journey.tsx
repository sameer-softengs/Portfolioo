import { journey } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Journey() {
  return (
    <section id="journey" className="section container">
      <Reveal>
        <div className="section-head">
          <div>
            <span className="section-number">04 / JOURNEY</span>
            <h2>Development timeline.</h2>
          </div>
        </div>
      </Reveal>

      <div className="timeline">
        {journey.map((item, i) => (
          <Reveal key={item.year} delay={i * 0.08}>
            <article className="timeline-row">
              <span className="timeline-year">{item.year}</span>
              <div className="timeline-node"><span /></div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
