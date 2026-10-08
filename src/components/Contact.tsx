import { ArrowUpRight, CalendarDays, Clock3, Mail, Video } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "./Reveal";

const bookingUrl = "https://cal.com/muhammad-sameer-ccsqru/project-discussion";

export default function Contact() {
  return (
    <section id="contact" className="section container contact-section">
      <Reveal>
        <div className="contact-card contact-compact-layout">
          <div className="contact-compact-intro">
            <span className="section-number">05 / CONTACT</span>
            <h2>Let&apos;s connect.</h2>
            <p>Have a project or collaboration in mind? Let&apos;s talk about what we can build together.</p>
            <a className="contact-email" href="mailto:muhammadsameer4536@gmail.com">
              <span><Mail size={17} aria-hidden="true" /></span>
              muhammadsameer4536@gmail.com
            </a>
            <div className="contact-social-links">
              <a href="https://github.com/sameer-softengs" target="_blank" rel="noreferrer"><FaGithub size={17} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a href="https://linkedin.com/in/sameer-softengs/" target="_blank" rel="noreferrer"><FaLinkedin size={17} aria-hidden="true" /> LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="contact-call-card">
            <span className="contact-call-icon"><CalendarDays size={23} aria-hidden="true" /></span>
            <span className="contact-form-kicker">PROJECT DISCUSSION</span>
            <h3>A quick call. A clear next step.</h3>
            <p>Tell me about your idea, ask questions, and explore how we could work together.</p>
            <div className="contact-call-details">
              <span><Clock3 size={15} aria-hidden="true" /> 15 minutes</span>
              <span><Video size={15} aria-hidden="true" /> Google Meet</span>
            </div>
            <a className="btn btn-primary contact-call-button" href={bookingUrl} target="_blank" rel="noreferrer">
              Book a project call <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <span className="contact-call-note">Choose a time on Cal.com · Opens in a new tab</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
