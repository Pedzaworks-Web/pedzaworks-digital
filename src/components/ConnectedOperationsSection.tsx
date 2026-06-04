// src/components/ConnectedOperationsSection.tsx

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Wifi, Cog, Link2, ActivitySquare, Code2 } from "lucide-react";
import sectionImage from "../assets/connected.jpg";

gsap.registerPlugin(ScrollTrigger);

type Capability = {
  title: string;
  description: string;
  icon: React.ReactNode;
  meta: string;
  tag: string;
};

const capabilities: Capability[] = [
  {
    title: "Software Engineering",
    description:
      "Scalable web platforms, operational systems, APIs, dashboards, and enterprise-grade software solutions.",
    icon: <Code2 size={20} strokeWidth={1.8} />,
    meta: "Core platform logic",
    tag: "Platform",
  },
  {
    title: "Connected Infrastructure Systems",
    description:
      "Smart connected devices, telemetry systems, sensor integration, and intelligent monitoring platforms.",
    icon: <Wifi size={20} strokeWidth={1.8} />,
    meta: "Device-to-cloud telemetry",
    tag: "Telemetry",
  },
  {
    title: "Workflow Automation",
    description:
      "Intelligent workflows, operational automation, and real-time system control solutions.",
    icon: <Cog size={20} strokeWidth={1.8} />,
    meta: "Workflow orchestration",
    tag: "Automation",
  },
  {
    title: "Systems Integration",
    description:
      "Connecting embedded systems, cloud infrastructure, software platforms, and operational data ecosystems.",
    icon: <Link2 size={20} strokeWidth={1.8} />,
    meta: "System interoperability",
    tag: "Integration",
  },
  {
    title: "Operational Visibility",
    description:
      "Live operational visibility through connected dashboards, analytics, and monitoring systems.",
    icon: <ActivitySquare size={20} strokeWidth={1.8} />,
    meta: "Live observability",
    tag: "Observability",
  },
  {
    title: "Intelligent Edge Systems",
    description:
      "Firmware-driven intelligent devices built for communication, control, and connected infrastructure.",
    icon: <Cpu size={20} strokeWidth={1.8} />,
    meta: "Edge intelligence",
    tag: "Edge",
  },
];

const ConnectedOperationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // ── Main entrance timeline ─────────────────────────────
      gsap
        .timeline({
          defaults: { ease: "expo.out", duration: 0.9 },
          scrollTrigger: { trigger: el, start: "top 78%", once: true },
        })
        .fromTo(
          "[data-co-kicker]",
          { y: 14, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 },
          0,
        )
        .fromTo(
          "[data-co-title]",
          { y: 28, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 },
          0.08,
        )
        .fromTo(
          "[data-co-lead]",
          { y: 18, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 },
          0.16,
        )
        .fromTo(
          "[data-co-image]",
          { x: 32, scale: 0.97, autoAlpha: 0 },
          { x: 0, scale: 1, autoAlpha: 1, duration: 1.1, ease: "power3.out" },
          0.2,
        )
        .fromTo(
          "[data-co-divider]",
          { scaleX: 0, autoAlpha: 0 },
          { scaleX: 1, autoAlpha: 1, duration: 0.65, ease: "power3.out" },
          0.38,
        )
        .fromTo(
          "[data-co-card]",
          { y: 32, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.07 },
          0.46,
        );

      // ── Scroll parallax on image ───────────────────────────
      gsap.to("[data-co-image]", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      // ── Subtle upward drift on the entire header copy ──────
      gsap.to("[data-co-header-copy]", {
        yPercent: -3,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      // ── Card icon micro-scale on scroll enter ──────────────
      gsap.utils.toArray<HTMLElement>("[data-co-card]").forEach((card, i) => {
        const icon = card.querySelector<HTMLElement>(".pw-co__card-icon");

        // Shimmer on hover
        const shimmer = card.querySelector<HTMLElement>(".pw-co__card-shimmer");
        if (shimmer) {
          card.addEventListener("mouseenter", () => {
            gsap.fromTo(
              shimmer,
              { x: "-115%" },
              { x: "115%", duration: 0.58, ease: "power2.inOut" },
            );
          });
        }

        // Icon entrance bounce
        if (icon) {
          gsap.fromTo(
            icon,
            { scale: 0.72, autoAlpha: 0 },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.5,
              ease: "back.out(1.7)",
              scrollTrigger: { trigger: card, start: "top 88%", once: true },
              delay: i * 0.055,
            },
          );
        }
      });

      // ── Card footer tag slide-in ───────────────────────────
      gsap.fromTo(
        "[data-co-card] .pw-co__card-tag",
        { x: 10, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          stagger: 0.06,
          duration: 0.45,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "[data-co-card]",
            start: "top 82%",
            once: true,
          },
          delay: 0.3,
        },
      );

      // ── Idle pulse on the kicker dot (after entrance) ─────
      ScrollTrigger.create({
        trigger: el,
        start: "top 78%",
        once: true,
        onEnter: () => {
          gsap.to("[data-co-kicker] .pw-co__kicker-dot", {
            scale: 1.35,
            duration: 0.9,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 0.9,
          });
        },
      });

      // ── Top-rule width reveal ──────────────────────────────
      gsap.fromTo(
        "[data-co-top-rule]",
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .pw-co {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          background:
            linear-gradient(
              160deg,
              var(--bg-primary) 0%,
              color-mix(in srgb, var(--bg-primary) 78%, var(--bg-elevated) 22%) 55%,
              color-mix(in srgb, var(--bg-primary) 72%, var(--bg-secondary) 28%) 100%
            );
        }

        /* ── Backgrounds ─────────────────────────────────────── */
        .pw-co__bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(color-mix(in srgb, var(--text-muted) 14%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--text-muted) 14%, transparent) 1px, transparent 1px);
          background-size: 64px 64px;
          pointer-events: none;
          mask-image: linear-gradient(
            180deg,
            transparent 0%,
            rgba(0,0,0,0.45) 12%,
            rgba(0,0,0,0.9) 32%,
            rgba(0,0,0,0.9) 68%,
            transparent 100%
          );
        }

        .pw-co__bg-fade {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              ellipse 65% 45% at 8% 108%,
              color-mix(in srgb, var(--primary-red) 10%, transparent) 0%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 55% 48% at 96% -5%,
              color-mix(in srgb, var(--primary-red) 8%, transparent) 0%,
              transparent 68%
            ),
            radial-gradient(
              ellipse 40% 30% at 60% 105%,
              color-mix(in srgb, var(--text-muted) 10%, transparent) 0%,
              transparent 65%
            );
          pointer-events: none;
        }

        .pw-co__top-rule {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            color-mix(in srgb, var(--primary-red) 22%, transparent) 25%,
            color-mix(in srgb, var(--primary-red) 34%, transparent) 50%,
            color-mix(in srgb, var(--primary-red) 22%, transparent) 75%,
            transparent
          );
          transform-origin: left;
          will-change: transform;
        }

        .pw-co .container-custom {
          max-width: 1280px;
          width: min(1280px, calc(100% - 3rem));
          margin-top: -50px;
        }

        .pw-co__inner {
          position: relative;
          z-index: 1;
        }

        /* ── Header ──────────────────────────────────────────── */
        .pw-co__header {
          display: grid;
          grid-template-columns: 1fr minmax(0, 500px);
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
        }

        /* ── Kicker ──────────────────────────────────────────── */
        .pw-co__kicker {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 5px 13px 5px 9px;
          border-radius: 8px;
          background: color-mix(in srgb, var(--primary-red) 6%, transparent);
          border: 1px solid color-mix(in srgb, var(--primary-red) 18%, transparent);
          color: var(--primary-red);
          font-family: var(--font-mono, "DM Mono", "Fira Mono", monospace);
          font-size: 0.64rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 1.15rem;
          will-change: transform, opacity;
        }

        .pw-co__kicker-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary-red);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-red) 18%, transparent);
          flex-shrink: 0;
          will-change: transform;
        }

        /* ── Title ───────────────────────────────────────────── */
        .pw-co__title {
          font-size: clamp(2rem, 3vw, 2.5rem);
          font-weight: 800;
          letter-spacing: -0.052em;
          line-height: 1.07;
          color: var(--text-primary);
          margin-bottom: 1.15rem;
          will-change: transform, opacity;
        }

        .pw-co__title mark {
          background: none;
          color: var(--primary-red);
        }

        .pw-co__lead {
          font-size: 1.0625rem;
          line-height: 1.78;
          color: var(--text-secondary);
          max-width: 52ch;
          will-change: transform, opacity;
        }

        /* ── Section image ──────────────────────────────────── */
        .pw-co__image-wrap {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          box-shadow:
            0 1px 2px rgba(0,0,0,0.04),
            0 8px 32px rgba(0,0,0,0.08),
            inset 0 1px 0 rgba(255,255,255,0.85);
          background: var(--bg-card);
          width: 100%;
          max-width: 420px;
          height: 320px;
          will-change: transform, opacity;
        }

        .pw-co__image-wrap::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 20px;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.6);
          pointer-events: none;
        }

        .pw-co__image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 600ms ease;
        }

        .pw-co__image-wrap:hover .pw-co__image {
          transform: scale(1.02);
        }

        /* ── Divider ─────────────────────────────────────────── */
        .pw-co__divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          transform-origin: left;
          will-change: transform, opacity;
        }

        .pw-co__divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            color-mix(in srgb, var(--border-color) 100%, transparent) 40%,
            color-mix(in srgb, var(--border-color) 100%, transparent) 60%,
            transparent
          );
        }

        .pw-co__divider-label {
          font-family: var(--font-mono, "DM Mono", "Fira Mono", monospace);
          font-size: 0.61rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-muted);
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* ── Cards grid ──────────────────────────────────────── */
        .pw-co__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          background: color-mix(in srgb, var(--border-color) 100%, transparent);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          overflow: hidden;
          box-shadow:
            0 1px 3px rgba(0,0,0,0.04),
            0 10px 40px rgba(0,0,0,0.07),
            inset 0 1px 0 rgba(255,255,255,0.7);
        }

        /* ── Card ────────────────────────────────────────────── */
        .pw-co__card {
          position: relative;
          padding: 2.1rem 2rem 1.8rem;
          background: var(--bg-card);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: background 260ms ease;
          cursor: default;
          will-change: transform, opacity;
        }

        .pw-co__card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            120px circle at 100% 100%,
            color-mix(in srgb, var(--primary-red) 8%, transparent) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 300ms ease;
          pointer-events: none;
        }

        .pw-co__card::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 64px;
          height: 64px;
          background: linear-gradient(
            135deg,
            color-mix(in srgb, var(--text-muted) 10%, transparent) 0%,
            transparent 60%
          );
          pointer-events: none;
        }

        .pw-co__card:hover {
          background: color-mix(in srgb, var(--bg-card) 75%, var(--bg-elevated) 25%);
        }

        .pw-co__card:hover::before {
          opacity: 1;
        }

        .pw-co__card-shimmer {
          position: absolute;
          inset-y: 0;
          left: 0;
          width: 55%;
          background: linear-gradient(
            105deg,
            transparent 0%,
            rgba(255,255,255,0.32) 50%,
            transparent 100%
          );
          transform: translateX(-115%);
          pointer-events: none;
          z-index: 2;
          will-change: transform;
        }

        .pw-co__card-texture {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(color-mix(in srgb, var(--text-muted) 8%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--text-muted) 8%, transparent) 1px, transparent 1px);
          background-size: 22px 22px;
          pointer-events: none;
          mask-image: linear-gradient(145deg, rgba(0,0,0,0.45) 0%, transparent 55%);
        }

        .pw-co__card-top {
          margin-bottom: 1.65rem;
          position: relative;
          z-index: 1;
        }

        .pw-co__card-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: var(--primary-red);
          background: linear-gradient(
            145deg,
            color-mix(in srgb, var(--primary-red) 8%, transparent),
            color-mix(in srgb, var(--primary-red) 4%, transparent)
          );
          border: 1px solid color-mix(in srgb, var(--primary-red) 18%, transparent);
          flex-shrink: 0;
          transition: background 250ms ease, border-color 250ms ease;
          will-change: transform, opacity;
        }

        .pw-co__card:hover .pw-co__card-icon {
          background: linear-gradient(
            145deg,
            color-mix(in srgb, var(--primary-red) 13%, transparent),
            color-mix(in srgb, var(--primary-red) 7%, transparent)
          );
          border-color: color-mix(in srgb, var(--primary-red) 28%, transparent);
        }

        .pw-co__card-title {
          font-size: 1.125rem;
          font-weight: 700;
          letter-spacing: -0.028em;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
          line-height: 1.22;
          position: relative;
          z-index: 1;
        }

        .pw-co__card-desc {
          font-size: 0.905rem;
          line-height: 1.72;
          color: var(--text-secondary);
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .pw-co__card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding-top: 1.2rem;
          margin-top: 1.35rem;
          border-top: 1px solid color-mix(in srgb, var(--border-color) 85%, transparent);
          position: relative;
          z-index: 1;
        }

        .pw-co__card-footer-label {
          font-family: var(--font-mono, "DM Mono", "Fira Mono", monospace);
          font-size: 0.62rem;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .pw-co__card-tag {
          display: inline-flex;
          align-items: center;
          padding: 3px 9px;
          border-radius: 5px;
          background: color-mix(in srgb, var(--text-primary) 4%, transparent);
          border: 1px solid var(--border-color);
          font-family: var(--font-mono, "DM Mono", "Fira Mono", monospace);
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-secondary);
          transition:
            background 240ms ease,
            border-color 240ms ease,
            color 240ms ease;
          will-change: transform, opacity;
        }

        .pw-co__card:hover .pw-co__card-tag {
          background: color-mix(in srgb, var(--primary-red) 5%, transparent);
          border-color: color-mix(in srgb, var(--primary-red) 18%, transparent);
          color: var(--primary-red);
        }

        /* ── Responsive ──────────────────────────────────────── */
        @media (max-width: 1100px) {
          .pw-co__header {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .pw-co__image {
            max-height: 340px;
          }

          .pw-co__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 680px) {
          .pw-co .container-custom {
            width: min(100%, calc(100% - 2rem));
            margin-top: -24px;
          }

          .pw-co__header {
            gap: 2rem;
            margin-bottom: 3rem;
          }

          .pw-co__image-wrap {
            max-width: 100%;
            height: 260px;
            border-radius: 16px;
          }

          .pw-co__image-wrap::after {
            border-radius: 16px;
          }

          .pw-co__grid {
            grid-template-columns: 1fr;
            border-radius: 16px;
          }

          .pw-co__card {
            padding: 1.65rem 1.5rem 1.45rem;
          }

          .pw-co__title {
            font-size: clamp(1.6rem, 6vw, 1.95rem);
          }

          .pw-co__lead {
            font-size: 0.98rem;
            line-height: 1.72;
          }

          .pw-co__divider {
            margin-bottom: 2rem;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="pw-co section-padding"
        id="solutions"
        aria-labelledby="co-heading"
      >
        <div className="pw-co__bg-grid" aria-hidden="true" />
        <div className="pw-co__bg-fade" aria-hidden="true" />
        <div className="pw-co__top-rule" data-co-top-rule aria-hidden="true" />

        <div className="container-custom pw-co__inner">
          {/* ── Header ──────────────────────────────────────────── */}
          <div className="pw-co__header">
            {/* Left — headline copy */}
            <div data-co-header-copy>
              <div className="pw-co__kicker" data-co-kicker aria-hidden="true">
                <span className="pw-co__kicker-dot" />
                Connected Systems Architecture
              </div>

              <h2 className="pw-co__title" id="co-heading" data-co-title>
                Software Built For
                <br />
                <mark>Connected Operations</mark>
              </h2>

              <p className="pw-co__lead" data-co-lead>
                We design operational software systems that connect people,
                workflows, data, and infrastructure into intelligent digital
                ecosystems.
              </p>
            </div>

            {/* Right — section image */}
            <div className="pw-co__image-wrap" data-co-image>
              <img
                src={sectionImage}
                alt="Pedzaworks connected systems platform overview"
                className="pw-co__image"
              />
            </div>
          </div>

          {/* ── Divider ─────────────────────────────────────────── */}
          <div className="pw-co__divider" data-co-divider aria-hidden="true">
            <div className="pw-co__divider-line" />
            <span className="pw-co__divider-label">
              06 capability modules · operational
            </span>
            <div className="pw-co__divider-line" />
          </div>

          {/* ── Capability cards ────────────────────────────────── */}
          <div
            className="pw-co__grid"
            role="list"
            aria-label="Capability modules"
          >
            {capabilities.map((item) => (
              <article
                className="pw-co__card"
                key={item.title}
                data-co-card
                role="listitem"
              >
                <div className="pw-co__card-shimmer" aria-hidden="true" />
                <div className="pw-co__card-texture" aria-hidden="true" />

                <div className="pw-co__card-top">
                  <div className="pw-co__card-icon" aria-hidden="true">
                    {item.icon}
                  </div>
                </div>

                <h3 className="pw-co__card-title">{item.title}</h3>
                <p className="pw-co__card-desc">{item.description}</p>

                <div className="pw-co__card-footer">
                  <span className="pw-co__card-footer-label">{item.meta}</span>
                  <span className="pw-co__card-tag">{item.tag}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ConnectedOperationsSection;
