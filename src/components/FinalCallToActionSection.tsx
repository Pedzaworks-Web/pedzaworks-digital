import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarDays, MonitorSmartphone, CheckCircle2 } from "lucide-react";
import RequestDemoModal from "./RequestDemoModal";

gsap.registerPlugin(ScrollTrigger);

const indicators = [
  "Operational Platforms",
  "Workflow Automation",
  "Systems Integration",
  "Connected Infrastructure",
];

const FinalCallToActionSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { ease: "expo.out", duration: 0.9 },
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        })
        .fromTo(
          "[data-fc-kicker]",
          { y: 14, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 },
          0,
        )
        .fromTo(
          "[data-fc-title]",
          { y: 26, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 },
          0.08,
        )
        .fromTo(
          "[data-fc-lead]",
          { y: 18, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 },
          0.16,
        )
        .fromTo(
          "[data-fc-actions]",
          { y: 18, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 },
          0.24,
        )
        .fromTo(
          "[data-fc-indicator]",
          { y: 18, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.06 },
          0.32,
        )
        .fromTo(
          "[data-fc-trust]",
          { y: 14, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 },
          0.46,
        );

      gsap.fromTo(
        "[data-fc-panel]",
        { y: 24, autoAlpha: 0, scale: 0.985 },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        },
      );

      gsap.fromTo(
        "[data-fc-top-rule]",
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        },
      );

      gsap.to("[data-fc-topology]", {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.7,
        },
      });

      gsap.to("[data-fc-header]", {
        yPercent: -2.5,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.55,
        },
      });

      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to("[data-fc-kicker] .pw-fc__kicker-dot", {
            scale: 1.35,
            duration: 0.9,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 0.85,
          });
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-fc-button]").forEach((button) => {
        const shimmer = button.querySelector<HTMLElement>(
          ".pw-fc__button-shimmer",
        );

        if (shimmer) {
          button.addEventListener("mouseenter", () => {
            gsap.fromTo(
              shimmer,
              { x: "-120%" },
              { x: "120%", duration: 0.55, ease: "power2.inOut" },
            );
          });
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .pw-fc {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          background:
            linear-gradient(
              160deg,
              var(--bg-primary) 0%,
              color-mix(in srgb, var(--bg-primary) 82%, var(--bg-elevated) 18%) 55%,
              color-mix(in srgb, var(--bg-primary) 76%, var(--bg-secondary) 24%) 100%
            );
        }

        .pw-fc__bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(color-mix(in srgb, var(--text-muted) 12%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--text-muted) 12%, transparent) 1px, transparent 1px);
          background-size: 64px 64px;
          pointer-events: none;
          mask-image: linear-gradient(
            180deg,
            transparent 0%,
            rgba(0,0,0,0.45) 12%,
            rgba(0,0,0,0.9) 36%,
            rgba(0,0,0,0.9) 70%,
            transparent 100%
          );
        }

        .pw-fc__bg-fade {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              ellipse 56% 42% at 12% 102%,
              color-mix(in srgb, var(--primary-red) 8%, transparent) 0%,
              transparent 72%
            ),
            radial-gradient(
              ellipse 42% 36% at 90% -2%,
              color-mix(in srgb, var(--primary-red) 7%, transparent) 0%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 36% 26% at 50% 100%,
              color-mix(in srgb, var(--text-muted) 10%, transparent) 0%,
              transparent 70%
            );
          pointer-events: none;
        }

        .pw-fc__top-rule {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            color-mix(in srgb, var(--primary-red) 20%, transparent) 25%,
            color-mix(in srgb, var(--primary-red) 34%, transparent) 50%,
            color-mix(in srgb, var(--primary-red) 20%, transparent) 75%,
            transparent
          );
          transform-origin: left;
          will-change: transform;
        }

        .pw-fc .container-custom {
          max-width: 1280px;
          width: min(1280px, calc(100% - 3rem));
          margin-top: -50px;
        }

        .pw-fc__inner {
          position: relative;
          z-index: 1;
        }

        .pw-fc__panel {
          position: relative;
          overflow: hidden;
          padding: clamp(3rem, 6vw, 5rem) clamp(1.4rem, 4vw, 4rem);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          background:
            linear-gradient(
              180deg,
              color-mix(in srgb, var(--bg-secondary) 88%, transparent),
              color-mix(in srgb, var(--bg-secondary) 80%, transparent)
            ),
            var(--bg-card);
          box-shadow:
            0 1px 2px rgba(0,0,0,0.04),
            0 10px 40px rgba(0,0,0,0.07),
            inset 0 1px 0 rgba(255,255,255,0.82);
          text-align: center;
        }

        .pw-fc__panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              180px circle at 0% 100%,
              color-mix(in srgb, var(--primary-red) 8%, transparent) 0%,
              transparent 75%
            ),
            radial-gradient(
              220px circle at 100% 0%,
              color-mix(in srgb, var(--text-muted) 10%, transparent) 0%,
              transparent 75%
            );
          pointer-events: none;
        }

        .pw-fc__panel::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(color-mix(in srgb, var(--text-muted) 7%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--text-muted) 7%, transparent) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: radial-gradient(circle at center, rgba(0,0,0,0.6), transparent 82%);
          pointer-events: none;
        }

        .pw-fc__topology {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.42;
          pointer-events: none;
        }

        .pw-fc__topology path {
          stroke: color-mix(in srgb, var(--text-muted) 24%, transparent);
          stroke-width: 1;
          vector-effect: non-scaling-stroke;
        }

        .pw-fc__topology circle {
          fill: color-mix(in srgb, var(--primary-red) 82%, transparent);
        }

        .pw-fc__header {
          position: relative;
          z-index: 1;
          display: grid;
          justify-items: center;
        }

        .pw-fc__kicker {
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

        .pw-fc__kicker-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary-red);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-red) 18%, transparent);
          flex-shrink: 0;
          will-change: transform;
        }

        .pw-fc__title {
          font-size: clamp(2rem, 3vw, 2.5rem);
          font-weight: 800;
          letter-spacing: -0.055em;
          line-height: 1.02;
          color: var(--text-primary);
          margin: 0 0 1.15rem;
          max-width: 13ch;
          will-change: transform, opacity;
        }

        .pw-fc__title mark {
          background: none;
          color: var(--primary-red);
        }

        .pw-fc__lead {
          margin: 0;
          max-width: 68ch;
          font-size: 1.05rem;
          line-height: 1.82;
          color: var(--text-secondary);
          will-change: transform, opacity;
        }

        .pw-fc__actions {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-top: 2rem;
          width: 100%;
          will-change: transform, opacity;
        }

        .pw-fc__button {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 12px 22px;
          border-radius: 8px;
          border: 1px solid transparent;
          text-decoration: none;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          text-align: center;
          transition:
            transform 260ms ease,
            background 260ms ease,
            border-color 260ms ease,
            box-shadow 260ms ease,
            color 260ms ease;
          will-change: transform, opacity;
        }

        .pw-fc__button:focus-visible {
          outline: 2px solid color-mix(in srgb, var(--primary-red) 28%, transparent);
          outline-offset: 3px;
        }

        .pw-fc__button-content {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          text-align: center;
        }

        .pw-fc__button-label {
          display: inline-block;
          line-height: 1;
          text-align: center;
          white-space: nowrap;
        }

        .pw-fc__button-shimmer {
          position: absolute;
          inset: 0;
          width: 48%;
          background: linear-gradient(
            105deg,
            transparent 0%,
            rgba(255,255,255,0.28) 50%,
            transparent 100%
          );
          transform: translateX(-120%);
          pointer-events: none;
          z-index: 0;
        }

        .pw-fc__button-icon {
          width: 16px;
          height: 16px;
          flex: 0 0 16px;
          display: block;
        }

        .pw-fc__button--primary {
          background: var(--primary-red);
          color: #fff;
          box-shadow: 0 10px 30px color-mix(in srgb, var(--primary-red) 22%, transparent);
          font-family: var(--font-mono, "DM Mono", "Fira Mono", monospace);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .pw-fc__button--primary:hover {
          background: var(--primary-red-hover);
          transform: translateY(-2px);
        }

        .pw-fc__button--secondary {
          background: color-mix(in srgb, var(--bg-secondary) 72%, transparent);
          color: var(--text-primary);
          border-color: var(--border-color);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.85),
            0 4px 20px rgba(15,23,42,0.04);
          font-family: var(--font-mono, "DM Mono", "Fira Mono", monospace);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .pw-fc__button--secondary:hover {
          transform: translateY(-2px);
          border-color: color-mix(in srgb, var(--primary-red) 18%, transparent);
          color: var(--primary-red);
          background: var(--bg-secondary);
        }

        .pw-fc__indicator-row {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.8rem 1.1rem;
          margin-top: 1.85rem;
        }

        .pw-fc__indicator {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0;
          color: var(--text-secondary);
          font-family: var(--font-mono, "DM Mono", "Fira Mono", monospace);
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          white-space: nowrap;
          will-change: transform, opacity;
        }

        .pw-fc__indicator-icon {
          width: 14px;
          height: 14px;
          color: var(--primary-red);
          flex-shrink: 0;
        }

        .pw-fc__trust {
          position: relative;
          z-index: 1;
          margin: 1.55rem 0 0;
          font-family: var(--font-mono, "DM Mono", "Fira Mono", monospace);
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
          will-change: transform, opacity;
        }

        @media (max-width: 760px) {
          .pw-fc .container-custom {
            width: calc(100% - 2rem);
            margin-top: -24px;
          }

          .pw-fc__panel {
            padding: 2.25rem 1.15rem;
            border-radius: 16px;
          }

          .pw-fc__title {
            max-width: 11ch;
            font-size: clamp(1.65rem, 6vw, 1.95rem);
          }

          .pw-fc__lead {
            font-size: 0.98rem;
            line-height: 1.76;
          }

          .pw-fc__actions {
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .pw-fc__button {
            width: min(100%, 280px);
            max-width: 100%;
            padding-inline: 1rem;
          }

          .pw-fc__button-content {
            width: 100%;
            justify-content: center;
          }

          .pw-fc__indicator-row {
            gap: 0.7rem 0.9rem;
          }

          .pw-fc__indicator {
            justify-content: center;
            width: 100%;
            white-space: normal;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="pw-fc section-padding"
        id="final-cta"
        aria-labelledby="fc-heading"
      >
        <div className="pw-fc__bg-grid" aria-hidden="true" />
        <div className="pw-fc__bg-fade" aria-hidden="true" />
        <div className="pw-fc__top-rule" data-fc-top-rule aria-hidden="true" />

        <div className="container-custom pw-fc__inner">
          <div className="pw-fc__panel" data-fc-panel>
            <div className="pw-fc__header" data-fc-header>
              <div className="pw-fc__kicker" data-fc-kicker>
                <span className="pw-fc__kicker-dot" />
                Start A Conversation
              </div>

              <h2 className="pw-fc__title" id="fc-heading" data-fc-title>
                Let&apos;s Build The System
                <br />
                <mark>Your Operations Need.</mark>
              </h2>

              <p className="pw-fc__lead" data-fc-lead>
                Whether you&apos;re building a service platform, workflow
                system, operational dashboard, automation solution, or connected
                infrastructure project, Pedzaworks helps transform complex
                operations into scalable digital systems.
              </p>

              <div className="pw-fc__actions" data-fc-actions>
                <a
                  href="/contact"
                  className="pw-fc__button pw-fc__button--primary"
                  data-fc-button
                >
                  <span className="pw-fc__button-shimmer" aria-hidden="true" />
                  <span className="pw-fc__button-content">
                    <span className="pw-fc__button-label">Consultation</span>
                    <CalendarDays
                      className="pw-fc__button-icon"
                      strokeWidth={1.9}
                    />
                  </span>
                </a>

                <button
                  type="button"
                  className="pw-fc__button pw-fc__button--secondary"
                  data-fc-button
                  onClick={() => setIsDemoModalOpen(true)}
                >
                  <span className="pw-fc__button-shimmer" aria-hidden="true" />
                  <span className="pw-fc__button-content">
                    <span className="pw-fc__button-label">Request A Demo</span>
                    <MonitorSmartphone
                      className="pw-fc__button-icon"
                      strokeWidth={1.9}
                    />
                  </span>
                </button>
              </div>

              <div
                className="pw-fc__indicator-row"
                aria-label="Operational capability indicators"
              >
                {indicators.map((item) => (
                  <div
                    className="pw-fc__indicator"
                    key={item}
                    data-fc-indicator
                  >
                    <CheckCircle2
                      className="pw-fc__indicator-icon"
                      strokeWidth={1.9}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="pw-fc__trust" data-fc-trust>
                Building operational software systems for modern organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RequestDemoModal
        open={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        onSubmit={(data) => {
          console.log("Demo request submitted:", data);
        }}
      />
    </>
  );
};

export default FinalCallToActionSection;
