// src/components/WhyPedzaworksSection.tsx

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyPedzaworksSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.7 },
        scrollTrigger: {
          trigger: el,
          start: "top 78%",
          once: true,
        },
      });

      tl.from("[data-wp-kicker]", { y: 12, autoAlpha: 0 }, 0)
        .from("[data-wp-heading]", { y: 20, autoAlpha: 0 }, 0.08)
        .from("[data-wp-body]", { y: 18, autoAlpha: 0 }, 0.16)
        .from("[data-wp-block]", { y: 22, autoAlpha: 0, stagger: 0.08 }, 0.26);
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .pw-wp {
          position: relative;
          overflow: hidden;
          background: radial-gradient(circle at top left,#f9fafb 0%,#f3f4f7 50%,#eef2f7 100%);
          isolation: isolate;
        }

        .pw-wp .container-custom {
          max-width: 1280px;
          width: min(1280px, calc(100% - 3rem));
          margin: 0 auto;
        }

        .pw-wp__bg-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(148,163,184,0.06) 1px,transparent 1px),
            linear-gradient(90deg,rgba(148,163,184,0.06) 1px,transparent 1px);
          background-size: 80px 80px;
          mask-image: linear-gradient(180deg,
            transparent 0%,
            rgba(0,0,0,0.5) 18%,
            rgba(0,0,0,0.85) 55%,
            rgba(0,0,0,0.5) 82%,
            transparent 100%);
          opacity: 0.65;
        }

        .pw-wp__inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
          gap: 3.25rem;
          align-items: flex-start;
        }

        /* subtle vertical bridge between columns */
        .pw-wp__bridge {
          position: absolute;
          left: 50%;
          top: 6%;
          bottom: 8%;
          width: 1px;
          background: linear-gradient(
            to bottom,
            rgba(148,163,184,0),
            rgba(148,163,184,0.35) 18%,
            rgba(148,163,184,0.2) 60%,
            rgba(148,163,184,0) 100%
          );
          opacity: 0.55;
          pointer-events: none;
        }

        /* left column */
        .pw-wp__left {
          position: relative;
          max-width: 640px;
        }

        .pw-wp__kicker {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 5px 13px 5px 9px;
          border-radius: 999px;
          background: rgba(200,30,30,0.045);
          border: 1px solid rgba(200,30,30,0.16);
          color: var(--pw-red);
          font-family: "DM Mono", monospace;
          font-size: 0.64rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .pw-wp__kicker-dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: var(--pw-red);
          box-shadow: 0 0 0 3px rgba(200,30,30,0.18);
        }

        .pw-wp__heading {
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 1.05;
          margin-bottom: 1rem;
          color: var(--pw-text-primary);
        }

        .pw-wp__body {
          font-size: 1.02rem;
          line-height: 1.85;
          color: var(--pw-text-secondary);
          max-width: 36rem;
        }

        /* meta strip + subtle baseline */
        .pw-wp__meta-wrapper {
          margin-top: 1.9rem;
          padding-top: 1.2rem;
          border-top: 1px solid rgba(148,163,184,0.28);
          position: relative;
        }

        .pw-wp__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1.1rem 1.75rem;
          font-size: 0.8rem;
          color: var(--pw-text-muted);
          font-family: "DM Mono", monospace;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .pw-wp__meta-item {
          position: relative;
          padding-left: 1.15rem;
          white-space: nowrap;
        }

        .pw-wp__meta-item::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: var(--pw-red);
          box-shadow: 0 0 0 3px rgba(200,30,30,0.18);
        }

        /* small image occupying lower-left whitespace */
        .pw-wp__image-shell {
          margin-top: 1.6rem;
          display: inline-flex;
          align-items: center;
          padding: 0.55rem 0.7rem;
          border-radius: 999px;
          border: none;
          background: radial-gradient(circle at left,#f9fafb 0,#f3f4f7 42%,transparent 100%);
          backdrop-filter: blur(4px);
        }

        .pw-wp__image-shell img {
          display: block;
          width: 520px;
          height: auto;
          object-fit: cover;
          opacity: 0.9;
          margin-left: 40px;
          margin-top: -40px;
        }

        /* right column */
        .pw-wp__right {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
        }

        .pw-wp__principles {
          position: relative;
          padding: 1.95rem 1.9rem 2.1rem;
          border-radius: 18px;
          border: 1px solid rgba(15,23,42,0.06);
          background:
            radial-gradient(circle at top right,rgba(248,113,113,0.065) 0,transparent 55%),
            rgba(248,250,252,0.92);
          box-shadow:
            0 18px 60px rgba(15,23,42,0.12),
            inset 0 1px 0 rgba(255,255,255,0.95);
        }

        .pw-wp__principles::before {
          content: "";
          position: absolute;
          inset: 16px 14px;
          border-radius: 14px;
          border: 1px dashed rgba(148,163,184,0.35);
          opacity: 0.9;
          pointer-events: none;
        }

        .pw-wp__topology {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            radial-gradient(circle at 0 0, rgba(15,23,42,0.12) 0, transparent 55%),
            linear-gradient(120deg,rgba(148,163,184,0.32) 0,transparent 40%),
            linear-gradient(300deg,rgba(148,163,184,0.18) 10%,transparent 55%);
          mix-blend-mode: multiply;
          opacity: 0.14;
        }

        .pw-wp__list {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 1.35rem;
          z-index: 1;
        }

        .pw-wp__item {
          position: relative;
          padding-bottom: 1.1rem;
          border-bottom: 1px solid rgba(148,163,184,0.28);
        }

        .pw-wp__item:last-of-type {
          border-bottom: none;
          padding-bottom: 0;
        }

        .pw-wp__item-label {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.55rem;
          font-family: "DM Mono", monospace;
          font-size: 0.67rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--pw-text-muted);
        }

        .pw-wp__item-dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: rgba(15,23,42,0.9);
        }

        .pw-wp__item-title {
          font-size: 0.98rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          margin-bottom: 0.25rem;
          color: var(--pw-text-primary);
        }

        .pw-wp__item-body {
          font-size: 0.9rem;
          line-height: 1.7;
          color: var(--pw-text-secondary);
        }

        .pw-wp__rail {
          position: absolute;
          right: 18px;
          top: 20px;
          bottom: 20px;
          width: 2px;
          background: linear-gradient(to bottom,rgba(148,163,184,0.2),rgba(148,163,184,0.6));
          opacity: 0.75;
        }

        .pw-wp__rail-node {
          position: absolute;
          right: -4px;
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #f9fafb;
          border: 2px solid rgba(148,163,184,0.85);
        }

        .pw-wp__rail-node:nth-of-type(1) { top: 10%; }
        .pw-wp__rail-node:nth-of-type(2) { top: 36%; }
        .pw-wp__rail-node:nth-of-type(3) { top: 63%; }
        .pw-wp__rail-node:nth-of-type(4) { top: 88%; }

        /* hover – restrained */
        .pw-wp__item:hover .pw-wp__item-title {
          color: var(--pw-red);
        }

        /* responsive */


        /* responsive */
        @media (max-width: 1100px) {
        .pw-wp__inner {
            grid-template-columns: minmax(0, 1fr);
            gap: 3rem;
        }

        .pw-wp__bridge {
            display: none;
        }

        .pw-wp__right {
            max-width: 640px;
        }

        .pw-wp__image-shell {
            margin-top: 1.3rem;
        }
        }

        @media (max-width: 680px) {
        .pw-wp .container-custom {
            width: calc(100% - 2rem);
        }

        .pw-wp__heading {
            font-size: clamp(1.9rem, 7vw, 2.2rem);
        }

        .pw-wp__principles {
            padding: 1.5rem 1.4rem 1.6rem;
        }

        .pw-wp__rail {
            display: none;
        }

        /* hide topology image on mobile */
        .pw-wp__image-shell {
            display: none;
        }
        }

        @media (max-width: 1100px) {
          .pw-wp__inner {
            grid-template-columns: minmax(0, 1fr);
            gap: 3rem;
          }

          .pw-wp__bridge {
            display: none;
          }

          .pw-wp__right {
            max-width: 640px;
          }

          .pw-wp__image-shell {
            margin-top: 1.3rem;
          }
        }

        @media (max-width: 680px) {
          .pw-wp .container-custom {
            width: calc(100% - 2rem);
          }

          .pw-wp__heading {
            font-size: clamp(1.9rem, 7vw, 2.2rem);
          }

          .pw-wp__principles {
            padding: 1.5rem 1.4rem 1.6rem;
          }

          .pw-wp__rail {
            display: none;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="pw-wp section-padding"
        aria-labelledby="why-pedzaworks-heading"
      >
        <div className="pw-wp__bg-grid" aria-hidden="true" />
        <div className="container-custom pw-wp__inner">
          <div className="pw-wp__bridge" aria-hidden="true" />

          {/* Left column */}
          <div className="pw-wp__left">
            <div className="pw-wp__kicker" data-wp-kicker>
              <span className="pw-wp__kicker-dot" />
              Engineering Philosophy
            </div>

            <h2
              id="why-pedzaworks-heading"
              className="pw-wp__heading"
              data-wp-heading
            >
              Built Around Operational Thinking.
            </h2>

            <p className="pw-wp__body" data-wp-body>
              We approach software as infrastructure — designing platforms,
              workflows, and connected systems that improve operational
              visibility, coordination, automation, and intelligent
              decision-making.
            </p>

            <div className="pw-wp__meta-wrapper">
              <div className="pw-wp__image-shell">
                <img
                  src="/topo.png"
                  alt="Operational topology illustration"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="pw-wp__right">
            <div className="pw-wp__principles">
              <div className="pw-wp__topology" aria-hidden="true" />
              <div className="pw-wp__rail" aria-hidden="true">
                <span className="pw-wp__rail-node" />
                <span className="pw-wp__rail-node" />
                <span className="pw-wp__rail-node" />
                <span className="pw-wp__rail-node" />
              </div>

              <div className="pw-wp__list">
                <article className="pw-wp__item" data-wp-block>
                  <div className="pw-wp__item-label">
                    <span className="pw-wp__item-dot" />
                    01 · Software-first engineering
                  </div>
                  <h3 className="pw-wp__item-title">
                    Software-first engineering
                  </h3>
                  <p className="pw-wp__item-body">
                    We build scalable digital systems designed around workflows,
                    operations, and long-term adaptability.
                  </p>
                </article>

                <article className="pw-wp__item" data-wp-block>
                  <div className="pw-wp__item-label">
                    <span className="pw-wp__item-dot" />
                    02 · Connected systems thinking
                  </div>
                  <h3 className="pw-wp__item-title">
                    Connected systems thinking
                  </h3>
                  <p className="pw-wp__item-body">
                    Our platforms are designed to integrate users, data,
                    devices, and operational processes into unified ecosystems.
                  </p>
                </article>

                <article className="pw-wp__item" data-wp-block>
                  <div className="pw-wp__item-label">
                    <span className="pw-wp__item-dot" />
                    03 · Operational intelligence
                  </div>
                  <h3 className="pw-wp__item-title">
                    Operational intelligence
                  </h3>
                  <p className="pw-wp__item-body">
                    We focus on visibility, coordination, automation, and
                    real-time operational efficiency.
                  </p>
                </article>

                <article className="pw-wp__item" data-wp-block>
                  <div className="pw-wp__item-label">
                    <span className="pw-wp__item-dot" />
                    04 · Infrastructure-oriented architecture
                  </div>
                  <h3 className="pw-wp__item-title">
                    Infrastructure-oriented architecture
                  </h3>
                  <p className="pw-wp__item-body">
                    Every system is built with scalability, integration, and
                    future operational growth in mind.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyPedzaworksSection;
