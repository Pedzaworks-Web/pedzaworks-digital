// src/pages/Contact.tsx
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  CalendarClock,
  ClipboardList,
  ChevronDown,
} from "lucide-react";

export default function Contact() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(
              "pw-contact__is-visible",
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const reveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const faqItems = [
    {
      q: "What types of projects do you work on?",
      a: "Pedzaworks focuses on operational software systems, workflow platforms, connected infrastructure, and digital experiences designed to improve how organisations run day to day.",
    },
    {
      q: "Do you only build websites?",
      a: "No. We build internal systems, operational platforms, automation workflows, dashboards, and infrastructure-aware software in addition to business websites and digital portals.",
    },
    {
      q: "Can you build custom solutions for our organization?",
      a: "Yes. Every engagement is custom. We begin with your operational context, then design software systems and platforms around how your organisation actually works.",
    },
    {
      q: "Do you provide ongoing support?",
      a: "We provide ongoing support and improvement engagements, including monitoring, refinements, and additional capabilities as your operations evolve over time.",
    },
    {
      q: "Can Pedzaworks integrate software with hardware or IoT systems?",
      a: "Yes. We can integrate software with devices, sensors, monitoring systems, and other infrastructure to create connected, telemetry-driven solutions.",
    },
    {
      q: "Do you work with clients outside Zimbabwe?",
      a: "Yes. Pedzaworks works with organisations in and beyond Zimbabwe using remote-first collaboration, digital communication, and structured project delivery.",
    },
    {
      q: "How much does a project cost?",
      a: "Project investment depends on scope, complexity, and timelines. After understanding your operations and requirements, we provide a clear proposal and phased options.",
    },
    {
      q: "How long does a project take?",
      a: "Smaller focused projects may take a few weeks, while larger operational platforms and infrastructure projects can span several months with phased delivery.",
    },
  ];

  return (
    <main className="pw-contact">
      <div className="pw-contact__bg-grid" />
      <div className="pw-contact__bg-glow" />
      <div className="pw-contact__top-rule" />

      {/* CONTACT FORM */}
      <section id="contact-form" className="pw-contact__section">
        <div className="pw-contact__container">
          <header
            ref={reveal}
            data-reveal
            className="pw-contact__section-header"
          >
            <div className="pw-contact__eyebrow">
              <span className="pw-contact__eyebrow-dot" />
              Project Inquiry
            </div>

            <h1 className="pw-contact__heading">
              Share How Your <mark>Operations Work.</mark>
            </h1>

            <p className="pw-contact__lead">
              The more we understand about your workflows, teams, and current
              systems, the better we can design software that supports real
              operational outcomes.
            </p>
          </header>

          <div className="pw-contact__form-grid">
            <form
              ref={reveal as any}
              data-reveal
              className="pw-contact__form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="pw-contact__form-shell">
                <div className="pw-contact__form-topline">
                  <span className="pw-contact__topline-dot" />
                  <span>Operational Contact Brief</span>
                </div>

                <div className="pw-contact__field-row">
                  <div className="pw-contact__field">
                    <label className="pw-contact__label" htmlFor="full-name">
                      Full Name
                      <span>*</span>
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      name="name"
                      required
                      className="pw-contact__input"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="pw-contact__field">
                    <label className="pw-contact__label" htmlFor="organization">
                      Organization
                    </label>
                    <input
                      id="organization"
                      type="text"
                      name="organization"
                      className="pw-contact__input"
                      placeholder="Company or institution"
                    />
                  </div>
                </div>

                <div className="pw-contact__field-row">
                  <div className="pw-contact__field">
                    <label className="pw-contact__label" htmlFor="email">
                      Email
                      <span>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="pw-contact__input"
                      placeholder="name@organisation.com"
                    />
                  </div>

                  <div className="pw-contact__field">
                    <label className="pw-contact__label" htmlFor="project-type">
                      Project Type
                    </label>
                    <select
                      id="project-type"
                      name="projectType"
                      className="pw-contact__select"
                      defaultValue=""
                    >
                      <option value="">Select a project type</option>
                      <option>Custom Software System</option>
                      <option>Operational Platform</option>
                      <option>Workflow Automation</option>
                      <option>Systems Integration</option>
                      <option>Connected Infrastructure</option>
                      <option>Business Website</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="pw-contact__field">
                  <label className="pw-contact__label" htmlFor="message">
                    Message
                    <span>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="pw-contact__textarea"
                    placeholder="Describe your current operations, the constraints you are facing, and what you want to improve."
                  />
                </div>

                <footer className="pw-contact__form-footer">
                  <button type="submit" className="pw-contact__cta-primary">
                    <span className="pw-contact__cta-shimmer" />
                    <span className="pw-contact__cta-content">
                      Send Project Inquiry
                      <ArrowRight size={15} strokeWidth={2.2} />
                    </span>
                  </button>

                  <div className="pw-contact__form-note">
                    <CalendarClock size={16} strokeWidth={1.7} />
                    <p>
                      We typically respond to new inquiries within 1–2 business
                      days with next steps and a suggested conversation time.
                    </p>
                  </div>
                </footer>
              </div>
            </form>

            <aside ref={reveal} data-reveal className="pw-contact__side-panel">
              <div className="pw-contact__side-panel-inner">
                <header className="pw-contact__side-header">
                  <div className="pw-contact__side-icon-wrap">
                    <ClipboardList size={18} strokeWidth={1.8} />
                  </div>

                  <div>
                    <p className="pw-contact__side-kicker">
                      What happens after you reach out
                    </p>
                    <p className="pw-contact__side-title">
                      {" "}
                      Here's Step by Step
                    </p>
                  </div>
                </header>

                <ol className="pw-contact__steps">
                  <li>
                    <span className="pw-contact__step-index">01</span>
                    <div>
                      <h3>Operational context</h3>
                      <p>
                        We review your message, current systems, and operational
                        challenges to understand where software can help.
                      </p>
                    </div>
                  </li>

                  <li>
                    <span className="pw-contact__step-index">02</span>
                    <div>
                      <h3>Initial conversation</h3>
                      <p>
                        We schedule a call to walk through your workflows,
                        decision points, and constraints in more detail.
                      </p>
                    </div>
                  </li>

                  <li>
                    <span className="pw-contact__step-index">03</span>
                    <div>
                      <h3>Proposed approach</h3>
                      <p>
                        You receive a clear outline of potential solutions,
                        scope, and how we can help improve operations over time.
                      </p>
                    </div>
                  </li>
                </ol>

                <button
                  type="button"
                  className="pw-contact__btn-ghost"
                  onClick={() => {
                    const el = document.getElementById("contact-final-cta");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore Next Steps
                  <ArrowRight size={14} strokeWidth={2.1} />
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="contact-faq"
        className="pw-contact__section pw-contact__section--soft"
      >
        <div className="pw-contact__container">
          <header
            ref={reveal}
            data-reveal
            className="pw-contact__section-header"
          >
            <div className="pw-contact__eyebrow">
              <span className="pw-contact__eyebrow-dot" />
              FAQ
            </div>

            <h2 className="pw-contact__heading">
              Questions About <mark>Working With Pedzaworks.</mark>
            </h2>

            <p className="pw-contact__lead">
              These questions cover how we approach projects, what we build, and
              how we support organisations before, during, and after delivery.
            </p>
          </header>

          <div ref={reveal} data-reveal className="pw-contact__faq-grid">
            <div className="pw-contact__faq-list">
              {faqItems.map((item, idx) => (
                <details
                  key={item.q}
                  className="pw-contact__faq-item"
                  open={idx === 0}
                >
                  <summary className="pw-contact__faq-summary">
                    <span className="pw-contact__faq-q">{item.q}</span>
                    <span className="pw-contact__faq-icon">
                      <ChevronDown size={16} strokeWidth={1.8} />
                    </span>
                  </summary>

                  <div className="pw-contact__faq-body">
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>

            <aside className="pw-contact__faq-panel">
              <div className="pw-contact__faq-panel-grid" />
              <p className="pw-contact__faq-panel-kicker">
                Built around operations, not guesswork.
              </p>
              <p className="pw-contact__faq-panel-body">
                We treat every project as part of your operational
                infrastructure. That means understanding constraints, designing
                for long-term maintainability, and ensuring the systems we
                deliver can evolve with your organisation.
              </p>
              <p className="pw-contact__faq-panel-body">
                If you don&apos;t see your question here, share it in your
                inquiry and we&apos;ll address it directly during our first
                conversation.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <style>{`
        .pw-contact {
          --pw-red: #c81e1e;
          --pw-red-strong: #b91c1c;
          --pw-red-soft: rgba(200, 30, 30, 0.08);
          --pw-red-border: rgba(200, 30, 30, 0.18);

          --pw-bg: #edf1f7;
          --pw-surface: rgba(255, 255, 255, 0.9);
          --pw-surface-strong: rgba(255, 255, 255, 0.97);
          --pw-surface-soft: rgba(247, 249, 252, 0.88);

          --pw-text-1: #0c1220;
          --pw-text-2: #415168;
          --pw-text-3: #8191a8;

          --pw-border: rgba(15, 23, 42, 0.08);
          --pw-border-strong: rgba(15, 23, 42, 0.12);

          --pw-shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.04);
          --pw-shadow-md: 0 18px 40px rgba(15, 23, 42, 0.08);
          --pw-shadow-lg: 0 26px 68px rgba(15, 23, 42, 0.11);

          --pw-radius-sm: 10px;
          --pw-radius-md: 16px;
          --pw-radius-lg: 24px;
          --pw-radius-xl: 30px;

          --pw-mono: "DM Mono", "Fira Mono", monospace;

          position: relative;
          isolation: isolate;
          overflow: clip;
          background:
            linear-gradient(180deg, #edf1f7 0%, #f3f6fb 34%, #eef2f7 100%);
        }

        .pw-contact__bg-grid,
        .pw-contact__bg-glow,
        .pw-contact__top-rule {
          pointer-events: none;
        }

        .pw-contact__bg-grid {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image:
            linear-gradient(rgba(100, 116, 139, 0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 116, 139, 0.055) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: linear-gradient(
            180deg,
            transparent 0%,
            rgba(0, 0, 0, 0.82) 12%,
            rgba(0, 0, 0, 0.96) 84%,
            transparent 100%
          );
        }

        .pw-contact__bg-glow {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(circle at 10% 10%, rgba(200, 30, 30, 0.08), transparent 26%),
            radial-gradient(circle at 90% 12%, rgba(148, 163, 184, 0.12), transparent 28%),
            radial-gradient(circle at 50% 100%, rgba(200, 30, 30, 0.05), transparent 24%);
        }

        .pw-contact__top-rule {
          position: absolute;
          inset: 0 0 auto;
          height: 1px;
          z-index: 2;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(200, 30, 30, 0.16) 20%,
            rgba(200, 30, 30, 0.34) 50%,
            rgba(200, 30, 30, 0.16) 80%,
            transparent
          );
        }

        .pw-contact > * {
          position: relative;
          z-index: 1;
        }

        .pw-contact__container {
          width: min(1280px, calc(100% - 48px));
          margin-inline: auto;
        }

        .pw-contact__section {
          padding: clamp(72px, 9vw, 112px) 0;
        }

        .pw-contact__section:first-of-type {
          padding-top: clamp(136px, 15vw, 210px);
        }

        .pw-contact__section--soft {
          border-top: 1px solid var(--pw-border);
          border-bottom: 1px solid var(--pw-border);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.26), rgba(248,250,252,0.18));
          backdrop-filter: blur(6px);
        }

        .pw-contact__section--final {
          padding-top: clamp(60px, 8vw, 96px);
          border-top: 1px solid var(--pw-border);
        }

        .pw-contact__section-header {
          max-width: 760px;
          margin-bottom: clamp(32px, 5vw, 52px);
        }

        .pw-contact__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          margin-bottom: 1.15rem;
          padding: 6px 14px 6px 10px;
          border-radius: 999px;
          border: 1px solid var(--pw-red-border);
          background: rgba(255, 255, 255, 0.58);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
          color: var(--pw-red-strong);
          font-family: var(--pw-mono);
          font-size: 0.68rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .pw-contact__eyebrow-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 999px;
          background: var(--pw-red);
          box-shadow: 0 0 0 4px rgba(200, 30, 30, 0.12);
        }

        .pw-contact__eyebrow-dot--pulse {
          animation: pwContactPulse 1.9s ease-in-out infinite;
        }

        @keyframes pwContactPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.35); }
        }

        .pw-contact__heading {
          margin: 0 0 1rem;
          color: var(--pw-text-1);
          font-size: 40px;
          line-height: 0.98;
          letter-spacing: -0.05em;
          max-width: 14ch;
        }

        .pw-contact__heading mark {
          background: none;
          color: var(--pw-red);
        }

        .pw-contact__heading--final {
          max-width: 15ch;
          margin-bottom: 0.8rem;
        }

        .pw-contact__lead {
          margin: 0;
          max-width: 44rem;
          color: var(--pw-text-2);
          font-size: 1.02rem;
          line-height: 1.85;
        }

        .pw-contact__form-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.24fr) minmax(320px, 0.76fr);
          gap: clamp(22px, 4vw, 40px);
          align-items: start;
        }

        .pw-contact__form,
        .pw-contact__side-panel,
        .pw-contact__faq-list,
        .pw-contact__faq-panel,
        .pw-contact__cta-inner {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--pw-border);
          box-shadow: var(--pw-shadow-sm), var(--pw-shadow-md);
        }

        .pw-contact__form {
          border-radius: 28px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.97), rgba(243,246,251,0.94));
        }

        .pw-contact__form::before,
        .pw-contact__side-panel::before,
        .pw-contact__faq-list::before,
        .pw-contact__faq-panel::before,
        .pw-contact__cta-inner::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(100,116,139,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,116,139,0.03) 1px, transparent 1px);
          background-size: 26px 26px;
          mask-image: linear-gradient(145deg, rgba(0,0,0,0.45) 0%, transparent 60%);
          pointer-events: none;
        }

        .pw-contact__form-shell {
          position: relative;
          z-index: 1;
          padding: clamp(22px, 3vw, 32px);
        }

        .pw-contact__form-topline {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
          color: var(--pw-text-3);
          font-family: var(--pw-mono);
          font-size: 0.67rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .pw-contact__topline-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--pw-red);
          box-shadow: 0 0 0 6px rgba(200, 30, 30, 0.1);
        }

        .pw-contact__field-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .pw-contact__field {
          margin-bottom: 1.25rem;
        }

        .pw-contact__field--stack {
          margin-bottom: 1.55rem;
          padding-top: 0.15rem;
          border: 0;
          min-inline-size: 0;
        }

        .pw-contact__label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.6rem;
          margin-bottom: 0.45rem;
          color: var(--pw-text-1);
          font-size: 0.83rem;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .pw-contact__label--legend {
          padding: 0;
        }

        .pw-contact__label span {
          color: var(--pw-red-strong);
          font-family: var(--pw-mono);
          font-size: 0.67rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .pw-contact__input,
        .pw-contact__select,
        .pw-contact__textarea {
          width: 100%;
          appearance: none;
          border: 1px solid var(--pw-border-strong);
          border-radius: 14px;
          background: rgba(255,255,255,0.88);
          color: var(--pw-text-1);
          padding: 0.9rem 0.95rem;
          font-size: 0.95rem;
          line-height: 1.5;
          outline: none;
          transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            background 180ms ease,
            transform 180ms ease;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.8);
        }

        .pw-contact__input::placeholder,
        .pw-contact__textarea::placeholder {
          color: #92a0b4;
        }

        .pw-contact__select {
          padding-right: 2.4rem;
          background-image:
            linear-gradient(45deg, transparent 50%, #8795aa 50%),
            linear-gradient(135deg, #8795aa 50%, transparent 50%);
          background-position:
            calc(100% - 18px) calc(50% - 3px),
            calc(100% - 12px) calc(50% - 3px);
          background-size: 6px 6px, 6px 6px;
          background-repeat: no-repeat;
        }

        .pw-contact__textarea {
          resize: vertical;
          min-height: 168px;
        }

        .pw-contact__input:focus,
        .pw-contact__select:focus,
        .pw-contact__textarea:focus {
          border-color: rgba(200, 30, 30, 0.35);
          background: rgba(255,255,255,0.98);
          box-shadow: 0 0 0 4px rgba(200, 30, 30, 0.08);
          transform: translateY(-1px);
        }

        .pw-contact__hint {
          margin: 0 0 0.7rem;
          color: var(--pw-text-3);
          font-size: 0.8rem;
          line-height: 1.7;
        }

        .pw-contact__chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
        }

        .pw-contact__chip-toggle {
          position: relative;
          display: inline-flex;
        }

        .pw-contact__chip-toggle input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .pw-contact__chip-toggle span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 38px;
          padding: 0.58rem 0.82rem;
          border-radius: 999px;
          border: 1px solid rgba(15, 23, 42, 0.1);
          background: rgba(255,255,255,0.86);
          color: var(--pw-text-2);
          font-family: var(--pw-mono);
          font-size: 0.66rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition:
            border-color 180ms ease,
            color 180ms ease,
            background 180ms ease,
            transform 180ms ease,
            box-shadow 180ms ease;
        }

        .pw-contact__chip-toggle span:hover {
          transform: translateY(-1px);
          border-color: rgba(200, 30, 30, 0.24);
          box-shadow: 0 8px 18px rgba(15,23,42,0.06);
        }

        .pw-contact__chip-toggle input:checked + span {
          color: var(--pw-red-strong);
          background: rgba(200, 30, 30, 0.08);
          border-color: rgba(200, 30, 30, 0.22);
          transform: translateY(-1px);
        }

        .pw-contact__form-footer {
          margin-top: 1.5rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem 1.2rem;
        }

        .pw-contact__cta-primary {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0.82rem 1.4rem;
          border: 0;
          border-radius: 999px;
          background: linear-gradient(180deg, #d12727, #b91c1c);
          color: #ffffff;
          text-decoration: none;
          box-shadow:
            0 12px 28px rgba(185, 28, 28, 0.25),
            inset 0 1px 0 rgba(255,255,255,0.22);
          font-family: var(--pw-mono);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            filter 220ms ease;
        }

        .pw-contact__cta-primary:hover {
          transform: translateY(-2px);
          filter: brightness(1.03);
          box-shadow:
            0 18px 36px rgba(185, 28, 28, 0.3),
            inset 0 1px 0 rgba(255,255,255,0.24);
        }

        .pw-contact__cta-shimmer {
          position: absolute;
          inset: 0;
          width: 40%;
          background: linear-gradient(
            105deg,
            transparent 0%,
            rgba(255,255,255,0.34) 50%,
            transparent 100%
          );
          transform: translateX(-130%);
          pointer-events: none;
        }

        .pw-contact__cta-primary:hover .pw-contact__cta-shimmer {
          animation: pwContactSweep 900ms ease;
        }

        @keyframes pwContactSweep {
          0% { transform: translateX(-130%); }
          100% { transform: translateX(280%); }
        }

        .pw-contact__cta-content {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .pw-contact__btn-ghost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          min-height: 46px;
          padding: 0.8rem 1.1rem;
          border-radius: 999px;
          border: 1px solid var(--pw-border-strong);
          background: rgba(255,255,255,0.72);
          color: var(--pw-text-1);
          text-decoration: none;
          font-family: var(--pw-mono);
          font-size: 0.74rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            color 180ms ease,
            background 180ms ease;
        }

        .pw-contact__btn-ghost:hover {
          transform: translateY(-1px);
          color: var(--pw-red-strong);
          border-color: rgba(200, 30, 30, 0.2);
          background: rgba(255,255,255,0.92);
        }

        .pw-contact__form-note {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          max-width: 21rem;
          color: var(--pw-text-3);
          font-size: 0.81rem;
          line-height: 1.65;
        }

        .pw-contact__form-note p {
          margin: 0;
        }

        .pw-contact__side-panel {
          border-radius: 28px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.94), rgba(242,245,250,0.92));
        }

        .pw-contact__side-panel-inner {
          position: relative;
          z-index: 1;
          padding: clamp(20px, 3vw, 28px);
        }

        .pw-contact__side-header {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          margin-bottom: 1.35rem;
        }

        .pw-contact__side-icon-wrap {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          color: var(--pw-red-strong);
          background: linear-gradient(
            145deg,
            rgba(200,30,30,0.1),
            rgba(200,30,30,0.03)
          );
          border: 1px solid rgba(200,30,30,0.16);
          flex-shrink: 0;
        }

        .pw-contact__side-kicker,
        .pw-contact__faq-panel-kicker {
          margin: 0 0 0.38rem;
          color: var(--pw-text-3);
          font-family: var(--pw-mono);
          font-size: 0.66rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .pw-contact__side-title {
          margin: 0;
          color: var(--pw-text-1);
          font-size: 1.02rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.2;
          max-width: 16ch;
        }

        .pw-contact__steps {
          list-style: none;
          margin: 0 0 1.35rem;
          padding: 0;
          display: grid;
          gap: 0.9rem;
        }

        .pw-contact__steps li {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 0.85rem;
          padding-top: 0.85rem;
          border-top: 1px solid rgba(15, 23, 42, 0.08);
        }

        .pw-contact__step-index {
          color: var(--pw-text-3);
          font-family: var(--pw-mono);
          font-size: 0.7rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding-top: 0.18rem;
        }

        .pw-contact__steps h3 {
          margin: 0 0 0.22rem;
          color: var(--pw-text-1);
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .pw-contact__steps p {
          margin: 0;
          color: var(--pw-text-2);
          font-size: 0.86rem;
          line-height: 1.75;
        }

        .pw-contact__faq-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.34fr) minmax(300px, 0.86fr);
          gap: clamp(22px, 4vw, 40px);
          align-items: start;
        }

        .pw-contact__faq-list {
          border-radius: 28px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.96), rgba(245,247,251,0.92));
          padding: 1.1rem 1.45rem;
        }

        .pw-contact__faq-item {
          position: relative;
          z-index: 1;
          padding: 0.55rem 0;
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
        }

        .pw-contact__faq-item:last-child {
          border-bottom: 0;
        }

        .pw-contact__faq-summary {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          cursor: pointer;
          min-height: 54px;
        }

        .pw-contact__faq-summary::-webkit-details-marker {
          display: none;
        }

        .pw-contact__faq-q {
          color: var(--pw-text-1);
          font-size: 0.95rem;
          font-weight: 600;
          line-height: 1.45;
          letter-spacing: -0.02em;
        }

        .pw-contact__faq-icon {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          border-radius: 999px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(15, 23, 42, 0.1);
          background: rgba(255,255,255,0.86);
          color: var(--pw-text-2);
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            color 180ms ease,
            background 180ms ease;
        }

        .pw-contact__faq-item[open] .pw-contact__faq-icon {
          transform: rotate(-180deg);
          color: var(--pw-red-strong);
          border-color: rgba(200, 30, 30, 0.22);
          background: rgba(200, 30, 30, 0.06);
        }

        .pw-contact__faq-body {
          padding: 0.2rem 2.6rem 0.65rem 0;
        }

        .pw-contact__faq-body p {
          margin: 0;
          color: var(--pw-text-2);
          font-size: 0.88rem;
          line-height: 1.8;
        }

        .pw-contact__faq-panel {
          border-radius: 24px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.95), rgba(243,246,251,0.92));
          padding: clamp(22px, 3vw, 30px);
        }

        .pw-contact__faq-panel-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(100,116,139,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,116,139,0.035) 1px, transparent 1px);
          background-size: 24px 24px;
          mask-image: linear-gradient(145deg, rgba(0,0,0,0.32) 0%, transparent 58%);
          pointer-events: none;
        }

        .pw-contact__faq-panel > * {
          position: relative;
          z-index: 1;
        }

        .pw-contact__faq-panel-body {
          margin: 0 0 0.85rem;
          color: var(--pw-text-2);
          font-size: 0.92rem;
          line-height: 1.82;
        }

        .pw-contact__cta-inner {
          border-radius: 30px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.96), rgba(243,246,251,0.92));
          padding: clamp(24px, 3.4vw, 36px);
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: clamp(20px, 4vw, 46px);
          align-items: end;
          box-shadow: var(--pw-shadow-sm), var(--pw-shadow-lg);
        }

        .pw-contact__cta-copy {
          position: relative;
          z-index: 1;
        }

        .pw-contact__cta-lead {
          max-width: 38rem;
        }

        .pw-contact__cta-actions {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
          justify-content: flex-end;
        }

        [data-reveal] {
          opacity: 0;
          transform: translateY(18px);
          transition:
            opacity 720ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 720ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pw-contact__is-visible[data-reveal] {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1080px) {
          .pw-contact__section:first-of-type {
            padding-top: clamp(124px, 14vw, 176px);
          }

          .pw-contact__form-grid,
          .pw-contact__faq-grid,
          .pw-contact__cta-inner {
            grid-template-columns: minmax(0, 1fr);
          }

          .pw-contact__cta-actions {
            justify-content: flex-start;
          }
        }

        @media (max-width: 720px) {
          .pw-contact__container {
            width: min(100%, calc(100% - 24px));
          }

          .pw-contact__section {
            padding: 58px 0;
          }

          .pw-contact__section:first-of-type {
            padding-top: 140px;
          }

          .pw-contact__section-header {
            margin-bottom: 28px;
          }

          .pw-contact__heading {
            font-size: 30px;
            line-height: 1;
            margin-bottom: 0.9rem;
            max-width: 12ch;
          }

          .pw-contact__lead {
            font-size: 0.95rem;
            line-height: 1.75;
          }

          .pw-contact__form-shell,
          .pw-contact__side-panel-inner,
          .pw-contact__faq-panel,
          .pw-contact__cta-inner {
            padding: 18px;
          }

          .pw-contact__faq-list {
            padding: 0.95rem 1rem;
          }

          .pw-contact__field-row {
            grid-template-columns: minmax(0, 1fr);
            gap: 0;
          }

          .pw-contact__input,
          .pw-contact__select,
          .pw-contact__textarea {
            font-size: 16px;
          }

          .pw-contact__chip-row {
            gap: 0.5rem;
          }

          .pw-contact__chip-toggle {
            flex: 1 1 100%;
          }

          .pw-contact__chip-toggle span {
            width: 100%;
            justify-content: flex-start;
            min-height: 42px;
            padding-inline: 0.9rem;
            font-size: 0.64rem;
          }

          .pw-contact__form-footer {
            align-items: stretch;
          }

          .pw-contact__cta-primary,
          .pw-contact__btn-ghost {
            width: 100%;
            min-height: 48px;
          }

          .pw-contact__form-note {
            max-width: none;
            font-size: 0.8rem;
          }

          .pw-contact__steps li {
            grid-template-columns: 34px minmax(0, 1fr);
            gap: 0.7rem;
          }

          .pw-contact__faq-summary {
            align-items: flex-start;
            padding: 0.15rem 0;
          }

          .pw-contact__faq-q {
            font-size: 0.9rem;
          }

          .pw-contact__faq-body {
            padding-right: 0;
          }

          .pw-contact__cta-actions {
            width: 100%;
          }
        }

        @media (max-width: 420px) {
          .pw-contact__section:first-of-type {
            padding-top: 130px;
          }

          .pw-contact__heading {
            font-size: 1.82rem;
            max-width: 11ch;
          }

          .pw-contact__eyebrow {
            font-size: 0.62rem;
            padding: 6px 12px 6px 9px;
          }

          .pw-contact__form-shell,
          .pw-contact__side-panel-inner,
          .pw-contact__faq-panel,
          .pw-contact__cta-inner {
            padding: 16px;
          }

          .pw-contact__faq-list {
            padding: 0.85rem 0.92rem;
          }

          .pw-contact__cta-content,
          .pw-contact__btn-ghost {
            gap: 0.42rem;
          }
        }
      `}</style>
    </main>
  );
}
