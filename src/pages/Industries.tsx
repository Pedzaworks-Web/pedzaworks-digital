// src/pages/Industries.tsx

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  Truck,
  Building2,
  Users,
  Cpu,
  CheckCircle2,
  Monitor,
  Wifi,
  BarChart3,
  Activity,
} from "lucide-react";

// ── Image imports ─────────────────────────────────────────────────────────────
// Replace these paths with your actual asset paths
import heroImage from "../assets/indu_hero.jpg";
import eduImage from "../assets/education.jpg";
import servicesImage from "../assets/service.jpg";
import logisticsImage from "../assets/logistic.jpg";
import smesImage from "../assets/msme.jpg";
import communityImage from "../assets/comm.jpg";

const industries = [
  {
    id: "education",
    nav: "Education",
    icon: <GraduationCap size={18} strokeWidth={1.6} />,
    index: "01",
    label: "EDUCATION",
    title: "Education & Institutions",
    image: eduImage,
    description:
      "Educational institutions depend on coordinated workflows, clear communication, and operational systems that keep administrators, staff, and students connected. We build platforms that improve how institutions operate day to day.",
    challenges: [
      "Communication gaps across departments",
      "Administrative inefficiencies",
      "Fragmented reporting systems",
      "Manual workflow management",
      "Poor operational visibility",
    ],
    solutions: [
      "Campus operations platforms",
      "Student management systems",
      "Workflow automation",
      "Reporting infrastructure",
      "Administrative dashboards",
    ],
  },
  {
    id: "services",
    nav: "Service Businesses",
    icon: <Briefcase size={18} strokeWidth={1.6} />,
    index: "02",
    label: "SERVICE BUSINESSES",
    title: "Service Businesses",
    image: servicesImage,
    description:
      "Service businesses rely on precise scheduling, coordination between field teams, and real-time customer communication. We design platforms that bring visibility and control to every stage of service delivery.",
    challenges: [
      "Scheduling and dispatch challenges",
      "Customer coordination gaps",
      "Poor service visibility",
      "Manual job tracking",
      "Disconnected field operations",
    ],
    solutions: [
      "Service management platforms",
      "Technician dispatch systems",
      "Customer portals",
      "Workflow automation",
      "Operational dashboards",
    ],
  },
  {
    id: "logistics",
    nav: "Logistics & Transport",
    icon: <Truck size={18} strokeWidth={1.6} />,
    index: "03",
    label: "LOGISTICS & TRANSPORT",
    title: "Logistics & Transport",
    image: logisticsImage,
    description:
      "Logistics operations demand real-time visibility, precise coordination, and systems that keep fleets, dispatchers, and customers in sync. We build operational infrastructure that makes logistics more predictable and efficient.",
    challenges: [
      "Fleet visibility limitations",
      "Operational coordination gaps",
      "Dispatch management complexity",
      "Manual tracking systems",
      "Reporting inefficiencies",
    ],
    solutions: [
      "Logistics management platforms",
      "Operational visibility dashboards",
      "Fleet tracking systems",
      "Dispatch coordination tools",
      "Reporting infrastructure",
    ],
  },
  {
    id: "smes",
    nav: "SMEs",
    icon: <Building2 size={18} strokeWidth={1.6} />,
    index: "04",
    label: "SMEs & GROWING BUSINESSES",
    title: "SMEs & Growing Businesses",
    image: smesImage,
    description:
      "Growing businesses outgrow manual processes quickly. We design internal software systems that give SMEs the operational infrastructure to scale confidently without adding unnecessary overhead.",
    challenges: [
      "Manual, repetitive workflows",
      "Disconnected internal systems",
      "Poor operational visibility",
      "Lack of automation",
      "Scaling without structure",
    ],
    solutions: [
      "Internal business platforms",
      "Operational dashboards",
      "Process automation systems",
      "Business management tools",
      "Connected data infrastructure",
    ],
  },
  {
    id: "community",
    nav: "Community Organizations",
    icon: <Users size={18} strokeWidth={1.6} />,
    index: "05",
    label: "COMMUNITY ORGANIZATIONS",
    title: "Community Organizations",
    image: communityImage,
    description:
      "Community organizations depend on clear communication, engaged members, and organized administration. We build digital platforms that keep communities informed, connected, and operationally effective.",
    challenges: [
      "Communication inconsistencies",
      "Member engagement gaps",
      "Administrative overhead",
      "Information sharing challenges",
      "Event and program coordination",
    ],
    solutions: [
      "Community engagement platforms",
      "Member management portals",
      "Communication systems",
      "Content and event management",
      "Administrative automation",
    ],
  },
];

export default function Industries() {
  const revealRefs = useRef<HTMLElement[]>([]);
  const [activeIndustry, setActiveIndustry] = useState("education");

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
      { threshold: 0.06 },
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const reveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <div className="pw-ind">
      <div className="pw-ind__bg-grid" />
      <div className="pw-ind__bg-fade" />
      <div className="pw-ind__top-rule" />

      {/* ── SECTION 1: HERO — split layout with image right ── */}
      <section className="pw-ind__hero">
        <div className="pw-ind__container">
          <div className="pw-ind__hero-row">
            {/* Left: content */}
            <div ref={reveal} data-reveal className="pw-ind__hero-content">
              <div className="pw-ind__eyebrow">
                <span className="pw-ind__eyebrow-dot pw-ind__eyebrow-dot--pulse" />
                Industries
              </div>
              <h1 className="pw-ind__hero-heading">
                Solutions Built Around How <mark>Organizations Operate.</mark>
              </h1>
              <p className="pw-ind__hero-lead">
                Different industries face different challenges, but operational
                excellence always depends on visibility, coordination,
                execution, and connected systems.
              </p>
              <div className="pw-ind__hero-divider">
                <span className="pw-ind__hero-divider-line" />
                <span className="pw-ind__hero-divider-dot" />
                <span className="pw-ind__hero-divider-line" />
              </div>

              {/* Stats under the divider */}
              <div className="pw-ind__hero-stats">
                {[
                  { val: "05+", label: "Industries Served" },
                  { val: "20+", label: "Operational Workflows" },
                  { val: "100%", label: "Systems Thinking" },
                ].map((s, i) => (
                  <div key={i} className="pw-ind__hero-stat">
                    <span className="pw-ind__hero-stat-val">{s.val}</span>
                    <span className="pw-ind__hero-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image */}
            <div ref={reveal} data-reveal className="pw-ind__hero-img-wrap">
              <div className="pw-ind__hero-img-shell">
                <img
                  src={heroImage}
                  alt="Operational systems across industries"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Subtle background nodes */}
        <div className="pw-ind__hero-infra" aria-hidden="true">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="pw-ind__infra-node"
              style={{
                top: `${[18, 32, 55, 70, 22, 48, 62, 38][i]}%`,
                left: `${[8, 18, 6, 14, 88, 82, 92, 76][i]}%`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* ── SECTION 2: INDUSTRY NAVIGATOR ── */}
      <section className="pw-ind__nav-section">
        <div className="pw-ind__container">
          <div ref={reveal} data-reveal className="pw-ind__nav-label">
            <span className="pw-ind__divider-line" />
            <span className="pw-ind__divider-text">Select an industry</span>
            <span className="pw-ind__divider-line" />
          </div>
          <div ref={reveal} data-reveal className="pw-ind__navigator">
            {industries.map((ind) => (
              <button
                key={ind.id}
                className={`pw-ind__nav-item${activeIndustry === ind.id ? " pw-ind__nav-item--active" : ""}`}
                onClick={() => setActiveIndustry(ind.id)}
                type="button"
              >
                <span className="pw-ind__nav-icon">{ind.icon}</span>
                <span className="pw-ind__nav-title">{ind.nav}</span>
                <span className="pw-ind__nav-indicator" />
              </button>
            ))}
            <button
              className={`pw-ind__nav-item${activeIndustry === "infra" ? " pw-ind__nav-item--active" : ""}`}
              onClick={() => setActiveIndustry("infra")}
              type="button"
            >
              <span className="pw-ind__nav-icon">
                <Cpu size={18} strokeWidth={1.6} />
              </span>
              <span className="pw-ind__nav-title">
                Connected Infrastructure
              </span>
              <span className="pw-ind__nav-indicator" />
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: INDUSTRY SHOWCASES ── */}
      {industries.map((ind, i) => {
        const isReverse = i % 2 !== 0;
        return (
          <section
            key={ind.id}
            id={ind.id}
            className={`pw-ind__showcase${i % 2 === 0 ? "" : " pw-ind__showcase--soft"}`}
          >
            <div className="pw-ind__container">
              <div
                className="pw-ind__showcase-row"
                style={{ flexDirection: isReverse ? "row-reverse" : "row" }}
              >
                {/* Content */}
                <div ref={reveal} data-reveal className="pw-ind__showcase-body">
                  <div className="pw-ind__showcase-index-label">
                    {ind.label}
                  </div>
                  <h2 className="pw-ind__showcase-title">{ind.title}</h2>
                  <p className="pw-ind__showcase-desc">{ind.description}</p>

                  <div className="pw-ind__showcase-cols">
                    <div>
                      <p className="pw-ind__col-label">Challenges</p>
                      <ul className="pw-ind__item-list">
                        {ind.challenges.map((c, ci) => (
                          <li key={ci} className="pw-ind__item">
                            <span className="pw-ind__item-dot pw-ind__item-dot--challenge" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="pw-ind__col-label">Solutions</p>
                      <ul className="pw-ind__item-list">
                        {ind.solutions.map((s, si) => (
                          <li key={si} className="pw-ind__item">
                            <CheckCircle2
                              size={13}
                              strokeWidth={2}
                              style={{
                                color: "var(--ind-red)",
                                flexShrink: 0,
                                marginTop: 1,
                              }}
                            />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a href="/contact" className="pw-ind__cta-outline">
                    Discuss {ind.nav}
                    <ArrowRight size={14} strokeWidth={2.2} />
                  </a>
                </div>

                {/* ── REAL IMAGE visual ── */}
                <div
                  ref={reveal}
                  data-reveal
                  className="pw-ind__showcase-visual"
                >
                  <div className="pw-ind__showcase-number" aria-hidden="true">
                    {ind.index}
                  </div>
                  <div className="pw-ind__showcase-img-shell">
                    <img
                      src={ind.image}
                      alt={`${ind.title} operational platform`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── SECTION 4: CONNECTED INFRASTRUCTURE ── */}
      <section id="infra" className="pw-ind__infra-section">
        <div className="pw-ind__infra-bg" aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="pw-ind__infra-ring"
              style={{
                width: `${80 + i * 60}px`,
                height: `${80 + i * 60}px`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
        <div className="pw-ind__container">
          <div ref={reveal} data-reveal className="pw-ind__infra-inner">
            <div className="pw-ind__eyebrow pw-ind__eyebrow--light">
              <span className="pw-ind__eyebrow-dot pw-ind__eyebrow-dot--light" />
              Connected Infrastructure
            </div>
            <h2 className="pw-ind__infra-heading">Beyond Software.</h2>
            <p className="pw-ind__infra-lead">
              Pedzaworks also explores opportunities at the intersection of
              software, IoT, monitoring systems, telemetry, and connected
              infrastructure — building systems that bridge the physical and
              digital operational world.
            </p>
            <div className="pw-ind__infra-grid">
              {[
                {
                  icon: <Monitor size={20} strokeWidth={1.6} />,
                  title: "Smart Monitoring",
                  desc: "Real-time visibility dashboards connected to operational environments and infrastructure.",
                },
                {
                  icon: <Wifi size={20} strokeWidth={1.6} />,
                  title: "IoT Integration",
                  desc: "Software systems that connect and interpret data from sensors, devices, and physical infrastructure.",
                },
                {
                  icon: <Activity size={20} strokeWidth={1.6} />,
                  title: "Telemetry Platforms",
                  desc: "Operational data streams organized into actionable, real-time system insights.",
                },
                {
                  icon: <BarChart3 size={20} strokeWidth={1.6} />,
                  title: "Connected Ecosystems",
                  desc: "Infrastructure-aware platforms that help organizations see and act on operational data in real time.",
                },
              ].map((item, i) => (
                <div key={i} className="pw-ind__infra-card">
                  <div className="pw-ind__infra-card-icon">{item.icon}</div>
                  <h3 className="pw-ind__infra-card-title">{item.title}</h3>
                  <p className="pw-ind__infra-card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CTA ── */}
      <section className="pw-ind__section">
        <div className="pw-ind__container">
          <div ref={reveal} data-reveal>
            <div className="pw-ind__cta-inner">
              <div>
                <div className="pw-ind__eyebrow">
                  <span className="pw-ind__eyebrow-dot pw-ind__eyebrow-dot--pulse" />
                  Start A Conversation
                </div>
                <h2
                  className="pw-ind__heading"
                  style={{ marginBottom: "0.75rem" }}
                >
                  Let's Build Something Around <mark>Your Operations.</mark>
                </h2>
                <p className="pw-ind__lead" style={{ maxWidth: "38rem" }}>
                  Whether you're in education, logistics, services, community
                  development, or a completely different industry, Pedzaworks
                  can help transform operational challenges into intelligent
                  digital systems.
                </p>
              </div>
              <div className="pw-ind__cta-actions">
                <a href="#contact" className="pw-ind__cta-primary">
                  <span className="pw-ind__cta-shimmer" />
                  <span className="pw-ind__cta-content">
                    Discuss Your Project
                    <ArrowRight size={15} strokeWidth={2.2} />
                  </span>
                </a>
                <a href="#schedule" className="pw-ind__btn-ghost">
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
        .pw-ind {
          --ind-red:        #c81e1e;
          --ind-red-hover:  #e03131;
          --ind-red-border: rgba(200,30,30,0.18);
          --ind-surface:    #ffffff;
          --ind-border:     rgba(15,23,42,0.07);
          --ind-border-md:  rgba(15,23,42,0.10);
          --ind-text-1:     #0c1220;
          --ind-text-2:     #3d4f6b;
          --ind-text-3:     #7a8ba3;
          --ind-mono:       "DM Mono", "Fira Mono", monospace;
          --ind-r-sm:       8px;
          --ind-r-md:       12px;
          --ind-r-lg:       16px;
          --ind-r-xl:       20px;

          position: relative;
          background: linear-gradient(160deg, #edf1f7 0%, #f3f6fa 55%, #eef1f6 100%);
          isolation: isolate;
          overflow-x: hidden;
        }

        [id] {
  scroll-margin-top: 50px;
}

        /* ── Backgrounds ── */
        .pw-ind__bg-grid {
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

        .pw-ind__bg-fade {
          position: fixed; inset: 0;
          background:
            radial-gradient(ellipse 65% 45% at 8% 108%,  rgba(200,30,30,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 55% 48% at 96% -5%,  rgba(200,30,30,0.055) 0%, transparent 68%),
            radial-gradient(ellipse 40% 30% at 60% 105%, rgba(100,116,139,0.06) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        .pw-ind > * { position: relative; z-index: 1; }

        .pw-ind__top-rule {
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg,
            transparent,
            rgba(200,30,30,0.22) 25%,
            rgba(200,30,30,0.36) 50%,
            rgba(200,30,30,0.22) 75%,
            transparent);
        }

        /* ── Container ── */
        .pw-ind__container {
          max-width: 1280px;
          width: min(1280px, calc(100% - 3rem));
          margin-inline: auto;
        }

        .pw-ind__section {
          padding: clamp(5rem, 8vw, 7rem) 0;
        }

        /* ── Eyebrow ── */
        .pw-ind__eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 5px 13px 5px 9px;
          border-radius: var(--ind-r-sm);
          background: rgba(200,30,30,0.055);
          border: 1px solid var(--ind-red-border);
          color: var(--ind-red);
          font-family: var(--ind-mono);
          font-size: 0.64rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 1.15rem;
        }

        .pw-ind__eyebrow--light {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.22);
          color: rgba(255,255,255,0.9);
        }

        .pw-ind__eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--ind-red);
          box-shadow: 0 0 0 3px rgba(200,30,30,0.18);
          flex-shrink: 0;
        }

        .pw-ind__eyebrow-dot--light {
          background: rgba(255,255,255,0.9);
          box-shadow: 0 0 0 3px rgba(255,255,255,0.18);
        }

        .pw-ind__eyebrow-dot--pulse {
          animation: indPulse 1.8s ease-in-out infinite;
        }

        @keyframes indPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.35); }
        }

        /* ── Typography ── */
        .pw-ind__heading {
          margin: 0 0 1.15rem;
          font-size: 40px;
          line-height: 1.02;
          letter-spacing: -0.045em;
          color: var(--ind-text-1);
        }

        .pw-ind__heading mark { background: none; color: var(--ind-red); }

        .pw-ind__lead {
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.82;
          color: var(--ind-text-2);
          max-width: 42rem;
        }

        .pw-ind__body-large {
          margin: 0 0 1rem;
          color: var(--ind-text-2);
          line-height: 1.86;
          font-size: 1.02rem;
        }

        .pw-ind__body-large:last-child { margin-bottom: 0; }

        /* ── HERO ── */
        .pw-ind__hero {
          position: relative;
          padding-top: 200px;
          padding-bottom: 96px;
          overflow: hidden;
        }

        .pw-ind__hero-row {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
          gap: clamp(2.5rem, 5vw, 5rem);
          align-items: center;
        }

        .pw-ind__hero-content {
          position: relative; z-index: 1;
        }

        .pw-ind__hero-heading {
          margin: 0 0 1.4rem;
          font-size: 40px;
          line-height: 0.97;
          letter-spacing: -0.05em;
          color: var(--ind-text-1);
        }

        .pw-ind__hero-heading mark { background: none; color: var(--ind-red); }

        .pw-ind__hero-lead {
          margin: 0 0 2rem;
          font-size: clamp(1rem, 1.4vw, 1.1rem);
          line-height: 1.82;
          color: var(--ind-text-2);
          max-width: 38rem;
        }

        .pw-ind__hero-divider {
          display: flex; align-items: center; gap: 1rem;
          width: min(280px, 100%);
          margin-bottom: 1.8rem;
        }

        .pw-ind__hero-divider-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, var(--ind-border-md));
        }

        .pw-ind__hero-divider-line:last-child {
          background: linear-gradient(90deg, var(--ind-border-md), transparent);
        }

        .pw-ind__hero-divider-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--ind-red);
          box-shadow: 0 0 0 3px rgba(200,30,30,0.14);
          flex-shrink: 0;
        }

        .pw-ind__hero-stats {
          display: flex;
          align-items: center;
          gap: clamp(1.5rem, 4vw, 3.5rem);
          flex-wrap: wrap;
          margin-top: 0.75rem;
        }

        .pw-ind__hero-stat {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.3rem;
        }

        .pw-ind__hero-stat-val {
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          color: var(--ind-text-1);
        }

        .pw-ind__hero-stat-label {
          font-family: var(--ind-mono);
          font-size: 0.62rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ind-text-3);
        }

      
        .pw-ind__hero-chips {
          display: flex; flex-wrap: wrap; gap: 0.5rem;
        }

        .pw-ind__hero-chip {
          display: inline-flex; align-items: center; gap: 0.45rem;
          padding: 5px 10px 5px 8px;
          border-radius: 999px;
          background: rgba(255,255,255,0.7);
          border: 1px solid var(--ind-border-md);
          font-family: var(--ind-mono);
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ind-text-2);
          box-shadow: 0 1px 3px rgba(15,23,42,0.05);
        }

        .pw-ind__hero-img-wrap {
          position: relative; z-index: 1;
        }

        .pw-ind__hero-img-shell {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--ind-border-md);
          box-shadow:
            0 2px 4px rgba(0,0,0,0.04),
            0 20px 56px rgba(0,0,0,0.10),
            inset 0 1px 0 rgba(255,255,255,0.9);
          background: linear-gradient(180deg, rgba(255,255,255,0.97), rgba(238,240,244,0.9));
          max-height: 420px;
          overflow: hidden;
        }

        .pw-ind__hero-img-shell::before {
          content: "";
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(15,23,42,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.025) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
          z-index: 1;
        }

        .pw-ind__hero-img-shell img {
          position: relative; z-index: 2;
          display: block; width: 100%;
          height: 420px;
          object-fit: cover;
          object-position: top;
        }

        /* ── Background nodes ── */
        .pw-ind__hero-infra {
          position: absolute; inset: 0;
          pointer-events: none; z-index: 0;
        }

        .pw-ind__infra-node {
          position: absolute;
          width: 10px; height: 10px;
          border-radius: 50%;
          background: transparent;
          border: 1.5px solid rgba(200,30,30,0.25);
          box-shadow: 0 0 0 8px rgba(200,30,30,0.04);
          animation: indNodeBreath 3s ease-in-out infinite;
        }

        @keyframes indNodeBreath {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50%       { opacity: 0.9; transform: scale(1.3); }
        }

        /* ── NAVIGATOR ── */
        .pw-ind__nav-section {
          padding: 0 0 clamp(3.5rem, 5vw, 5rem);
          border-bottom: 1px solid var(--ind-border-md);
        }

        .pw-ind__nav-label {
          display: flex; align-items: center; gap: 1rem;
          margin-bottom: 1.4rem;
        }

        .pw-ind__divider-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, var(--ind-border-md) 40%, var(--ind-border-md) 60%, transparent);
        }

        .pw-ind__divider-text {
          font-family: var(--ind-mono);
          font-size: 0.61rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ind-text-3);
          white-space: nowrap;
        }

        .pw-ind__navigator {
          display: flex; gap: 0;
          background: rgba(255,255,255,0.6);
          border: 1px solid var(--ind-border-md);
          border-radius: var(--ind-r-lg);
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(15,23,42,0.05), inset 0 1px 0 rgba(255,255,255,0.8);
        }

        .pw-ind__nav-item {
          flex: 1;
          display: flex; flex-direction: column;
          align-items: center; gap: 0.55rem;
          padding: 1.1rem 0.75rem 1rem;
          border: none; background: transparent;
          cursor: pointer; position: relative;
          border-right: 1px solid var(--ind-border);
          transition: background 220ms ease;
        }

        .pw-ind__nav-item:last-child { border-right: none; }
        .pw-ind__nav-item:hover { background: rgba(200,30,30,0.03); }
        .pw-ind__nav-item--active { background: rgba(200,30,30,0.055); }

        .pw-ind__nav-icon {
          display: grid; place-items: center;
          width: 36px; height: 36px;
          border-radius: var(--ind-r-sm);
          background: rgba(15,23,42,0.04);
          border: 1px solid var(--ind-border-md);
          color: var(--ind-text-2);
          transition: background 220ms ease, color 220ms ease, border-color 220ms ease;
          flex-shrink: 0;
        }

        .pw-ind__nav-item--active .pw-ind__nav-icon,
        .pw-ind__nav-item:hover .pw-ind__nav-icon {
          background: rgba(200,30,30,0.08);
          border-color: var(--ind-red-border);
          color: var(--ind-red);
        }

        .pw-ind__nav-title {
          font-family: var(--ind-mono);
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ind-text-3);
          text-align: center; line-height: 1.3;
          transition: color 220ms ease;
        }

        .pw-ind__nav-item--active .pw-ind__nav-title,
        .pw-ind__nav-item:hover .pw-ind__nav-title { color: var(--ind-red); }

        .pw-ind__nav-indicator {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--ind-red);
          transform: scaleX(0);
          transition: transform 220ms ease;
          transform-origin: center;
        }

        .pw-ind__nav-item--active .pw-ind__nav-indicator { transform: scaleX(1); }

        /* ── SHOWCASE ── */
        .pw-ind__showcase { padding: clamp(5rem, 8vw, 7rem) 0; }

        .pw-ind__showcase--soft {
          background: linear-gradient(180deg, rgba(255,255,255,0.5), rgba(249,250,251,0.4));
          border-top: 1px solid var(--ind-border-md);
          border-bottom: 1px solid var(--ind-border-md);
        }

        .pw-ind__showcase-row {
          display: flex;
          gap: clamp(2.5rem, 5vw, 6rem);
          align-items: center;
        }

        .pw-ind__showcase-body { flex: 1; min-width: 0; }
        .pw-ind__showcase-visual { flex: 1; min-width: 0; position: relative; }

        .pw-ind__showcase-index-label {
          font-family: var(--ind-mono);
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ind-red);
          margin-bottom: 0.9rem;
          display: flex; align-items: center; gap: 0.65rem;
        }

        .pw-ind__showcase-index-label::before {
          content: "";
          display: inline-block;
          width: 24px; height: 1px;
          background: var(--ind-red);
          opacity: 0.5;
        }

        .pw-ind__showcase-title {
          margin: 0 0 1rem;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          letter-spacing: -0.045em;
          line-height: 1.04;
          color: var(--ind-text-1);
        }

        .pw-ind__showcase-desc {
          margin: 0 0 1.8rem;
          font-size: 1.02rem;
          line-height: 1.82;
          color: var(--ind-text-2);
          max-width: 38rem;
        }

        .pw-ind__showcase-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .pw-ind__col-label {
          margin: 0 0 0.75rem;
          font-family: var(--ind-mono);
          font-size: 0.62rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ind-text-3);
        }

        .pw-ind__item-list { margin: 0; padding: 0; list-style: none; display: grid; gap: 0.5rem; }

        .pw-ind__item {
          display: flex; align-items: flex-start; gap: 0.5rem;
          font-size: 0.875rem; color: var(--ind-text-2); line-height: 1.5;
        }

        .pw-ind__item-dot {
          width: 5px; height: 5px; border-radius: 50%;
          flex-shrink: 0; margin-top: 5px;
        }

        .pw-ind__item-dot--challenge { background: rgba(200,30,30,0.45); }

        .pw-ind__cta-outline {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 10px 18px;
          border-radius: var(--ind-r-sm);
          border: 1px solid var(--ind-red-border);
          background: rgba(200,30,30,0.04);
          color: var(--ind-red); text-decoration: none;
          font-size: 0.78rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          font-family: var(--ind-mono);
          transition: background 220ms ease, transform 220ms ease, border-color 220ms ease;
        }

        .pw-ind__cta-outline:hover {
          background: rgba(200,30,30,0.08);
          border-color: rgba(200,30,30,0.32);
          transform: translateY(-1px);
        }

        /* ── Showcase ghost index number ── */
        .pw-ind__showcase-number {
          position: absolute;
          top: -1.5rem; right: -1rem;
          font-size: clamp(5rem, 10vw, 9rem);
          font-weight: 800;
          letter-spacing: -0.06em;
          line-height: 1;
          color: rgba(200,30,30,0.055);
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }

        /* ── Showcase real image shell ── */
        .pw-ind__showcase-img-shell {
          position: relative; zindex: 1;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid var(--ind-border-md);
          box-shadow:
            0 2px 4px rgba(0,0,0,0.04),
            0 20px 56px rgba(0,0,0,0.09),
            inset 0 1px 0 rgba(255,255,255,0.9);
          background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(238,240,244,0.92));
        }

        .pw-ind__showcase-img-shell::before {
          content: "";
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(15,23,42,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.025) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
          z-index: 1;
        }

        .pw-ind__showcase-img-shell img {
          position: relative; z-index: 2;
          display: block; width: 100%;
          height: auto; object-fit: cover;
        }

        /* ── CONNECTED INFRASTRUCTURE ── */
        .pw-ind__infra-section {
          position: relative;
          padding: clamp(6rem, 10vw, 9rem) 0;
          background: linear-gradient(135deg, #0c1220 0%, #161e30 60%, #0f1824 100%);
          overflow: hidden;
        }

        .pw-ind__infra-bg {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          pointer-events: none;
        }

        .pw-ind__infra-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(200,30,30,0.1);
          animation: indRingPulse 4s ease-in-out infinite;
        }

        @keyframes indRingPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%       { opacity: 0.7; transform: scale(1.04); }
        }

        .pw-ind__infra-inner {
          position: relative; z-index: 1;
          display: flex; flex-direction: column; align-items: center;
          text-align: center;
        }

        .pw-ind__infra-heading {
          margin: 0 0 1.2rem;
          font-size: 40px;
          letter-spacing: -0.05em; line-height: 0.96; color: #fff;
        }

        .pw-ind__infra-lead {
          margin: 0 auto 3rem;
          font-size: 1.05rem; line-height: 1.82;
          color: rgba(255,255,255,0.65); max-width: 46rem;
        }

        .pw-ind__infra-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 1px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--ind-r-xl);
          overflow: hidden; width: 100%; max-width: 900px;
        }

        .pw-ind__infra-card {
          padding: 2rem 1.5rem;
          background: rgba(255,255,255,0.04);
          transition: background 280ms ease;
        }

        .pw-ind__infra-card:hover { background: rgba(200,30,30,0.08); }

        .pw-ind__infra-card-icon {
          display: grid; place-items: center;
          width: 42px; height: 42px;
          border-radius: var(--ind-r-md);
          background: rgba(200,30,30,0.12);
          border: 1px solid rgba(200,30,30,0.2);
          color: rgba(255,80,80,0.9);
          margin: 0 auto 1.1rem;
        }

        .pw-ind__infra-card-title {
          margin: 0 0 0.6rem;
          font-size: 0.95rem; font-weight: 700;
          letter-spacing: -0.02em; color: #fff;
        }

        .pw-ind__infra-card-desc {
          margin: 0; font-size: 0.83rem;
          line-height: 1.7; color: rgba(255,255,255,0.55);
        }

        /* ── UNIVERSAL ── */
        .pw-ind__universal {
          padding: clamp(5rem, 8vw, 7rem) 0;
          border-top: 1px solid var(--ind-border-md);
        }

        .pw-ind__universal-inner {
          display: grid;
          grid-template-columns: minmax(260px, 0.8fr) minmax(0,1.2fr);
          gap: clamp(2rem, 5vw, 5rem);
          align-items: flex-start;
        }

        .pw-ind__universal-heading {
          margin: 0;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          letter-spacing: -0.04em; line-height: 1.06;
          color: var(--ind-text-1);
        }

        .pw-ind__universal-heading mark { background: none; color: var(--ind-red); }
        .pw-ind__universal-right { padding-top: 0.25rem; }

        .pw-ind__cta-ghost {
          display: inline-flex; align-items: center; gap: 0.5rem;
          margin-top: 1.4rem; padding: 10px 18px;
          border-radius: var(--ind-r-sm);
          border: 1px solid var(--ind-border-md);
          background: rgba(255,255,255,0.82);
          color: var(--ind-text-1); text-decoration: none;
          font-size: 0.78rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          transition: transform 220ms ease, border-color 220ms ease, color 220ms ease;
        }

        .pw-ind__cta-ghost:hover {
          transform: translateY(-2px);
          border-color: rgba(200,30,30,0.2);
          color: var(--ind-red);
        }

        /* ── FINAL CTA ── */
        .pw-ind__cta-inner {
          display: grid;
          grid-template-columns: minmax(0,1fr) auto;
          gap: clamp(1.5rem, 4vw, 3rem);
          align-items: end;
          padding: clamp(1.6rem, 2vw, 2rem);
          border-radius: 30px;
          border: 1px solid var(--ind-border-md);
          background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(245,246,248,0.92));
          box-shadow: 0 18px 44px rgba(15,23,42,0.06);
        }

        .pw-ind__cta-actions {
          display: flex; align-items: center;
          gap: 0.9rem; flex-wrap: wrap;
        }

        .pw-ind__cta-primary {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; justify-content: center;
          min-height: 48px; padding: 12px 24px;
          border-radius: var(--ind-r-sm); border: none;
          background: var(--ind-red); color: #fff;
          box-shadow: 0 14px 26px rgba(196,30,36,0.2);
          cursor: pointer; text-decoration: none;
          font-size: 0.82rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          white-space: nowrap;
          transition: background 220ms ease, box-shadow 220ms ease, transform 220ms ease;
        }

        .pw-ind__cta-primary:hover {
          background: var(--ind-red-hover);
          transform: translateY(-2px);
          box-shadow: 0 18px 30px rgba(196,30,36,0.24);
        }

        .pw-ind__cta-shimmer {
          position: absolute; inset: 0; width: 45%;
          background: linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
          transform: translateX(-120%); pointer-events: none;
        }

        .pw-ind__cta-primary:hover .pw-ind__cta-shimmer {
          animation: indCtaSweep 900ms ease;
        }

        @keyframes indCtaSweep {
          0%   { transform: translateX(-120%); }
          100% { transform: translateX(260%); }
        }

        .pw-ind__cta-content {
          position: relative; z-index: 1;
          display: inline-flex; align-items: center; gap: 0.5rem;
        }

        .pw-ind__btn-ghost {
          min-height: 48px; padding: 12px 20px;
          border-radius: var(--ind-r-sm);
          border: 1px solid var(--ind-border-md);
          background: rgba(255,255,255,0.82);
          color: var(--ind-text-1); text-decoration: none;
          font-size: 0.82rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          display: inline-flex; align-items: center; gap: 0.55rem;
          white-space: nowrap;
          transition: transform 220ms ease, border-color 220ms ease, color 220ms ease;
        }

        .pw-ind__btn-ghost:hover {
          transform: translateY(-2px);
          border-color: rgba(196,30,36,0.2);
          color: var(--ind-red);
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
        .pw-ind__hero-row,
        .pw-ind__universal-inner,
        .pw-ind__cta-inner { grid-template-columns: 1fr; }

        .pw-ind__infra-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        .pw-ind__container { width: calc(100% - 2.5rem); }
        }

        /* MOBILE / TABLET */
        @media (max-width: 860px) {
        /* center hero content & stats */
        .pw-ind__hero-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .pw-ind__hero-stats {
            justify-content: center;
            align-items: center;
        }

        .pw-ind__hero-stat {
            align-items: center;
            text-align: center;
        }

        /* shrink hero image on mobile */
        .pw-ind__hero-img-shell {
            max-height: 360px;
        }

        .pw-ind__hero-img-shell img {
            height: 340px;
            object-fit: cover;
            object-position: center top;
            display: none;
        }

        .pw-ind__hero { padding-top: 160px; padding-bottom: 72px; }
        .pw-ind__hero-heading { font-size: clamp(2.4rem, 7vw, 3.2rem); }

        /* Stack showcase, image first then text */
        .pw-ind__showcase-row {
            flex-direction: column !important;
            gap: 2.5rem;
        }
        .pw-ind__showcase-visual { order: 1; }
        .pw-ind__showcase-body   { order: 2; }

        .pw-ind__showcase-number { font-size: 5rem; }
        .pw-ind__showcase-cols { grid-template-columns: 1fr; gap: 1.2rem; }

        .pw-ind__navigator { flex-wrap: wrap; }
        .pw-ind__nav-item { flex: 1 1 calc(33% - 1px); min-width: 0; }
        }

        @media (max-width: 720px) {
        .pw-ind__hero { padding-top: 190px; }
        .pw-ind__showcase { padding: clamp(4rem, 9vw, 5.5rem) 0; }
        .pw-ind__infra-grid { grid-template-columns: 1fr; }

        .pw-ind__cta-actions { width: 100%; flex-direction: column; align-items: stretch; }
        .pw-ind__cta-primary, .pw-ind__btn-ghost { width: 100%; justify-content: center; }

        .pw-ind__nav-item { flex: 1 1 calc(50% - 1px); }
        .pw-ind__container { width: calc(100% - 2rem); }

        /* Hide navigator completely on small screens */
        .pw-ind__nav-section {
            display: none;
        }
        }

        @media (max-width: 480px) {
        .pw-ind__hero { padding-top: 140px; }
        .pw-ind__hero-heading { font-size: 2rem; }
        .pw-ind__nav-item { flex: 1 1 100%; }
        .pw-ind__showcase-title { font-size: 1.6rem; }
        .pw-ind__section { padding: 3.5rem 0; }
        .pw-ind__cta-inner { gap: 1.5rem; }
        .pw-ind__container { width: calc(100% - 1.5rem); }
        }
      `}</style>
    </div>
  );
}
