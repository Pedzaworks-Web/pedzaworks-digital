// src/components/SystemsShowcase.tsx

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import RequestDemoModal from "./RequestDemoModal";

gsap.registerPlugin(ScrollTrigger);

type SystemItem = {
  id: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  order: "text-left" | "text-right";
  subtle?: boolean;
};

const SYSTEMS: SystemItem[] = [
  {
    id: "zimserv",
    title: "Zimserv — Service Marketplace Infrastructure",
    description:
      "A connected digital platform designed to bridge customers and service providers through scalable marketplace architecture, operational workflows, and intelligent service coordination.",
    features: [
      "Multi-provider ecosystem",
      "Service discovery",
      "Operational workflows",
      "Marketplace architecture",
      "Platform scalability",
    ],
    imageUrl: "/systems/zimserv.png",
    order: "text-left",
  },
  {
    id: "campus",
    title: "Campus Operations & Issue Management Platform",
    description:
      "A centralized digital system designed to streamline issue reporting, escalation workflows, communication, and operational transparency within campus environments.",
    features: [
      "Issue reporting workflows",
      "Escalation systems",
      "Operational visibility",
      "Communication infrastructure",
      "Real-time coordination",
    ],
    imageUrl: "/systems/campus.png",
    order: "text-right",
  },
  {
    id: "commerce",
    title: "Digital Commerce Operations Platform",
    description:
      "A scalable e-commerce infrastructure designed to optimize digital ordering, product management, customer interaction, and connected business operations.",
    features: [
      "Product systems",
      "Order workflows",
      "Customer management",
      "Digital commerce infrastructure",
      "Operational integration",
    ],
    imageUrl: "/systems/commerce.png",
    order: "text-left",
  },
  {
    id: "community",
    title: "Connected Community Platform",
    description:
      "A modern communication-focused platform designed to improve accessibility, engagement, and connected digital experiences for community-driven organizations.",
    features: [
      "Community engagement",
      "Digital communication",
      "Accessibility systems",
      "Event coordination",
      "Connected experiences",
    ],
    imageUrl: "/systems/community.png",
    order: "text-right",
    subtle: true,
  },
];

const SystemsShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

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

      tl.from("[data-ss-kicker]", { y: 14, autoAlpha: 0 }, 0)
        .from("[data-ss-title]", { y: 22, autoAlpha: 0 }, 0.08)
        .from("[data-ss-lead]", { y: 18, autoAlpha: 0 }, 0.16)
        .from("[data-ss-row]", { y: 26, autoAlpha: 0, stagger: 0.12 }, 0.26);

      gsap.to("[data-ss-image]", {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-ss-row]").forEach((row) => {
        const chips = row.querySelectorAll<HTMLElement>(".pw-ss__chip");
        const cta = row.querySelector<HTMLElement>(".pw-ss__cta");
        const shimmer = row.querySelector<HTMLElement>(".pw-ss__cta-shimmer");

        gsap.fromTo(
          chips,
          { y: 10, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.05,
            duration: 0.45,
            ease: "power2.out",
            scrollTrigger: { trigger: row, start: "top 82%", once: true },
          },
        );

        if (cta) {
          gsap.fromTo(
            cta,
            { y: 12, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: { trigger: row, start: "top 82%", once: true },
            },
          );

          if (shimmer) {
            cta.addEventListener("mouseenter", () => {
              gsap.fromTo(
                shimmer,
                { x: "-120%" },
                { x: "120%", duration: 0.7, ease: "power2.inOut" },
              );
            });
          }
        }

        const image = row.querySelector<HTMLElement>(".pw-ss__image");
        if (image) {
          gsap.fromTo(
            image,
            { scale: 0.98, autoAlpha: 0 },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: { trigger: row, start: "top 85%", once: true },
            },
          );
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .pw-ss {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          background:
            linear-gradient(
              160deg,
              var(--bg-primary) 0%,
              color-mix(in srgb, var(--bg-primary) 72%, var(--bg-secondary) 28%) 55%,
              color-mix(in srgb, var(--bg-primary) 76%, var(--bg-elevated) 24%) 100%
            );
        }

        .pw-ss .container-custom {
          max-width: 1280px;
          width: min(1280px, calc(100% - 3rem));
          margin: 0 auto;
        }

        .pw-ss__bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(color-mix(in srgb, var(--text-muted) 14%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--text-muted) 14%, transparent) 1px, transparent 1px);
          background-size: 70px 70px;
          pointer-events: none;
          mask-image: linear-gradient(
            180deg,
            transparent 0%,
            rgba(0,0,0,0.4) 15%,
            rgba(0,0,0,0.85) 40%,
            rgba(0,0,0,0.85) 75%,
            transparent 100%
          );
          opacity: 0.6;
        }

        .pw-ss__inner {
          position: relative;
          z-index: 1;
        }

        .pw-ss__header {
          max-width: 780px;
          margin: 0 0 3.5rem 0;
          text-align: left;
        }

        .pw-ss__kicker {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 5px 13px 5px 9px;
          border-radius: 8px;
          background: color-mix(in srgb, var(--primary-red) 6%, transparent);
          border: 1px solid color-mix(in srgb, var(--primary-red) 18%, transparent);
          color: var(--primary-red);
          font-family: var(--font-mono, "DM Mono", monospace);
          font-size: 0.64rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 1rem;
          will-change: transform, opacity;
        }

        .pw-ss__kicker-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary-red);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-red) 18%, transparent);
        }

        .pw-ss__title {
          font-size: clamp(2rem, 3vw, 2.5rem);
          font-weight: 800;
          letter-spacing: -0.048em;
          line-height: 1.1;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
          will-change: transform, opacity;
        }

        .pw-ss__lead {
          font-size: 1.02rem;
          line-height: 1.8;
          max-width: 44rem;
          color: var(--text-secondary);
          will-change: transform, opacity;
        }

        .pw-ss__rows {
          display: flex;
          flex-direction: column;
          gap: 3.75rem;
        }

        .pw-ss__row {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.1fr);
          gap: 2.75rem;
          align-items: center;
          will-change: transform, opacity;
        }

        .pw-ss__text {
          max-width: 640px;
          margin-left: 80px;
        }

        .pw-ss__label {
          font-family: var(--font-mono, "DM Mono", monospace);
          font-size: 0.68rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 0.35rem;
        }

        .pw-ss__system-title {
          font-size: 1.5rem;
          letter-spacing: -0.03em;
          margin-bottom: 0.6rem;
          color: var(--text-primary);
        }

        .pw-ss__desc {
          font-size: 0.97rem;
          line-height: 1.8;
          margin-bottom: 0.9rem;
          color: var(--text-secondary);
        }

        .pw-ss__features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.1rem;
        }

        .pw-ss__chip {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid color-mix(in srgb, var(--border-color) 100%, transparent);
          background: color-mix(in srgb, var(--bg-card) 82%, var(--bg-elevated) 18%);
          font-family: var(--font-mono, "DM Mono", monospace);
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-secondary);
          will-change: transform, opacity;
        }

        .pw-ss__chip-dot {
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: var(--primary-red);
        }

        .pw-ss__cta {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 12px 24px;
          border-radius: var(--pw-r-sm, 8px);
          border: none;
          background: var(--primary-red);
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: var(--pw-shadow-red, 0 14px 26px rgba(196,30,36,0.2));
          cursor: pointer;
          transition:
            background 220ms ease,
            box-shadow 220ms ease,
            transform 220ms ease;
          will-change: transform, opacity;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .pw-ss__cta:hover {
          background: var(--primary-red-hover);
          transform: translateY(-2px);
        }

        .pw-ss__cta-shimmer {
          position: absolute;
          inset: 0;
          width: 45%;
          background: linear-gradient(
            105deg,
            transparent 0%,
            rgba(255,255,255,0.32) 50%,
            transparent 100%
          );
          transform: translateX(-120%);
          pointer-events: none;
          z-index: 0;
        }

        .pw-ss__cta span,
        .pw-ss__cta svg {
          position: relative;
          z-index: 1;
        }

        .pw-ss__cta-icon {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
          display: block;
        }

        .pw-ss__visual {
          display: flex;
          justify-content: flex-end;
        }

        .pw-ss__visual-inner {
          width: 100%;
          max-width: 420px;
          border-radius: 0;
          overflow: visible;
          border: none;
          box-shadow: none;
          background: transparent;
        }

        .pw-ss__image {
          display: block;
          width: 100%;
          height: auto;
          max-height: 500px;
          object-fit: contain;
          transition: transform 600ms ease;
          margin-left: -100px;
          will-change: transform, opacity;
        }

        .pw-ss__visual-inner:hover .pw-ss__image {
          transform: scale(1.02);
        }

        @media (max-width: 1100px) {
          .pw-ss__row {
            grid-template-columns: minmax(0, 1fr);
          }

          .pw-ss__visual {
            justify-content: center;
            order: -1;
          }

          .pw-ss__visual-inner {
            max-width: 360px;
          }

          .pw-ss__image {
            margin-left: 0;
          }

          .pw-ss__text {
            margin-left: 0;
            max-width: 100%;
          }
        }

        @media (max-width: 680px) {
          .pw-ss .container-custom {
            width: calc(100% - 2rem);
          }

          .pw-ss__header {
            margin-bottom: 2.8rem;
          }

          .pw-ss__rows {
            gap: 3rem;
          }

          .pw-ss__title {
            font-size: clamp(1.65rem, 6.2vw, 1.95rem);
          }

          .pw-ss__system-title {
            font-size: 1.35rem;
          }

          .pw-ss__lead,
          .pw-ss__desc {
            font-size: 0.96rem;
            line-height: 1.75;
          }

          .pw-ss__visual-inner {
            max-width: 320px;
          }
        }
      `}</style>
      <section
        id="systems-showcase"
        ref={sectionRef}
        className="pw-ss section-padding"
        aria-labelledby="systems-showcase-heading"
        style={{ scrollMarginTop: "-80px" }}
      >
        <div className="pw-ss__bg-grid" aria-hidden="true" />
        <div className="container-custom pw-ss__inner">
          <header className="pw-ss__header">
            <div className="pw-ss__kicker" data-ss-kicker>
              <span className="pw-ss__kicker-dot" />
              Systems Showcase
            </div>
            <h2
              id="systems-showcase-heading"
              className="pw-ss__title"
              data-ss-title
            >
              Selected Platforms & Operational Systems
            </h2>
            <p className="pw-ss__lead" data-ss-lead>
              We build scalable digital platforms and connected operational
              systems designed to improve workflows, visibility, communication,
              and intelligent coordination.
            </p>
          </header>

          <div className="pw-ss__rows">
            {SYSTEMS.map((system, index) => {
              const reverse = system.order === "text-right";

              const textBlock = (
                <div className="pw-ss__text" key={`${system.id}-text`}>
                  <div className="pw-ss__label">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1} · System
                  </div>
                  <h3 className="pw-ss__system-title">{system.title}</h3>
                  <p className="pw-ss__desc">{system.description}</p>

                  <div className="pw-ss__features">
                    {system.features.map((f) => (
                      <span className="pw-ss__chip" key={f}>
                        <span className="pw-ss__chip-dot" />
                        {f}
                      </span>
                    ))}
                  </div>

                  <button
                    className="pw-ss__cta"
                    type="button"
                    onClick={() => setIsDemoModalOpen(true)}
                  >
                    <span className="pw-ss__cta-shimmer" aria-hidden="true" />
                    <span>Request Demo</span>
                    <ArrowRight className="pw-ss__cta-icon" strokeWidth={2.2} />
                  </button>
                </div>
              );

              const visualBlock = (
                <div className="pw-ss__visual" key={`${system.id}-visual`}>
                  <div className="pw-ss__visual-inner">
                    <img
                      src={system.imageUrl}
                      alt={system.title}
                      className="pw-ss__image"
                      data-ss-image
                    />
                  </div>
                </div>
              );

              return (
                <div key={system.id} className="pw-ss__row" data-ss-row>
                  {reverse ? (
                    <>
                      {visualBlock}
                      {textBlock}
                    </>
                  ) : (
                    <>
                      {textBlock}
                      {visualBlock}
                    </>
                  )}
                </div>
              );
            })}
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

export default SystemsShowcase;
