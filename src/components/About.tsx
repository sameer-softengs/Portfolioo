import Reveal from "./Reveal";
import { CalendarDays, GraduationCap, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section container">
      <Reveal>
        <div className="section-head">
          <div>
            <span className="section-number">01 / ABOUT</span>
            <h2>About me.</h2>
          </div>
        </div>
      </Reveal>

      <div className="about-grid">
        <Reveal className="about-big">
          <p>
            I’m a Software Engineering undergraduate at Bahria University Karachi Campus
            and a <strong>full stack developer focused on web applications and software systems.</strong>
          </p>
          <p>
            My work covers frontend development, backend services, APIs, databases,
            authentication, business tools and AI integrations.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="about-panel about-education">
          <div className="education-icon" aria-hidden="true">
            <GraduationCap size={22} />
          </div>
          <span>Current education</span>
          <h3>Bachelor of Software Engineering (BSE)</h3>
          <p className="education-university">Bahria University</p>
          <div className="education-details">
            <p>
              <MapPin size={15} />
              Karachi Campus
            </p>
            <p>
              <CalendarDays size={15} />
              Expected graduation: 2028
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
