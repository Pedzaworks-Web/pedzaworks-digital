// src/components/TechStackCarousel.tsx

import React, { useRef, useState } from "react";

type TechItem = {
  name: string;
  logo: string; // public URL
};

const STACK: TechItem[] = [
  { name: "React", logo: "web-images/react.svg" },
  { name: "TypeScript", logo: "web-images/typescript.svg" },
  { name: "Node.js", logo: "web-images/node.svg" },
  { name: "PostgreSQL", logo: "web-images/postgres.svg" },
  { name: "Supabase", logo: "web-images/supabase.svg" },
  { name: "AWS", logo: "web-images/aws.svg" },
  { name: "Docker", logo: "web-images/docker.svg" },
  { name: "Tailwind CSS", logo: "web-images/tailwind.svg" },
  { name: "MQTT", logo: "web-images/mqtt.svg" },
  { name: "Python", logo: "web-images/python.svg" },
  { name: "Java", logo: "web-images/java.svg" },
  { name: "C", logo: "web-images/c.svg" },
  { name: "Grafana", logo: "web-images/grafana.svg" },
];

const TechStackCarousel: React.FC = () => {
  const items = [...STACK, ...STACK];
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const nudge = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    if (!isPaused) setIsPaused(true);

    const step = 180;
    const delta = direction === "left" ? -step : step;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .pw-tech {
          position: relative;
          overflow: hidden;
          background: var(--pw-bg-base);
        }

        /* Unified container spacing on all breakpoints */
        .pw-tech__inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-top: 56px;
          padding-bottom: 64px;
          padding-inline: clamp(1rem, 5vw, 3rem);
        }

        @media (max-width: 860px) {
          .pw-tech__inner {
            padding-top: 40px;
            padding-bottom: 48px;
          }
        }

        @media (max-width: 640px) {
          .pw-tech__inner {
            padding-top: 32px;
            padding-bottom: 40px;
          }
        }

        .pw-tech__header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.75rem;
          margin-bottom: 20px;
        }

        .pw-tech__eyebrow {
          font-family: "DM Mono", monospace;
          font-size: 0.68rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--pw-red);
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 8px;
        }

        .pw-tech__dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: var(--pw-red);
          box-shadow: 0 0 0 3px rgba(200, 30, 30, 0.18);
        }

        .pw-tech__title {
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--pw-text-primary);
          line-height: 1.25;
        }

        .pw-tech__subtitle {
          font-size: 0.9rem;
          color: var(--pw-text-secondary);
          max-width: 420px;
          line-height: 1.6;
        }

        .pw-tech__layers {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 18px;
          font-family: "DM Mono", monospace;
          font-size: 0.65rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--pw-text-muted);
        }

        .pw-tech__layers span {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        .pw-tech__layers span::before {
          content: "";
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: var(--pw-red);
        }

        .pw-tech__rail-wrapper {
          position: relative;
        }

        .pw-tech__rail {
          position: relative;
          border-radius: 999px;
          border: 1px solid var(--pw-border-light);
          background: radial-gradient(circle at 0% 0%, #ffffff, #f8fafc);
          box-shadow:
            0 1px 2px rgba(15,23,42,0.04),
            0 8px 24px rgba(15,23,42,0.06);
          padding: 10px 0;
          overflow: hidden;
        }

        /* Scroll container: native scrolling for arrows & drag */
        .pw-tech__scroll {
          position: relative;
          overflow-x: auto;
          overflow-y: visible;
          scrollbar-width: none;
        }

        .pw-tech__scroll::-webkit-scrollbar {
          display: none;
        }

        .pw-tech__track {
          display: inline-flex;
          align-items: center;
          gap: 32px;
          width: max-content;
          will-change: transform;
        }

        /* Auto-scroll only when not paused */
        .pw-tech__track:not(.pw-tech__track--paused) {
          animation: pw-tech-scroll 28s linear infinite;
        }

        .pw-tech__rail:hover .pw-tech__track:not(.pw-tech__track--paused) {
          animation-play-state: paused;
        }

        @keyframes pw-tech-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .pw-tech__item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(15,23,42,0.02);
          border: 1px solid rgba(148,163,184,0.4);
          flex-shrink: 0;
        }

        .pw-tech__icon-wrap {
          width: 26px;
          height: 26px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          box-shadow: 0 0 0 1px rgba(148,163,184,0.4);
          flex-shrink: 0;
        }

        .pw-tech__icon {
          display: block;
          width: 18px;
          height: 18px;
          object-fit: contain;
        }

        .pw-tech__name {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--pw-text-primary);
          white-space: nowrap;
        }

        /* arrows: hidden by default, show on hover */
        .pw-tech__controls {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 6px;
          pointer-events: none;
          opacity: 0;
          transition: opacity var(--pw-t-fast);
        }

        .pw-tech__rail-wrapper:hover .pw-tech__controls {
          opacity: 1;
          pointer-events: auto;
        }

        .pw-tech__arrow {
          width: 32px;
          height: 32px;
          border-radius: 999px;
          border: 1px solid var(--pw-border);
          background: rgba(248,250,252,0.96);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--pw-text-secondary);
          cursor: pointer;
          transition:
            background var(--pw-t-fast),
            border-color var(--pw-t-fast),
            transform var(--pw-t-fast),
            box-shadow var(--pw-t-fast),
            color var(--pw-t-fast);
        }

        .pw-tech__arrow:hover {
          background: rgba(200,30,30,0.06);
          border-color: rgba(200,30,30,0.5);
          color: var(--pw-red);
          transform: translateY(-1px);
          box-shadow: var(--pw-shadow-sm);
        }

        .pw-tech__arrow-icon {
          font-size: 0.8rem;
          line-height: 1;
        }

        @media (max-width: 768px) {
          .pw-tech__header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            margin-bottom: 16px;
          }

          .pw-tech__title {
            font-size: 1.2rem;
          }

          .pw-tech__subtitle {
            font-size: 0.87rem;
          }

          .pw-tech__rail {
            padding: 8px 0;
          }

          .pw-tech__item {
            padding: 6px 14px;
          }

          .pw-tech__arrow {
            width: 28px;
            height: 28px;
          }
        }
      `}</style>

      <section
        className="pw-tech"
        aria-label="Technology stack used by Pedzaworks"
      >
        <div className="pw-tech__inner">
          <header className="pw-tech__header">
            <div>
              <div className="pw-tech__eyebrow">
                <span className="pw-tech__dot" />
                Technology stack
              </div>
              <h2 className="pw-tech__title">
                One stack for software, IoT, automation, and embedded systems.
              </h2>
            </div>
            <p className="pw-tech__subtitle">
              From frontend interfaces to edge devices and orchestration, we
              engineer connected systems using battle‑tested tools across web,
              cloud, hardware, and automation layers.
            </p>
          </header>

          <div className="pw-tech__layers">
            <span>Web & APIs</span>
            <span>IoT & edge devices</span>
            <span>Automation & workflows</span>
            <span>Cloud, data & observability</span>
          </div>

          <div className="pw-tech__rail-wrapper">
            <div className="pw-tech__rail">
              <div className="pw-tech__scroll" ref={scrollRef}>
                <div
                  className={
                    "pw-tech__track" +
                    (isPaused ? " pw-tech__track--paused" : "")
                  }
                >
                  {items.map((item, idx) => (
                    <div className="pw-tech__item" key={`${item.name}-${idx}`}>
                      <div className="pw-tech__icon-wrap">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="pw-tech__icon"
                        />
                      </div>
                      <span className="pw-tech__name">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pw-tech__controls" aria-hidden="true">
              <button
                type="button"
                className="pw-tech__arrow"
                onClick={() => nudge("left")}
              >
                <span className="pw-tech__arrow-icon">←</span>
              </button>
              <button
                type="button"
                className="pw-tech__arrow"
                onClick={() => nudge("right")}
              >
                <span className="pw-tech__arrow-icon">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStackCarousel;
