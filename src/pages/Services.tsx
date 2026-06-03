// src/pages/Services.tsx

import { useEffect, useRef } from "react";
import {
  Settings2,
  Workflow,
  Layers,
  Plug,
  Cpu,
  Globe,
  GraduationCap,
  Briefcase,
  Truck,
  Users,
  Building2,
  TrendingUp,
  Eye,
  Network,
  Zap,
} from "lucide-react";
import servicesHero from "../assets/scale.jpg";

export default function Services() {
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
      { threshold: 0.08 },
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const reveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const services = [
    {
      index: "01",
      icon: <Settings2 size={20} strokeWidth={1.6} />,
      title: "Operational Software Systems",
      desc: "Custom platforms designed to improve operational visibility, execution, and day-to-day management across organizations.",
      examples: [
        "Internal business systems",
        "Campus operations platforms",
        "Administrative systems",
        "Service management systems",
      ],
      tag: "Operations",
    },
    {
      index: "02",
      icon: <Workflow size={20} strokeWidth={1.6} />,
      title: "Workflow Automation",
      desc: "Automation systems designed to eliminate repetitive processes and improve consistency across operational workflows.",
      examples: [
        "Approval workflows",
        "Escalation systems",
        "Task routing",
        "Process automation",
      ],
      tag: "Automation",
    },
    {
      index: "03",
      icon: <Layers size={20} strokeWidth={1.6} />,
      title: "Platform Engineering",
      desc: "Scalable digital platforms that connect users, services, workflows, and operational processes.",
      examples: [
        "Service platforms",
        "Marketplaces",
        "Customer portals",
        "Multi-user systems",
      ],
      tag: "Platforms",
    },
    {
      index: "04",
      icon: <Plug size={20} strokeWidth={1.6} />,
      title: "Systems Integration",
      desc: "Connecting software, data sources, APIs, and operational tools into unified ecosystems.",
      examples: [
        "API integrations",
        "Payment systems",
        "CRM integrations",
        "Third-party services",
      ],
      tag: "Integration",
    },
    {
      index: "05",
      icon: <Cpu size={20} strokeWidth={1.6} />,
      title: "Connected Infrastructure Solutions",
      desc: "Software systems that interact with devices, sensors, monitoring systems, and operational infrastructure.",
      examples: [
        "IoT systems",
        "Monitoring dashboards",
        "Telemetry platforms",
        "Smart infrastructure",
      ],
      tag: "Infrastructure",
    },
    {
      index: "06",
      icon: <Globe size={20} strokeWidth={1.6} />,
      title: "Business Websites & Digital Platforms",
      desc: "Professional digital experiences that strengthen visibility, engagement, and business growth.",
      examples: [
        "Corporate websites",
        "Organisation websites",
        "E-commerce systems",
        "Information portals",
      ],
      tag: "Digital",
    },
  ];

  const industries = [
    {
      icon: <GraduationCap size={20} strokeWidth={1.6} />,
      title: "Education",
      desc: "Campus management, student coordination, administrative systems, and institutional platforms.",
    },
    {
      icon: <Briefcase size={20} strokeWidth={1.6} />,
      title: "Service Businesses",
      desc: "Service management, booking systems, customer workflows, and operational platforms.",
    },
    {
      icon: <Truck size={20} strokeWidth={1.6} />,
      title: "Logistics & Transport",
      desc: "Fleet coordination, tracking systems, dispatch workflows, and operational visibility tools.",
    },
    {
      icon: <Users size={20} strokeWidth={1.6} />,
      title: "Community Organisations",
      desc: "Member management, coordination systems, communication platforms, and engagement tools.",
    },
    {
      icon: <Building2 size={20} strokeWidth={1.6} />,
      title: "SMEs",
      desc: "Operational systems designed to help growing businesses manage processes and teams effectively.",
    },
    {
      icon: <TrendingUp size={20} strokeWidth={1.6} />,
      title: "Growing Enterprises",
      desc: "Scalable infrastructure, workflow automation, and connected systems for organisations in growth phases.",
    },
  ];

  const impact = [
    {
      icon: <Eye size={22} strokeWidth={1.6} />,
      title: "Better Visibility",
      desc: "Clearer insight into operations, performance, and workflow status across the entire organisation.",
    },
    {
      icon: <Network size={22} strokeWidth={1.6} />,
      title: "Better Coordination",
      desc: "Stronger alignment across teams, departments, and operational workflows through connected systems.",
    },
    {
      icon: <Zap size={22} strokeWidth={1.6} />,
      title: "Better Execution",
      desc: "Improved efficiency, consistency, and outcomes through purpose-built operational software.",
    },
  ];

  return (
    <div className="pw-services">
      <div className="pw-about__bg-grid" />
      <div className="pw-about__bg-fade" />
      <div className="pw-top-rule" />

      {/* ── SECTION 1: HERO ── */}
      <section className="pw-section pw-section--hero">
        <div className="container-custom">
          <div className="pw-grid-hero">
            <div ref={reveal} data-reveal>
              <div className="pw-eyebrow">
                <span className="pw-eyebrow-dot pw-eyebrow-dot--pulse" />
                Services
              </div>
              <h1 className="pw-heading pw-heading--hero">
                Engineering Software For <mark>Better Operations.</mark>
              </h1>
              <p className="pw-lead" style={{ marginTop: "1.4rem" }}>
                Pedzaworks Digital Solutions designs operational software
                systems, workflow platforms, and connected infrastructure that
                help organisations improve visibility, coordination, automation,
                and execution.
              </p>
            </div>

            {/* Right: Operational systems illustration */}
            <div
              ref={reveal}
              data-reveal
              className="pw-image-shell pw-image-shell--hero"
            >
              <img
                src={servicesHero}
                alt="Operational software systems connecting workflows, platforms, and infrastructure"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: PHILOSOPHY ── */}
      <section className="pw-section pw-section--soft">
        <div className="container-custom">
          <div className="pw-grid-editorial">
            <div ref={reveal} data-reveal>
              <div className="pw-eyebrow">
                <span className="pw-eyebrow-dot" />
                Our Approach
              </div>
              <h2 className="pw-heading">
                Technology Built Around <mark>Operations.</mark>
              </h2>
              <div className="pw-divider" style={{ marginTop: "1.5rem" }}>
                <span className="pw-divider-line" />
                <span className="pw-divider-label">Philosophy</span>
                <span className="pw-divider-line" />
              </div>
            </div>
            <div ref={reveal} data-reveal>
              <p className="pw-body-large">
                We don't begin with technologies. We begin with operational
                challenges, workflow inefficiencies, coordination gaps, and
                opportunities for automation.
              </p>
              <p className="pw-body-large">
                Our role is to design software systems that help organisations
                operate more effectively — not to deliver generic digital
                products, but to build purposeful infrastructure aligned with
                how your organisation actually works.
              </p>
              <p className="pw-body-large">
                Every system we build is designed around people, processes, and
                decisions — so that technology becomes an operational asset, not
                an overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CORE SERVICES ── */}
      <section className="pw-section">
        <div className="container-custom">
          <div ref={reveal} data-reveal className="pw-section-title">
            <div className="pw-eyebrow">
              <span className="pw-eyebrow-dot" />
              Core Services
            </div>
            <h2 className="pw-heading">What We Help Organisations Build</h2>
            <p className="pw-lead">
              Every organisation operates differently. Our services are designed
              to help businesses, institutions, and growing organisations build
              software systems that improve how they operate.
            </p>
          </div>
          <div
            className="pw-card-grid pw-card-grid--3col"
            ref={reveal as any}
            data-reveal
          >
            {services.map((s) => (
              <article key={s.index} className="pw-card">
                <span className="pw-card-shimmer" />
                <div className="pw-card-texture" />
                <div className="pw-card-top">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.1rem",
                    }}
                  >
                    <div className="pw-card-icon">{s.icon}</div>
                    <span
                      style={{
                        fontFamily: "var(--co-mono)",
                        fontSize: "0.62rem",
                        letterSpacing: "0.18em",
                        color: "var(--co-text-3)",
                        textTransform: "uppercase",
                      }}
                    >
                      {s.index}
                    </span>
                  </div>
                  <h3 className="pw-card-title">{s.title}</h3>
                  <p className="pw-card-desc">{s.desc}</p>
                </div>
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--co-border)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <ul
                    style={{
                      margin: "0 0 1rem",
                      padding: 0,
                      listStyle: "none",
                      display: "grid",
                      gap: "0.35rem",
                    }}
                  >
                    {s.examples.map((ex, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          fontFamily: "var(--co-mono)",
                          fontSize: "0.64rem",
                          letterSpacing: "0.08em",
                          color: "var(--co-text-3)",
                          textTransform: "uppercase",
                        }}
                      >
                        <span
                          style={{
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            background: "var(--co-red)",
                            flexShrink: 0,
                            opacity: 0.6,
                          }}
                        />
                        {ex}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="pw-card-footer"
                    style={{ paddingTop: 0, marginTop: 0, borderTop: "none" }}
                  >
                    <span className="pw-card-tag">{s.tag}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: INDUSTRIES ── */}
      <section className="pw-section">
        <div className="container-custom">
          <div ref={reveal} data-reveal className="pw-section-title">
            <div className="pw-eyebrow">
              <span className="pw-eyebrow-dot" />
              Industries
            </div>
            <h2 className="pw-heading">Organisations We Support</h2>
            <p className="pw-lead">
              Operational challenges exist across every sector. We help
              organisations build systems that improve visibility, coordination,
              and execution.
            </p>
          </div>
          <div
            className="pw-card-grid pw-card-grid--3col"
            ref={reveal as any}
            data-reveal
          >
            {industries.map((ind, i) => (
              <article key={i} className="pw-card">
                <span className="pw-card-shimmer" />
                <div className="pw-card-texture" />
                <div className="pw-card-top">
                  <div
                    className="pw-card-icon"
                    style={{ marginBottom: "1.1rem" }}
                  >
                    {ind.icon}
                  </div>
                  <h3 className="pw-card-title">{ind.title}</h3>
                  <p className="pw-card-desc">{ind.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHY PEDZAWORKS ── */}
      <section className="pw-section pw-section--soft">
        <div className="container-custom">
          <div ref={reveal} data-reveal className="pw-section-title">
            <div className="pw-eyebrow">
              <span className="pw-eyebrow-dot" />
              Why Pedzaworks
            </div>
            <h2 className="pw-heading">
              Built Around <mark>Operational Thinking.</mark>
            </h2>
            <p className="pw-lead">
              Technology alone does not solve operational challenges. Effective
              systems are built around people, workflows, decisions, and
              execution.
            </p>
          </div>
          <div
            className="pw-card-grid pw-card-grid--impact"
            ref={reveal as any}
            data-reveal
          >
            {impact.map((item, i) => (
              <article key={i} className="pw-card">
                <span className="pw-card-shimmer" />
                <div className="pw-card-texture" />
                <div className="pw-impact-index">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="pw-card-top">
                  <div
                    className="pw-card-icon"
                    style={{ marginBottom: "1.1rem" }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="pw-card-title">{item.title}</h3>
                  <p className="pw-card-desc">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* ── Core tokens — identical to About.tsx ── */
        .pw-services {
          --co-red:        #c81e1e;
          --co-red-hover:  #e03131;
          --co-red-border: rgba(200,30,30,0.18);
          --co-surface:    #ffffff;
          --co-bg:         #f3f6fa;
          --co-border:     rgba(15,23,42,0.07);
          --co-border-md:  rgba(15,23,42,0.10);
          --co-text-1:     #0c1220;
          --co-text-2:     #3d4f6b;
          --co-text-3:     #7a8ba3;
          --co-mono:       "DM Mono", "Fira Mono", monospace;
          --co-r-sm:       8px;
          --co-r-md:       12px;
          --co-r-lg:       16px;
          --co-r-xl:       20px;

          position: relative;
          background: linear-gradient(160deg, #edf1f7 0%, #f3f6fa 55%, #eef1f6 100%);
          isolation: isolate;
          overflow-x: hidden;
        }

        .pw-services .pw-about__bg-grid {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(100,116,139,0.065) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,116,139,0.065) 1px, transparent 1px);
          background-size: 64px 64px;
          pointer-events: none;
          mask-image: linear-gradient(180deg,
            transparent 0%,
            rgba(0,0,0,0.45) 12%,
            rgba(0,0,0,0.9) 32%,
            rgba(0,0,0,0.9) 68%,
            transparent 100%
          );
          z-index: 0;
        }

        .pw-services .pw-about__bg-fade {
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 65% 45% at 8% 108%,  rgba(200,30,30,0.07)  0%, transparent 70%),
            radial-gradient(ellipse 55% 48% at 96% -5%, rgba(200,30,30,0.055) 0%, transparent 68%),
            radial-gradient(ellipse 40% 30% at 60% 105%, rgba(100,116,139,0.06) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        .pw-services > * {
          position: relative;
          z-index: 1;
        }

        .pw-services .pw-top-rule {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(200,30,30,0.22) 25%,
            rgba(200,30,30,0.36) 50%,
            rgba(200,30,30,0.22) 75%,
            transparent
          );
        }

        .pw-services .container-custom {
          max-width: 1280px;
          width: min(1280px, calc(100% - 3rem));
          margin-inline: auto;
        }

        /* ── Sections ── */
        .pw-services .pw-section {
          padding: clamp(5rem, 8vw, 7rem) 0;
        }

        .pw-services .pw-section--hero {
          padding-top: 230px;
          padding-bottom: 80px;
        }

        .pw-services .pw-section--soft {
          background: linear-gradient(180deg, rgba(255,255,255,0.5), rgba(249,250,251,0.4));
          border-top: 1px solid var(--co-border-md);
          border-bottom: 1px solid var(--co-border-md);
        }

        /* ── Eyebrow ── */
        .pw-services .pw-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 5px 13px 5px 9px;
          border-radius: var(--co-r-sm);
          background: rgba(200,30,30,0.055);
          border: 1px solid var(--co-red-border);
          color: var(--co-red);
          font-family: var(--co-mono);
          font-size: 0.64rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 1.15rem;
        }

        .pw-services .pw-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--co-red);
          box-shadow: 0 0 0 3px rgba(200,30,30,0.18);
          flex-shrink: 0;
        }

        .pw-services .pw-eyebrow-dot--pulse {
          animation: pwKickerPulse 1.8s ease-in-out infinite;
        }

        @keyframes pwKickerPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.35); }
        }

        /* ── Typography ── */
        .pw-services .pw-heading {
          margin: 0 0 1.15rem;
          font-size: 40px;
          line-height: 1.02;
          letter-spacing: -0.045em;
          color: var(--co-text-1);
        }

        .pw-services .pw-heading mark {
          background: none;
          color: var(--co-red);
        }

        .pw-services .pw-heading--hero {
          font-size: 40px;
          letter-spacing: -0.05em;
          line-height: 0.97;
          max-width: 13ch;
        }

        .pw-services .pw-lead {
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.82;
          color: var(--co-text-2);
          max-width: 42rem;
        }

        .pw-services .pw-section-title {
          margin-bottom: clamp(2rem, 4vw, 3rem);
          max-width: 44rem;
        }

        .pw-services .pw-body-large {
          margin: 0 0 1rem;
          color: var(--co-text-2);
          line-height: 1.86;
          font-size: 1.02rem;
        }

        .pw-services .pw-body-large:last-child { margin-bottom: 0; }

        /* ── Divider ── */
        .pw-services .pw-divider {
          display: flex; align-items: center; gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .pw-services .pw-divider-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, var(--co-border-md) 40%, var(--co-border-md) 60%, transparent);
        }

        .pw-services .pw-divider-label {
          font-family: var(--co-mono);
          font-size: 0.61rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--co-text-3);
          white-space: nowrap;
        }

        /* ── Grids ── */
        .pw-services .pw-grid-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
          gap: clamp(2rem, 4vw, 4.5rem);
          align-items: center;
        }

        .pw-services .pw-grid-editorial {
          display: grid;
          grid-template-columns: minmax(240px, 0.8fr) minmax(0, 1.2fr);
          gap: clamp(2rem, 5vw, 5rem);
          align-items: flex-start;
        }

        /* ── Topology visual ── */
        .pw-services .pw-topology {
          position: relative;
          min-height: 480px;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid var(--co-border-md);
          box-shadow:
            0 1px 2px rgba(0,0,0,0.04),
            0 8px 32px rgba(0,0,0,0.08),
            inset 0 1px 0 rgba(255,255,255,0.85);
          background:
            radial-gradient(circle at top right, rgba(196,30,36,0.09), transparent 24%),
            linear-gradient(180deg, rgba(255,255,255,0.92), rgba(238,240,244,0.88));
        }

        .pw-services .pw-topology::before {
          content: "";
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px);
          background-size: 36px 36px;
          opacity: 0.7;
        }

        .pw-services .pw-node {
          position: absolute;
          width: 12px; height: 12px;
          border-radius: 999px;
          background: #fff;
          border: 2px solid var(--co-red);
          box-shadow: 0 0 0 10px rgba(196,30,36,0.06);
        }

        .pw-services .pw-node--a { top: 14%; left: 20%; }
        .pw-services .pw-node--b { top: 26%; right: 18%; }
        .pw-services .pw-node--c { top: 44%; left: 42%; }
        .pw-services .pw-node--d { top: 60%; left: 16%; }
        .pw-services .pw-node--e { bottom: 20%; right: 24%; }
        .pw-services .pw-node--f { bottom: 12%; left: 35%; }

        .pw-services .pw-link {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, rgba(196,30,36,0.55), rgba(15,23,42,0.12));
          transform-origin: left center;
        }

        .pw-services .pw-link--1 { top: 17%; left: 22%; width: 50%; transform: rotate(11deg); }
        .pw-services .pw-link--2 { top: 30%; left: 44%; width: 22%; transform: rotate(56deg); }
        .pw-services .pw-link--3 { top: 47%; left: 18%; width: 26%; transform: rotate(-8deg); }
        .pw-services .pw-link--4 { top: 55%; left: 43%; width: 38%; transform: rotate(22deg); }
        .pw-services .pw-link--5 { bottom: 22%; left: 17%; width: 52%; transform: rotate(4deg); }
        .pw-services .pw-link--6 { top: 46%; left: 43%; width: 22%; transform: rotate(-28deg); }

        .pw-services .pw-panel {
          position: absolute;
          border: 1px solid rgba(15,23,42,0.08);
          border-radius: 22px;
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(8px);
          box-shadow: 0 18px 40px rgba(15,23,42,0.08);
        }

        .pw-services .pw-panel--primary {
          top: 10%; right: 8%;
          width: min(260px, 70%);
          padding: 1rem 1rem 1.1rem;
        }

        .pw-services .pw-panel--secondary {
          left: 7%; bottom: 9%;
          width: min(210px, 55%);
          padding: 1rem;
        }

        .pw-services .pw-panel-header {
          display: flex; align-items: center; gap: 0.55rem;
          margin-bottom: 1rem;
          font-family: var(--co-mono);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          color: var(--co-text-3);
          text-transform: uppercase;
        }

        .pw-services .pw-panel-dot {
          width: 8px; height: 8px;
          border-radius: 999px;
          background: var(--co-red);
          box-shadow: 0 0 0 6px rgba(196,30,36,0.08);
        }

        .pw-services .pw-metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 0.75rem;
        }

        .pw-services .pw-metrics small {
          display: block;
          margin-bottom: 0.35rem;
          font-family: var(--co-mono);
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--co-text-3);
        }

        .pw-services .pw-metrics strong {
          display: block;
          font-size: 1.35rem;
          line-height: 1;
          color: var(--co-text-1);
        }

        /* ── Card system ── */
        .pw-services .pw-card-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1px;
          background: var(--co-border-md);
          border: 1px solid var(--co-border-md);
          border-radius: var(--co-r-xl);
          overflow: hidden;
          box-shadow:
            0 1px 3px rgba(0,0,0,0.04),
            0 10px 40px rgba(0,0,0,0.07),
            inset 0 1px 0 rgba(255,255,255,0.7);
        }

        .pw-services .pw-card-grid--3col {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .pw-services .pw-card-grid--impact {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .pw-services .pw-card {
          position: relative;
          padding: 2.1rem 2rem 1.8rem;
          background: var(--co-surface);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: default;
        }

        .pw-services .pw-card::before {
          content: "";
          position: absolute; inset: 0;
          background: radial-gradient(120px circle at 100% 100%, rgba(200,30,30,0.075) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 300ms ease;
          pointer-events: none;
        }

        .pw-services .pw-card::after {
          content: "";
          position: absolute; top: 0; left: 0;
          width: 64px; height: 64px;
          background: linear-gradient(135deg, rgba(100,116,139,0.055) 0%, transparent 60%);
          pointer-events: none;
        }

        .pw-services .pw-card:hover { background: #fafbfe; }
        .pw-services .pw-card:hover::before { opacity: 1; }

        .pw-services .pw-card-shimmer {
          position: absolute;
          inset-y: 0; left: 0;
          width: 55%;
          background: linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.32) 50%, transparent 100%);
          transform: translateX(-115%);
          pointer-events: none;
          z-index: 2;
        }

        .pw-services .pw-card:hover .pw-card-shimmer {
          animation: pwCardShimmer 580ms ease-in-out;
        }

        @keyframes pwCardShimmer {
          from { transform: translateX(-115%); }
          to   { transform: translateX(115%); }
        }

        .pw-services .pw-card-texture {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(100,116,139,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,116,139,0.035) 1px, transparent 1px);
          background-size: 22px 22px;
          pointer-events: none;
          mask-image: linear-gradient(145deg, rgba(0,0,0,0.45) 0%, transparent 55%);
        }

        .pw-services .pw-card-top {
          margin-bottom: 1.65rem;
          position: relative; z-index: 1;
        }

        .pw-services .pw-card-icon {
          width: 44px; height: 44px;
          border-radius: var(--co-r-md);
          display: grid; place-items: center;
          color: var(--co-red);
          background: linear-gradient(145deg, rgba(200,30,30,0.08), rgba(200,30,30,0.04));
          border: 1px solid var(--co-red-border);
          transition: background 250ms ease, border-color 250ms ease;
        }

        .pw-services .pw-card:hover .pw-card-icon {
          background: linear-gradient(145deg, rgba(200,30,30,0.13), rgba(200,30,30,0.07));
          border-color: rgba(200,30,30,0.28);
        }

        .pw-services .pw-card-title {
          font-size: 1.125rem;
          font-weight: 700;
          letter-spacing: -0.028em;
          color: var(--co-text-1);
          margin: 0 0 0.6rem;
          line-height: 1.22;
          position: relative; z-index: 1;
        }

        .pw-services .pw-card-desc {
          font-size: 0.905rem;
          line-height: 1.72;
          color: var(--co-text-2);
          position: relative; z-index: 1;
        }

        .pw-services .pw-card-footer {
          display: flex; align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding-top: 1.2rem; margin-top: 1.35rem;
          border-top: 1px solid var(--co-border);
          position: relative; z-index: 1;
        }

        .pw-services .pw-card-tag {
          display: inline-flex; align-items: center;
          padding: 3px 9px;
          border-radius: 5px;
          background: rgba(15,23,42,0.04);
          border: 1px solid var(--co-border-md);
          font-family: var(--co-mono);
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--co-text-2);
          transition: background 240ms ease, border-color 240ms ease, color 240ms ease;
        }

        .pw-services .pw-card:hover .pw-card-tag {
          background: rgba(200,30,30,0.05);
          border-color: var(--co-red-border);
          color: var(--co-red);
        }

        .pw-services .pw-impact-index {
          font-family: var(--co-mono);
          font-size: 0.64rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--co-red);
          margin-bottom: 1.4rem;
          position: relative; z-index: 1;
          display: flex; align-items: center; gap: 0.65rem;
        }

        .pw-services .pw-impact-index::after {
          content: "";
          flex: 1; height: 1px;
          background: linear-gradient(90deg, rgba(200,30,30,0.4), rgba(15,23,42,0.05));
        }

        /* ── Process / Deliver steps ── */
        .pw-services .pw-deliver-list {
          display: grid;
          gap: 1.25rem;
        }

        .pw-services .pw-deliver-step {
          display: grid;
          grid-template-columns: 96px minmax(0, 1fr);
          gap: 1.25rem;
          padding: 1.4rem 0 1.6rem;
          border-top: 1px solid rgba(15,23,42,0.09);
        }

        .pw-services .pw-deliver-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.85rem;
          padding-top: 0.15rem;
        }

        .pw-services .pw-deliver-number {
          font-family: var(--co-mono);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: rgba(15,23,42,0.3);
        }

        .pw-services .pw-deliver-line {
          width: 1px; flex: 1; min-height: 48px;
          background: linear-gradient(to bottom, rgba(200,30,30,0.95), rgba(200,30,30,0));
        }

        .pw-services .pw-deliver-body {
          display: grid;
          gap: 0.65rem;
          max-width: 42rem;
        }

        /* ── CTA section ── */
        .pw-services .pw-cta-inner {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: clamp(1.5rem, 4vw, 3rem);
          align-items: end;
          padding: clamp(1.6rem, 2vw, 2rem);
          border-radius: 30px;
          border: 1px solid var(--co-border-md);
          background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(245,246,248,0.92));
          box-shadow: 0 18px 44px rgba(15,23,42,0.06);
        }

        .pw-services .pw-cta-actions {
          display: flex; align-items: center;
          gap: 0.9rem; flex-wrap: wrap;
        }

        .pw-services .pw-cta-primary {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; justify-content: center;
          min-height: 48px; min-width: 220px;
          padding: 12px 24px;
          border-radius: var(--co-r-sm);
          border: none;
          background: var(--co-red);
          color: #fff;
          box-shadow: 0 14px 26px rgba(196,30,36,0.2);
          cursor: pointer; text-decoration: none;
          font-size: 0.82rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          transition: background 220ms ease, box-shadow 220ms ease, transform 220ms ease;
          white-space: nowrap;
        }

        .pw-services .pw-cta-primary:hover {
          background: var(--co-red-hover);
          transform: translateY(-2px);
          box-shadow: 0 18px 30px rgba(196,30,36,0.24);
        }

        .pw-services .pw-cta-primary-shimmer {
          position: absolute; inset: 0;
          width: 45%;
          background: linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
          transform: translateX(-120%);
          pointer-events: none;
        }

        .pw-services .pw-cta-primary:hover .pw-cta-primary-shimmer {
          animation: pwCtaSweep 900ms ease;
        }

        @keyframes pwCtaSweep {
          0%   { transform: translateX(-120%); }
          100% { transform: translateX(260%); }
        }

        .pw-services .pw-cta-primary-content {
          position: relative; z-index: 1;
          display: inline-flex; align-items: center; gap: 0.5rem;
        }

        .pw-services .pw-btn-ghost {
          min-height: 48px; padding: 12px 20px;
          border-radius: var(--co-r-sm);
          border: 1px solid var(--co-border-md);
          background: rgba(255,255,255,0.82);
          color: var(--co-text-1); text-decoration: none;
          font-size: 0.82rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          display: inline-flex; align-items: center; gap: 0.55rem;
          white-space: nowrap;
          transition: transform 220ms ease, border-color 220ms ease, color 220ms ease;
        }

        .pw-services .pw-btn-ghost:hover {
          transform: translateY(-2px);
          border-color: rgba(196,30,36,0.2);
          color: var(--co-red);
        }

        /* ── Reveal animations ── */
        [data-reveal] {
          opacity: 0;
          transition: opacity 700ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        [data-reveal].is-visible { opacity: 1; }

        @media (prefers-reduced-motion: reduce) {
          [data-reveal] { opacity: 1 !important; transition: none !important; }
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .pw-services .pw-grid-hero,
          .pw-services .pw-grid-editorial,
          .pw-services .pw-cta-inner {
            grid-template-columns: 1fr;
          }

          .pw-services .pw-card-grid--3col {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pw-services .pw-card-grid--impact {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .pw-services .container-custom {
            width: calc(100% - 2.5rem);
          }
        }

        @media (max-width: 860px) {
          .pw-services .pw-section--hero {
            padding-top: 150px;
            padding-bottom: 72px;
          }

          .pw-services .pw-grid-hero {
            grid-template-columns: 1fr;
            gap: 40px;
            justify-items: center;
            text-align: center;
          }

          .pw-services .pw-grid-hero > div:first-child {
            display: flex; flex-direction: column; align-items: center;
          }

          .pw-services .pw-topology {
            max-width: 480px;
            width: 100%;
            min-height: 360px;
          }

          .pw-services .pw-heading {
            font-size: clamp(2.1rem, 6vw, 2.7rem);
          }

          .pw-services .pw-lead {
            font-size: 0.98rem;
          }
        }

        @media (max-width: 720px) {

          .pw-services .pw-card-grid--3col,
          .pw-services .pw-card-grid--impact {
            grid-template-columns: 1fr;
          }

          .pw-services .pw-cta-actions {
            width: 100%; flex-direction: column; align-items: stretch;
          }

          .pw-services .pw-cta-primary,
          .pw-services .pw-btn-ghost {
            width: 100%; justify-content: center;
          }

          .pw-services .pw-deliver-step {
            grid-template-columns: 1fr;
            gap: 0.9rem;
          }

          .pw-services .pw-deliver-meta {
            flex-direction: row; align-items: center;
          }

          .pw-services .pw-deliver-line {
            width: 56px; min-height: 1px; flex: none;
            background: linear-gradient(to right, rgba(200,30,30,0.95), rgba(200,30,30,0));
          }

          .pw-services .container-custom {
            width: calc(100% - 2rem);
          }
        }


       
        .pw-services .pw-image-shell {
            position: relative;
            border-radius: 28px;
            overflow: hidden;
            border: 1px solid var(--co-border-md);
            box-shadow:
                0 1px 2px rgba(0,0,0,0.04),
                0 8px 32px rgba(0,0,0,0.08),
                inset 0 1px 0 rgba(255,255,255,0.85);
            background:
                radial-gradient(circle at top right, rgba(196,30,36,0.09), transparent 24%),
                linear-gradient(180deg, rgba(255,255,255,0.96), rgba(238,240,244,0.9));
            }

            .pw-services .pw-image-shell--hero {
            min-height: 320px;
            }

            /* Optional subtle grid overlay to mimic topology */
            .pw-services .pw-image-shell::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px);
            background-size: 36px 36px;
            opacity: 0.7;
            pointer-events: none;
            }

            .pw-services .pw-image-shell img {
            position: relative;
            z-index: 1;
            display: block;
            width: 100%;
            height: auto;
            max-height: 100%;
            object-fit: contain;
            }

            /* Responsive tweaks */
            @media (max-width: 860px) {
            .pw-services .pw-image-shell--hero {
                max-width: 420px;
                margin-inline: auto;
                min-height: 260px;
            }
            }

            @media (max-width: 480px) {
            .pw-services .pw-image-shell--hero {
                min-height: 0;
            }
            }
      `}</style>
    </div>
  );
}
