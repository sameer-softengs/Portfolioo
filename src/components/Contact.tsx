"use client";

import type { FormEvent } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "./Reveal";

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:muhammadsameer4536@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section container contact-section">
      <Reveal>
        <motion.div
          className="contact-card contact-layout"
          whileHover={{ scale: 1.002 }}
          transition={{ type: "spring", stiffness: 220, damping: 25 }}
        >
          <div className="contact-intro">
            <span className="section-number">05 / CONTACT</span>
            <h2>Let&apos;s connect.</h2>
            <p>
              Have a project, internship or collaboration in mind? Send a message and
              I&apos;ll get back to you.
            </p>

            <a className="contact-email" href="mailto:muhammadsameer4536@gmail.com">
              <span><Mail size={18} /></span>
              muhammadsameer4536@gmail.com
            </a>

            <div className="contact-actions">
              <a href="https://linkedin.com/in/sameer-softengs/" target="_blank" rel="noreferrer" className="icon-link" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/sameer-softengs" target="_blank" rel="noreferrer" className="icon-link" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          <div className="contact-form-panel">
            <div className="contact-form-heading">
              <div>
                <span className="contact-form-kicker">Send a message</span>
                <h3>Tell me what you&apos;re building.</h3>
              </div>
              <ArrowUpRight className="contact-form-arrow" size={22} aria-hidden="true" />
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Name</span>
                <input name="name" type="text" placeholder="Your name" autoComplete="name" required />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows={4} placeholder="A short message about your project" required />
              </label>
              <button type="submit" className="btn btn-primary contact-submit">
                Open email <Send size={16} />
              </button>
            </form>

            <div className="contact-type-effect" aria-hidden="true">
              <span>BUILD</span>
              <span>SHIP</span>
              <span>ITERATE</span>
            </div>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}
