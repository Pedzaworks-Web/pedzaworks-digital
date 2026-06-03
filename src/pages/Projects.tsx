// src/pages/Projects.tsx

import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Search,
  PenTool,
  Code2,
  RefreshCw,
  ExternalLink,
} from "lucide-react";

export default function Projects() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.07 },
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const reveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const projects = [
    {
      index: "01",
      category: "Service Platform",
      title: "Zimserv",
      description:
        "A digital platform designed to connect customers with trusted service providers through a streamlined and user-friendly ecosystem.",
      features: [
        "Service discovery",
        "Provider profiles",
        "Customer requests",
        "Operational coordination",
        "Marketplace functionality",
      ],
      stack: ["React", "Node.js", "PostgreSQL", "REST API"],
      status: "Active Project",
      statusColor: "#22c55e",
      cta: "View Project",
      href: "#",
    },
    {
      index: "02",
      category: "Campus Operations",
      title: "Campus Operations Platform",
      description:
        "A platform designed to improve issue reporting, workflow routing, communication, and operational visibility within educational institutions.",
      features: [
        "Issue reporting",
        "Escalation workflows",
        "Operational dashboards",
        "Notifications",
        "Administrative oversight",
      ],
      stack: ["React", "TypeScript", "Node.js", "MongoDB"],
      status: "In Development",
      statusColor: "#f59e0b",
      cta: "View Project",
      href: "#",
    },
    {
      index: "03",
      category: "Digital Commerce",
      title: "Printing Company E-Commerce Platform",
      description:
        "A custom e-commerce platform developed to streamline customer ordering, product management, and online business operations.",
      features: [
        "Online ordering",
        "Product catalog",
        "Customer management",
        "Responsive design",
        "Operational efficiency",
      ],
      stack: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      status: "Completed",
      statusColor: "#64748b",
      cta: "View Project",
      href: "#",
    },
    {
      index: "04",
      category: "Community Platform",
      title: "Church Digital Platform",
      description:
        "A modern digital platform designed to improve communication, information sharing, and community engagement.",
      features: [
        "Announcements",
        "Event information",
        "Community engagement",
        "Responsive experience",
        "Content management",
      ],
      stack: ["React", "CMS", "Node.js", "MySQL"],
      status: "Completed",
      statusColor: "#64748b",
      cta: "View Project",
      href: "#",
    },
  ];

  const approach = [
    {
      index: "01",
      icon: <Search size={18} strokeWidth={1.6} />,
      title: "Understand The Problem",
      desc: "We study workflows, challenges, and operational realities before writing code.",
    },
    {
      index: "02",
      icon: <PenTool size={18} strokeWidth={1.6} />,
      title: "Design The System",
      desc: "We architect solutions around people, processes, and operational goals.",
    },
    {
      index: "03",
      icon: <Code2 size={18} strokeWidth={1.6} />,
      title: "Build With Purpose",
      desc: "Every feature should support a measurable operational objective.",
    },
    {
      index: "04",
      icon: <RefreshCw size={18} strokeWidth={1.6} />,
      title: "Support Long-Term Growth",
      desc: "Systems are designed for future scalability, integration, and evolution.",
    },
  ];

  const stats = [
    { value: "04+", label: "Projects Built" },
    { value: "10+", label: "Platforms Designed" },
    { value: "20+", label: "Operational Workflows Created" },
    { value: "100%", label: "Systems Thinking" },
  ];

  return (
    <div className="pw-projects">
      <div className="pw-proj__bg-grid" />
      <div className="pw-proj__bg-fade" />
      <div className="pw-proj__top-rule" />

      {/* ── SECTION 1: HERO ── */}
      <section className="pw-proj__section pw-proj__section--hero">
        <div className="pw-proj__container">
          <div className="pw-proj__grid-hero">
            <div ref={reveal} data-reveal>
              <div className="pw-proj__eyebrow">
                <span className="pw-proj__eyebrow-dot pw-proj__eyebrow-dot--pulse" />
                Projects
              </div>
              <h1 className="pw-proj__heading pw-proj__heading--hero">
                Systems Built To Solve Real <mark>Operational Challenges.</mark>
              </h1>
              <p className="pw-proj__lead" style={{ marginTop: "1.4rem" }}>
                A collection of platforms, systems, and digital solutions
                designed to improve visibility, coordination, automation, and
                operational efficiency.
              </p>
            </div>

            {/* Right: topology illustration */}
            <div ref={reveal} data-reveal className="pw-proj__topology">
              <span className="pw-proj__node pw-proj__node--a" />
              <span className="pw-proj__node pw-proj__node--b" />
              <span className="pw-proj__node pw-proj__node--c" />
              <span className="pw-proj__node pw-proj__node--d" />
              <span className="pw-proj__node pw-proj__node--e" />
              <span className="pw-proj__node pw-proj__node--f" />
              <span className="pw-proj__link pw-proj__link--1" />
              <span className="pw-proj__link pw-proj__link--2" />
              <span className="pw-proj__link pw-proj__link--3" />
              <span className="pw-proj__link pw-proj__link--4" />
              <span className="pw-proj__link pw-proj__link--5" />

              <div className="pw-proj__panel pw-proj__panel--primary">
                <div className="pw-proj__panel-header">
                  <span className="pw-proj__panel-dot" />
                  Project Delivery
                </div>
                <div className="pw-proj__metrics">
                  <div>
                    <small>Built</small>
                    <strong>04+</strong>
                  </div>
                  <div>
                    <small>Active</small>
                    <strong>02</strong>
                  </div>
                  <div>
                    <small>Success</small>
                    <strong>100%</strong>
                  </div>
                </div>
              </div>

              <div className="pw-proj__panel pw-proj__panel--secondary">
                <div className="pw-proj__panel-header">
                  <span className="pw-proj__panel-dot" />
                  System Status
                </div>
                <div style={{ display: "grid", gap: "0.55rem" }}>
                  {["Zimserv", "Campus OS", "E-Commerce"].map((label, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "0.75rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--proj-mono)",
                          fontSize: "0.64rem",
                          letterSpacing: "0.1em",
                          color: "var(--proj-text-2)",
                          textTransform: "uppercase",
                        }}
                      >
                        {label}
                      </span>
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: i === 1 ? "#f59e0b" : "#22c55e",
                          boxShadow:
                            i === 1
                              ? "0 0 0 3px rgba(245,158,11,0.18)"
                              : "0 0 0 3px rgba(34,197,94,0.18)",
                          flexShrink: 0,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: INTRODUCTION ── */}
      <section className="pw-proj__section pw-proj__section--soft">
        <div className="pw-proj__container">
          <div className="pw-proj__grid-editorial">
            <div ref={reveal} data-reveal>
              <div className="pw-proj__eyebrow">
                <span className="pw-proj__eyebrow-dot" />
                Selected Work
              </div>
              <h2 className="pw-proj__heading">
                Building Software Around <mark>Operations.</mark>
              </h2>
              <div className="pw-proj__divider" style={{ marginTop: "1.5rem" }}>
                <span className="pw-proj__divider-line" />
                <span className="pw-proj__divider-label">Philosophy</span>
                <span className="pw-proj__divider-line" />
              </div>
            </div>
            <div ref={reveal} data-reveal>
              <p className="pw-proj__body-large">
                Every project begins with understanding how an organisation
                operates. Our focus is not simply building software, but
                creating systems that improve coordination, execution,
                visibility, and long-term operational effectiveness.
              </p>
              <p className="pw-proj__body-large">
                We design systems that are structured around how people actually
                work — not around what looks good in a prototype. Each platform
                we build is shaped by operational thinking from the first
                conversation to the final deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FEATURED PROJECTS ── */}
      <section className="pw-proj__section">
        <div className="pw-proj__container">
          {projects.map((project, i) => {
            const isEven = i % 2 !== 0;
            return (
              <article
                key={project.index}
                ref={reveal}
                data-reveal
                className="pw-proj__project-row"
                style={{
                  flexDirection: isEven ? "row-reverse" : "row",
                }}
              >
                {/* Description side */}
                <div className="pw-proj__project-body">
                  <div className="pw-proj__project-meta">
                    <span className="pw-proj__eyebrow" style={{ margin: 0 }}>
                      <span className="pw-proj__eyebrow-dot" />
                      {project.category}
                    </span>
                    <span
                      className="pw-proj__status-badge"
                      style={
                        {
                          "--status-color": project.statusColor,
                        } as React.CSSProperties
                      }
                    >
                      <span className="pw-proj__status-dot" />
                      {project.status}
                    </span>
                  </div>
                  <h2 className="pw-proj__project-title">{project.title}</h2>
                  <p
                    className="pw-proj__body-large"
                    style={{ marginBottom: "1.6rem" }}
                  >
                    {project.description}
                  </p>

                  <div className="pw-proj__features">
                    <p className="pw-proj__features-label">Key Features</p>
                    <ul className="pw-proj__features-list">
                      {project.features.map((f, fi) => (
                        <li key={fi} className="pw-proj__feature-item">
                          <span className="pw-proj__feature-dot" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pw-proj__stack">
                    {project.stack.map((s, si) => (
                      <span key={si} className="pw-proj__stack-tag">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div style={{ marginTop: "1.8rem" }}>
                    <a href={project.href} className="pw-proj__cta-primary">
                      <span className="pw-proj__cta-shimmer" />
                      <span className="pw-proj__cta-content">
                        {project.cta}
                        <ExternalLink size={14} strokeWidth={2.2} />
                      </span>
                    </a>
                  </div>
                </div>

                {/* Visual side */}
                <div className="pw-proj__project-visual">
                  <div className="pw-proj__visual-frame">
                    <div className="pw-proj__visual-bar">
                      <span
                        className="pw-proj__visual-dot"
                        style={{ background: "#ef4444" }}
                      />
                      <span
                        className="pw-proj__visual-dot"
                        style={{ background: "#f59e0b" }}
                      />
                      <span
                        className="pw-proj__visual-dot"
                        style={{ background: "#22c55e" }}
                      />
                      <span className="pw-proj__visual-bar-label">
                        {project.title.toLowerCase().replace(/\s/g, "-")}
                        .pedzaworks.com
                      </span>
                    </div>
                    <div className="pw-proj__visual-body">
                      {/* Inner system illustration */}
                      <div className="pw-proj__visual-header-row">
                        <div className="pw-proj__visual-block pw-proj__visual-block--wide" />
                        <div
                          className="pw-proj__visual-block pw-proj__visual-block--narrow"
                          style={{
                            background: "var(--proj-red)",
                            opacity: 0.85,
                          }}
                        />
                      </div>
                      <div className="pw-proj__visual-grid">
                        {[...Array(6)].map((_, bi) => (
                          <div key={bi} className="pw-proj__visual-card">
                            <div className="pw-proj__visual-card-icon" />
                            <div className="pw-proj__visual-card-line" />
                            <div className="pw-proj__visual-card-line pw-proj__visual-card-line--short" />
                          </div>
                        ))}
                      </div>
                      <div className="pw-proj__visual-footer-row">
                        <div className="pw-proj__visual-block pw-proj__visual-block--medium" />
                        <div className="pw-proj__visual-block pw-proj__visual-block--medium" />
                        <div
                          className="pw-proj__visual-block pw-proj__visual-block--medium"
                          style={{
                            background: "var(--proj-red)",
                            opacity: 0.7,
                          }}
                        />
                      </div>
                      <div className="pw-proj__visual-index">
                        {project.index}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── SECTION 4: APPROACH ── */}
      <section className="pw-proj__section pw-proj__section--soft">
        <div className="pw-proj__container">
          <div ref={reveal} data-reveal className="pw-proj__section-title">
            <div className="pw-proj__eyebrow">
              <span className="pw-proj__eyebrow-dot" />
              Our Process
            </div>
            <h2 className="pw-proj__heading">
              Every System Starts With Understanding <mark>Operations.</mark>
            </h2>
          </div>
          <div className="pw-proj__deliver-list">
            {approach.map((step, i) => (
              <article
                key={step.index}
                ref={reveal}
                data-reveal
                className="pw-proj__deliver-step"
              >
                <div className="pw-proj__deliver-meta">
                  <span className="pw-proj__deliver-number">{step.index}</span>
                  {i < approach.length - 1 && (
                    <span className="pw-proj__deliver-line" />
                  )}
                </div>
                <div className="pw-proj__deliver-body">
                  <div
                    className="pw-proj__card-icon"
                    style={{ marginBottom: "0.85rem" }}
                  >
                    {step.icon}
                  </div>
                  <h3 className="pw-proj__card-title">{step.title}</h3>
                  <p className="pw-proj__card-desc">{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: STATS ── */}
      <section className="pw-proj__section">
        <div className="pw-proj__container">
          <div ref={reveal} data-reveal className="pw-proj__section-title">
            <div className="pw-proj__eyebrow">
              <span className="pw-proj__eyebrow-dot" />
              At A Glance
            </div>
            <h2 className="pw-proj__heading">
              Building The Foundations For <mark>Better Operations.</mark>
            </h2>
          </div>
          <div
            className="pw-proj__card-grid pw-proj__card-grid--4col"
            ref={reveal as any}
            data-reveal
          >
            {stats.map((stat, i) => (
              <article key={i} className="pw-proj__card">
                <span className="pw-proj__card-shimmer" />
                <div className="pw-proj__card-texture" />
                <div className="pw-proj__impact-index">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div className="pw-proj__stat-value">{stat.value}</div>
                  <div className="pw-proj__stat-label">{stat.label}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CTA ── */}
      <section className="pw-proj__section">
        <div className="pw-proj__container">
          <div ref={reveal} data-reveal>
            <div className="pw-proj__cta-inner">
              <div>
                <div className="pw-proj__eyebrow">
                  <span className="pw-proj__eyebrow-dot pw-proj__eyebrow-dot--pulse" />
                  Start A Conversation
                </div>
                <h2
                  className="pw-proj__heading"
                  style={{ marginBottom: "0.75rem" }}
                >
                  Have A Project <mark>In Mind?</mark>
                </h2>
                <p className="pw-proj__lead" style={{ maxWidth: "38rem" }}>
                  Whether you're building a workflow platform, operational
                  system, marketplace, digital ecosystem, or connected
                  infrastructure solution, Pedzaworks can help bring it to life.
                </p>
              </div>
              <div className="pw-proj__cta-actions">
                <a href="#contact" className="pw-proj__cta-primary">
                  <span className="pw-proj__cta-shimmer" />
                  <span className="pw-proj__cta-content">
                    Discuss Your Project
                    <ArrowRight size={15} strokeWidth={2.2} />
                  </span>
                </a>
                <a href="#schedule" className="pw-proj__btn-ghost">
                  Schedule A Consultation
                  <ArrowRight size={14} strokeWidth={2.2} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Tokens ── */
        .pw-projects {
          --proj-red:        #c81e1e;
          --proj-red-hover:  #e03131;
          --proj-red-border: rgba(200,30,30,0.18);
          --proj-surface:    #ffffff;
          --proj-border:     rgba(15,23,42,0.07);
          --proj-border-md:  rgba(15,23,42,0.10);
          --proj-text-1:     #0c1220;
          --proj-text-2:     #3d4f6b;
          --proj-text-3:     #7a8ba3;
          --proj-mono:       "DM Mono", "Fira Mono", monospace;
          --proj-r-sm:       8px;
          --proj-r-md:       12px;
          --proj-r-lg:       16px;
          --proj-r-xl:       20px;

          position: relative;
          background: linear-gradient(160deg, #edf1f7 0%, #f3f6fa 55%, #eef1f6 100%);
          isolation: isolate;
          overflow-x: hidden;
        }

        /* ── Backgrounds ── */
        .pw-proj__bg-grid {
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(100,116,139,0.065) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,116,139,0.065) 1px, transparent 1px);
          background-size: 64px 64px;
          pointer-events: none;
          mask-image: linear-gradient(180deg,
            transparent 0%, rgba(0,0,0,0.45) 12%,
            rgba(0,0,0,0.9) 32%, rgba(0,0,0,0.9) 68%,
            transparent 100%);
          z-index: 0;
        }

        .pw-proj__bg-fade {
          position: fixed; inset: 0;
          background:
            radial-gradient(ellipse 65% 45% at 8% 108%,  rgba(200,30,30,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 55% 48% at 96% -5%,  rgba(200,30,30,0.055) 0%, transparent 68%),
            radial-gradient(ellipse 40% 30% at 60% 105%, rgba(100,116,139,0.06) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        .pw-projects > * { position: relative; z-index: 1; }

        .pw-proj__top-rule {
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg,
            transparent,
            rgba(200,30,30,0.22) 25%,
            rgba(200,30,30,0.36) 50%,
            rgba(200,30,30,0.22) 75%,
            transparent);
        }

        /* ── Container ── */
        .pw-proj__container {
          max-width: 1280px;
          width: min(1280px, calc(100% - 3rem));
          margin-inline: auto;
        }

        /* ── Sections ── */
        .pw-proj__section {
          padding: clamp(5rem, 8vw, 7rem) 0;
        }

        .pw-proj__section--hero {
          padding-top: 230px;
          padding-bottom: 80px;
        }

        .pw-proj__section--soft {
          background: linear-gradient(180deg, rgba(255,255,255,0.5), rgba(249,250,251,0.4));
          border-top: 1px solid var(--proj-border-md);
          border-bottom: 1px solid var(--proj-border-md);
        }

        /* ── Eyebrow ── */
        .pw-proj__eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 5px 13px 5px 9px;
          border-radius: var(--proj-r-sm);
          background: rgba(200,30,30,0.055);
          border: 1px solid var(--proj-red-border);
          color: var(--proj-red);
          font-family: var(--proj-mono);
          font-size: 0.64rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 1.15rem;
        }

        .pw-proj__eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--proj-red);
          box-shadow: 0 0 0 3px rgba(200,30,30,0.18);
          flex-shrink: 0;
        }

        .pw-proj__eyebrow-dot--pulse {
          animation: projPulse 1.8s ease-in-out infinite;
        }

        @keyframes projPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.35); }
        }

        /* ── Typography ── */
        .pw-proj__heading {
          margin: 0 0 1.15rem;
          font-size: 40px;
          line-height: 1.02;
          letter-spacing: -0.045em;
          color: var(--proj-text-1);
        }

        .pw-proj__heading mark {
          background: none;
          color: var(--proj-red);
        }

        .pw-proj__heading--hero {
          font-size: clamp(2.8rem, 5vw, 5.2rem);
          letter-spacing: -0.05em;
          line-height: 0.97;
          max-width: 13ch;
        }

        .pw-proj__lead {
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.82;
          color: var(--proj-text-2);
          max-width: 42rem;
        }

        .pw-proj__body-large {
          margin: 0 0 1rem;
          color: var(--proj-text-2);
          line-height: 1.86;
          font-size: 1.02rem;
        }

        .pw-proj__body-large:last-child { margin-bottom: 0; }

        .pw-proj__section-title {
          margin-bottom: clamp(2rem, 4vw, 3rem);
          max-width: 44rem;
        }

        /* ── Divider ── */
        .pw-proj__divider {
          display: flex; align-items: center; gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .pw-proj__divider-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, var(--proj-border-md) 40%, var(--proj-border-md) 60%, transparent);
        }

        .pw-proj__divider-label {
          font-family: var(--proj-mono);
          font-size: 0.61rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--proj-text-3);
          white-space: nowrap;
        }

        /* ── Grids ── */
        .pw-proj__grid-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
          gap: clamp(2rem, 4vw, 4.5rem);
          align-items: center;
        }

        .pw-proj__grid-editorial {
          display: grid;
          grid-template-columns: minmax(240px, 0.8fr) minmax(0, 1.2fr);
          gap: clamp(2rem, 5vw, 5rem);
          align-items: flex-start;
        }

        /* ── Topology ── */
        .pw-proj__topology {
          position: relative;
          min-height: 480px;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid var(--proj-border-md);
          box-shadow:
            0 1px 2px rgba(0,0,0,0.04),
            0 8px 32px rgba(0,0,0,0.08),
            inset 0 1px 0 rgba(255,255,255,0.85);
          background:
            radial-gradient(circle at top right, rgba(196,30,36,0.09), transparent 24%),
            linear-gradient(180deg, rgba(255,255,255,0.92), rgba(238,240,244,0.88));
        }

        .pw-proj__topology::before {
          content: "";
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px);
          background-size: 36px 36px;
          opacity: 0.7;
        }

        .pw-proj__node {
          position: absolute;
          width: 12px; height: 12px;
          border-radius: 999px;
          background: #fff;
          border: 2px solid var(--proj-red);
          box-shadow: 0 0 0 10px rgba(196,30,36,0.06);
        }

        .pw-proj__node--a { top: 14%; left: 20%; }
        .pw-proj__node--b { top: 26%; right: 18%; }
        .pw-proj__node--c { top: 44%; left: 42%; }
        .pw-proj__node--d { top: 60%; left: 16%; }
        .pw-proj__node--e { bottom: 20%; right: 24%; }
        .pw-proj__node--f { bottom: 12%; left: 35%; }

        .pw-proj__link {
          position: absolute; height: 1px;
          background: linear-gradient(90deg, rgba(196,30,36,0.55), rgba(15,23,42,0.12));
          transform-origin: left center;
        }

        .pw-proj__link--1 { top: 17%; left: 22%; width: 50%; transform: rotate(11deg); }
        .pw-proj__link--2 { top: 30%; left: 44%; width: 22%; transform: rotate(56deg); }
        .pw-proj__link--3 { top: 47%; left: 18%; width: 26%; transform: rotate(-8deg); }
        .pw-proj__link--4 { top: 55%; left: 43%; width: 38%; transform: rotate(22deg); }
        .pw-proj__link--5 { bottom: 22%; left: 17%; width: 52%; transform: rotate(4deg); }

        .pw-proj__panel {
          position: absolute;
          border: 1px solid rgba(15,23,42,0.08);
          border-radius: 22px;
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(8px);
          box-shadow: 0 18px 40px rgba(15,23,42,0.08);
        }

        .pw-proj__panel--primary {
          top: 10%; right: 8%;
          width: min(260px, 70%);
          padding: 1rem 1rem 1.1rem;
        }

        .pw-proj__panel--secondary {
          left: 7%; bottom: 9%;
          width: min(210px, 55%);
          padding: 1rem;
        }

        .pw-proj__panel-header {
          display: flex; align-items: center; gap: 0.55rem;
          margin-bottom: 1rem;
          font-family: var(--proj-mono);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          color: var(--proj-text-3);
          text-transform: uppercase;
        }

        .pw-proj__panel-dot {
          width: 8px; height: 8px;
          border-radius: 999px;
          background: var(--proj-red);
          box-shadow: 0 0 0 6px rgba(196,30,36,0.08);
        }

        .pw-proj__metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 0.75rem;
        }

        .pw-proj__metrics small {
          display: block;
          margin-bottom: 0.35rem;
          font-family: var(--proj-mono);
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--proj-text-3);
        }

        .pw-proj__metrics strong {
          display: block;
          font-size: 1.35rem;
          line-height: 1;
          color: var(--proj-text-1);
        }

        /* ── Project alternating rows ── */
        .pw-proj__project-row {
          display: flex;
          gap: clamp(2rem, 5vw, 5rem);
          align-items: center;
          padding: clamp(2.5rem, 4vw, 4rem) 0;
          border-bottom: 1px solid var(--proj-border-md);
        }

        .pw-proj__project-row:last-child {
          border-bottom: none;
        }

        .pw-proj__project-body {
          flex: 1;
          min-width: 0;
        }

        .pw-proj__project-visual {
          flex: 1;
          min-width: 0;
        }

        .pw-proj__project-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 0.5rem;
        }

        .pw-proj__project-meta .pw-proj__eyebrow {
          margin-bottom: 0;
        }

        .pw-proj__project-title {
          margin: 0 0 1rem;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          letter-spacing: -0.04em;
          line-height: 1.06;
          color: var(--proj-text-1);
        }

        .pw-proj__status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 4px 10px;
          border-radius: 999px;
          background: rgba(15,23,42,0.04);
          border: 1px solid var(--proj-border-md);
          font-family: var(--proj-mono);
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--proj-text-2);
        }

        .pw-proj__status-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--status-color, var(--proj-red));
          box-shadow: 0 0 0 2px color-mix(in srgb, var(--status-color, var(--proj-red)) 18%, transparent);
          flex-shrink: 0;
        }

        .pw-proj__features { margin-bottom: 1.4rem; }

        .pw-proj__features-label {
          margin: 0 0 0.6rem;
          font-family: var(--proj-mono);
          font-size: 0.62rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--proj-text-3);
        }

        .pw-proj__features-list {
          margin: 0; padding: 0;
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 0.4rem;
        }

        .pw-proj__feature-item {
          display: flex; align-items: center; gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--proj-text-2);
        }

        .pw-proj__feature-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--proj-red);
          opacity: 0.6;
          flex-shrink: 0;
        }

        .pw-proj__stack {
          display: flex; flex-wrap: wrap; gap: 0.5rem;
          margin-top: 0.6rem;
        }

        .pw-proj__stack-tag {
          display: inline-flex; align-items: center;
          padding: 3px 9px;
          border-radius: 5px;
          background: rgba(15,23,42,0.04);
          border: 1px solid var(--proj-border-md);
          font-family: var(--proj-mono);
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--proj-text-2);
        }

        /* ── Visual frame (mock browser) ── */
        .pw-proj__visual-frame {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--proj-border-md);
          box-shadow:
            0 2px 4px rgba(0,0,0,0.04),
            0 16px 48px rgba(0,0,0,0.09),
            inset 0 1px 0 rgba(255,255,255,0.9);
          background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(238,240,244,0.9));
        }

        .pw-proj__visual-bar {
          display: flex; align-items: center; gap: 0.45rem;
          padding: 0.7rem 1rem;
          border-bottom: 1px solid var(--proj-border-md);
          background: rgba(255,255,255,0.85);
        }

        .pw-proj__visual-dot {
          width: 9px; height: 9px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .pw-proj__visual-bar-label {
          flex: 1;
          margin-left: 0.5rem;
          font-family: var(--proj-mono);
          font-size: 0.6rem;
          letter-spacing: 0.08em;
          color: var(--proj-text-3);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .pw-proj__visual-body {
          position: relative;
          padding: 1.25rem;
          min-height: 260px;
          background-image:
            linear-gradient(rgba(15,23,42,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.025) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .pw-proj__visual-header-row {
          display: flex; gap: 0.6rem;
          margin-bottom: 1rem;
        }

        .pw-proj__visual-block {
          height: 22px;
          border-radius: 5px;
          background: rgba(15,23,42,0.1);
        }

        .pw-proj__visual-block--wide  { flex: 2; }
        .pw-proj__visual-block--narrow { flex: 0 0 72px; }
        .pw-proj__visual-block--medium { flex: 1; }

        .pw-proj__visual-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 0.6rem;
          margin-bottom: 1rem;
        }

        .pw-proj__visual-card {
          padding: 0.7rem;
          border-radius: 8px;
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(15,23,42,0.06);
        }

        .pw-proj__visual-card-icon {
          width: 22px; height: 22px;
          border-radius: 6px;
          background: rgba(200,30,30,0.1);
          border: 1px solid rgba(200,30,30,0.14);
          margin-bottom: 0.55rem;
        }

        .pw-proj__visual-card-line {
          height: 5px;
          border-radius: 3px;
          background: rgba(15,23,42,0.08);
          margin-bottom: 0.3rem;
        }

        .pw-proj__visual-card-line--short { width: 60%; }

        .pw-proj__visual-footer-row {
          display: flex; gap: 0.6rem;
        }

        .pw-proj__visual-index {
          position: absolute;
          bottom: 1rem; right: 1.2rem;
          font-family: var(--proj-mono);
          font-size: 2.5rem;
          font-weight: 700;
          letter-spacing: -0.05em;
          color: rgba(200,30,30,0.07);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        /* ── Cards ── */
        .pw-proj__card-grid {
          display: grid;
          gap: 1px;
          background: var(--proj-border-md);
          border: 1px solid var(--proj-border-md);
          border-radius: var(--proj-r-xl);
          overflow: hidden;
          box-shadow:
            0 1px 3px rgba(0,0,0,0.04),
            0 10px 40px rgba(0,0,0,0.07),
            inset 0 1px 0 rgba(255,255,255,0.7);
        }

        .pw-proj__card-grid--4col {
          grid-template-columns: repeat(4, minmax(0,1fr));
        }

        .pw-proj__card {
          position: relative;
          padding: 2.1rem 2rem 1.8rem;
          background: var(--proj-surface);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: default;
        }

        .pw-proj__card::before {
          content: "";
          position: absolute; inset: 0;
          background: radial-gradient(120px circle at 100% 100%, rgba(200,30,30,0.075) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 300ms ease;
          pointer-events: none;
        }

        .pw-proj__card::after {
          content: "";
          position: absolute; top: 0; left: 0;
          width: 64px; height: 64px;
          background: linear-gradient(135deg, rgba(100,116,139,0.055) 0%, transparent 60%);
          pointer-events: none;
        }

        .pw-proj__card:hover { background: #fafbfe; }
        .pw-proj__card:hover::before { opacity: 1; }

        .pw-proj__card-shimmer {
          position: absolute; inset-y: 0; left: 0;
          width: 55%;
          background: linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.32) 50%, transparent 100%);
          transform: translateX(-115%);
          pointer-events: none;
          z-index: 2;
        }

        .pw-proj__card:hover .pw-proj__card-shimmer {
          animation: projCardShimmer 580ms ease-in-out;
        }

        @keyframes projCardShimmer {
          from { transform: translateX(-115%); }
          to   { transform: translateX(115%); }
        }

        .pw-proj__card-texture {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(100,116,139,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,116,139,0.035) 1px, transparent 1px);
          background-size: 22px 22px;
          pointer-events: none;
          mask-image: linear-gradient(145deg, rgba(0,0,0,0.45) 0%, transparent 55%);
        }

        .pw-proj__card-icon {
          width: 44px; height: 44px;
          border-radius: var(--proj-r-md);
          display: grid; place-items: center;
          color: var(--proj-red);
          background: linear-gradient(145deg, rgba(200,30,30,0.08), rgba(200,30,30,0.04));
          border: 1px solid var(--proj-red-border);
          transition: background 250ms ease, border-color 250ms ease;
        }

        .pw-proj__card:hover .pw-proj__card-icon {
          background: linear-gradient(145deg, rgba(200,30,30,0.13), rgba(200,30,30,0.07));
          border-color: rgba(200,30,30,0.28);
        }

        .pw-proj__card-title {
          font-size: 1.125rem; font-weight: 700;
          letter-spacing: -0.028em;
          color: var(--proj-text-1);
          margin: 0 0 0.6rem; line-height: 1.22;
          position: relative; z-index: 1;
        }

        .pw-proj__card-desc {
          font-size: 0.905rem; line-height: 1.72;
          color: var(--proj-text-2);
          position: relative; z-index: 1;
        }

        .pw-proj__impact-index {
          font-family: var(--proj-mono);
          font-size: 0.64rem; letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--proj-red);
          margin-bottom: 1.4rem;
          position: relative; z-index: 1;
          display: flex; align-items: center; gap: 0.65rem;
        }

        .pw-proj__impact-index::after {
          content: "";
          flex: 1; height: 1px;
          background: linear-gradient(90deg, rgba(200,30,30,0.4), rgba(15,23,42,0.05));
        }

        /* ── Stats ── */
        .pw-proj__stat-value {
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 1;
          color: var(--proj-text-1);
          margin-bottom: 0.5rem;
          position: relative; z-index: 1;
        }

        .pw-proj__stat-label {
          font-family: var(--proj-mono);
          font-size: 0.65rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--proj-text-3);
          position: relative; z-index: 1;
        }

        /* ── Process ── */
        .pw-proj__deliver-list { display: grid; gap: 1.25rem; }

        .pw-proj__deliver-step {
          display: grid;
          grid-template-columns: 96px minmax(0,1fr);
          gap: 1.25rem;
          padding: 1.4rem 0 1.6rem;
          border-top: 1px solid rgba(15,23,42,0.09);
        }

        .pw-proj__deliver-meta {
          display: flex; flex-direction: column;
          align-items: flex-start; gap: 0.85rem;
          padding-top: 0.15rem;
        }

        .pw-proj__deliver-number {
          font-family: var(--proj-mono);
          font-size: 0.76rem; font-weight: 700;
          letter-spacing: 0.18em;
          color: rgba(15,23,42,0.3);
        }

        .pw-proj__deliver-line {
          width: 1px; flex: 1; min-height: 48px;
          background: linear-gradient(to bottom, rgba(200,30,30,0.95), rgba(200,30,30,0));
        }

        .pw-proj__deliver-body {
          display: grid; gap: 0.65rem; max-width: 42rem;
        }

        /* ── CTA ── */
        .pw-proj__cta-inner {
          display: grid;
          grid-template-columns: minmax(0,1fr) auto;
          gap: clamp(1.5rem, 4vw, 3rem);
          align-items: end;
          padding: clamp(1.6rem, 2vw, 2rem);
          border-radius: 30px;
          border: 1px solid var(--proj-border-md);
          background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(245,246,248,0.92));
          box-shadow: 0 18px 44px rgba(15,23,42,0.06);
        }

        .pw-proj__cta-actions {
          display: flex; align-items: center;
          gap: 0.9rem; flex-wrap: wrap;
        }

        .pw-proj__cta-primary {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; justify-content: center;
          min-height: 48px; padding: 12px 24px;
          border-radius: var(--proj-r-sm);
          border: none;
          background: var(--proj-red);
          color: #fff;
          box-shadow: 0 14px 26px rgba(196,30,36,0.2);
          cursor: pointer; text-decoration: none;
          font-size: 0.82rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          white-space: nowrap;
          transition: background 220ms ease, box-shadow 220ms ease, transform 220ms ease;
        }

        .pw-proj__cta-primary:hover {
          background: var(--proj-red-hover);
          transform: translateY(-2px);
          box-shadow: 0 18px 30px rgba(196,30,36,0.24);
        }

        .pw-proj__cta-shimmer {
          position: absolute; inset: 0;
          width: 45%;
          background: linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
          transform: translateX(-120%);
          pointer-events: none;
        }

        .pw-proj__cta-primary:hover .pw-proj__cta-shimmer {
          animation: projCtaSweep 900ms ease;
        }

        @keyframes projCtaSweep {
          0%   { transform: translateX(-120%); }
          100% { transform: translateX(260%); }
        }

        .pw-proj__cta-content {
          position: relative; z-index: 1;
          display: inline-flex; align-items: center; gap: 0.5rem;
        }

        .pw-proj__btn-ghost {
          min-height: 48px; padding: 12px 20px;
          border-radius: var(--proj-r-sm);
          border: 1px solid var(--proj-border-md);
          background: rgba(255,255,255,0.82);
          color: var(--proj-text-1); text-decoration: none;
          font-size: 0.82rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          display: inline-flex; align-items: center; gap: 0.55rem;
          white-space: nowrap;
          transition: transform 220ms ease, border-color 220ms ease, color 220ms ease;
        }

        .pw-proj__btn-ghost:hover {
          transform: translateY(-2px);
          border-color: rgba(196,30,36,0.2);
          color: var(--proj-red);
        }

        /* ── Reveal ── */
        [data-reveal] {
          opacity: 0;
          transition: opacity 700ms cubic-bezier(0.16,1,0.3,1);
        }

        [data-reveal].is-visible { opacity: 1; }

        @media (prefers-reduced-motion: reduce) {
          [data-reveal] { opacity: 1 !important; transition: none !important; }
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .pw-proj__grid-hero,
          .pw-proj__grid-editorial,
          .pw-proj__cta-inner {
            grid-template-columns: 1fr;
          }

          .pw-proj__card-grid--4col {
            grid-template-columns: repeat(2, minmax(0,1fr));
          }

          .pw-proj__container { width: calc(100% - 2.5rem); }
        }

        @media (max-width: 860px) {
          .pw-proj__section--hero {
            padding-top: 160px;
            padding-bottom: 72px;
          }

          .pw-proj__grid-hero {
            grid-template-columns: 1fr;
            gap: 40px;
            justify-items: center;
            text-align: center;
          }

          .pw-proj__grid-hero > div:first-child {
            display: flex; flex-direction: column; align-items: center;
          }

          .pw-proj__topology {
            max-width: 480px; width: 100%;
            min-height: 360px;
          }

          .pw-proj__heading { font-size: clamp(2.1rem, 6vw, 2.7rem); }

          .pw-proj__project-row {
            flex-direction: column !important;
            gap: 2rem;
          }
        }

        @media (max-width: 720px) {
          .pw-proj__section--hero { padding-top: 190px; }

          .pw-proj__section { padding: clamp(4rem, 9vw, 5.5rem) 0; }

          .pw-proj__card-grid--4col {
            grid-template-columns: 1fr;
          }

          .pw-proj__features-list {
            grid-template-columns: 1fr;
          }

          .pw-proj__cta-actions {
            width: 100%; flex-direction: column; align-items: stretch;
          }

          .pw-proj__cta-primary,
          .pw-proj__btn-ghost {
            width: 100%; justify-content: center;
          }

          .pw-proj__deliver-step {
            grid-template-columns: 1fr; gap: 0.9rem;
          }

          .pw-proj__deliver-meta {
            flex-direction: row; align-items: center;
          }

          .pw-proj__deliver-line {
            width: 56px; min-height: 1px; flex: none;
            background: linear-gradient(to right, rgba(200,30,30,0.95), rgba(200,30,30,0));
          }

          .pw-proj__container { width: calc(100% - 2rem); }
        }

        @media (max-width: 480px) {
          .pw-proj__section--hero { padding-top: 210px; }
          .pw-proj__section { padding: 3.5rem 0; }
          .pw-proj__heading { font-size: 1.9rem; }

          .pw-proj__lead,
          .pw-proj__body-large { font-size: 0.9rem; }

          .pw-proj__card { padding: 1.8rem 1.5rem 1.7rem; }
          .pw-proj__cta-inner { gap: 1.5rem; }
          .pw-proj__container { width: calc(100% - 1.5rem); }
        }
      `}</style>
    </div>
  );
}
