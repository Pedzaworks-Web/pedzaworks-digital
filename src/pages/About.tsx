// src/pages/About.tsx

import React, { useEffect, useRef } from "react";
import { GitBranch, Layers3, Network, Radar } from "lucide-react";

import aboutHeroImage from "../assets/about.png";
import visionImage from "../assets/africa.png";
import founderImage from "../assets/founder.png";

const principles = [
  {
    icon: Layers3,
    title: "Operational First",
    text: "We begin with operational reality — people, workflows, constraints, and failure points — before defining the software layer.",
    meta: "Methodology · 01",
    tag: "Foundation",
  },
  {
    icon: GitBranch,
    title: "Systems Thinking",
    text: "We design connected ecosystems instead of isolated products, so software decisions support the wider operating model.",
    meta: "Methodology · 02",
    tag: "Architecture",
  },
  {
    icon: Network,
    title: "Purposeful Integration",
    text: "We unify workflows, data, and teams so organizations operate from a coherent environment instead of disconnected tools.",
    meta: "Methodology · 03",
    tag: "Integration",
  },
  {
    icon: Radar,
    title: "Built To Scale",
    text: "Every solution is structured for future growth, integration, observability, and long-term operational evolution.",
    meta: "Methodology · 04",
    tag: "Longevity",
  },
];

const impactBlocks = [
  {
    index: "01",
    title: "Better Visibility",
    desc: "We help organizations gain clearer visibility into their operations — enabling better awareness, faster responses, and more informed decision-making.",
    meta: "Operational clarity",
    tag: "Visibility",
  },
  {
    index: "02",
    title: "Better Coordination",
    desc: "Effective systems create alignment between people, workflows, and information. We measure success by how well technology improves coordination across an organization.",
    meta: "Team alignment",
    tag: "Coordination",
  },
  {
    index: "03",
    title: "Better Execution",
    desc: "Technology should improve execution, not add complexity. The best systems help organizations operate with greater efficiency, consistency, and confidence.",
    meta: "Operational output",
    tag: "Execution",
  },
];

const About: React.FC = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const elements = rootRef.current?.querySelectorAll("[data-reveal]");
    if (!elements) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ── Core tokens — shared with ConnectedOperations ── */
        .pw-about {
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

        .pw-about__bg-grid {
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

        .pw-about__bg-fade {
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 65% 45% at 8% 108%,  rgba(200,30,30,0.07)  0%, transparent 70%),
            radial-gradient(ellipse 55% 48% at 96% -5%, rgba(200,30,30,0.055) 0%, transparent 68%),
            radial-gradient(ellipse 40% 30% at 60% 105%, rgba(100,116,139,0.06) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        .pw-about > * {
          position: relative;
          z-index: 1;
        }

        .pw-top-rule {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
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

        .pw-about .container-custom {
          max-width: 1280px;
          width: min(1280px, calc(100% - 3rem));
          margin-inline: auto;
        }

        /* ── Section shell (hero + sections + CTA) ─────────── */
        .pw-section {
          padding: clamp(5rem, 8vw, 7rem) 0;
        }

        .pw-section--hero {
    
          padding-top: 230px;
          padding-bottom: 80px;
        }

        .pw-section--soft {
          background: linear-gradient(180deg, rgba(255,255,255,0.5), rgba(249,250,251,0.4));
          border-top: 1px solid var(--co-border-md);
          border-bottom: 1px solid var(--co-border-md);
        }

        /* ── Eyebrow / kicker — used everywhere ────────────── */
        .pw-eyebrow {
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

        .pw-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--co-red);
          box-shadow: 0 0 0 3px rgba(200,30,30,0.18);
          flex-shrink: 0;
        }

        .pw-eyebrow-dot--pulse {
          animation: pwKickerPulse 1.8s ease-in-out infinite;
        }

        @keyframes pwKickerPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.35); }
        }

        /* ── Heading & lead hierarchy — shared ─────────────── */
        .pw-heading {
          margin: 0 0 1.15rem;
          font-size: 40px;
          line-height: 1.02;
          letter-spacing: -0.045em;
          color: var(--co-text-1);
        }

        .pw-heading mark {
          background: none;
          color: var(--co-red);
        }

        .pw-heading--hero {
          font-size: clamp(2.8rem, 5vw, 5.2rem);
          letter-spacing: -0.05em;
          line-height: 0.97;
          max-width: 13ch;
        }

        .pw-lead {
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.82;
          color: var(--co-text-2);
          max-width: 42rem;
        }

        .pw-section-title {
          margin-bottom: clamp(2rem, 4vw, 3rem);
          max-width: 44rem;
        }

        /* ── Divider — reused everywhere ───────────────────── */
        .pw-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .pw-divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--co-border-md) 40%,
            var(--co-border-md) 60%,
            transparent
          );
        }

        .pw-divider-label {
          font-family: var(--co-mono);
          font-size: 0.61rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--co-text-3);
          white-space: nowrap;
        }

        /* ── Grid helpers ───────────────────────────────────── */
        .pw-grid-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
          gap: clamp(2rem, 4vw, 4.5rem);
          align-items: center;
        }

        .pw-grid-editorial {
          display: grid;
          grid-template-columns: minmax(240px, 0.8fr) minmax(0, 1.2fr);
          gap: clamp(2rem, 5vw, 5rem);
          align-items: flex-start;
        }

        .pw-grid-vision {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(280px, 0.92fr);
          gap: clamp(1.5rem, 4vw, 4rem);
          align-items: center;
        }

        .pw-grid-founder {
          display: grid;
          grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.3fr);
          gap: clamp(1.5rem, 4vw, 4rem);
          align-items: center;
        }

        /* ── Topology visual (still used elsewhere if needed) ─ */
        .pw-topology {
          position: relative;
          min-height: 520px;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid var(--co-border-md);
          box-shadow:
            0 1px 2px rgba(0,0,0,0.04),
            0 8px 32px rgba(0,0,0,0.08),
            inset 0 1px 0 rgba(255,255,255,0.85);
          background:
            radial-gradient(circle at top right, rgba(196, 30, 36, 0.09), transparent 24%),
            linear-gradient(180deg, rgba(255,255,255,0.92), rgba(238,240,244,0.88));
        }

        .pw-topology::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px);
          background-size: 36px 36px;
          opacity: 0.7;
        }

        .pw-node {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: #fff;
          border: 2px solid var(--co-red);
          box-shadow: 0 0 0 10px rgba(196, 30, 36, 0.06);
        }

        .pw-node--a { top: 16%; left: 22%; }
        .pw-node--b { top: 28%; right: 20%; }
        .pw-node--c { top: 50%; left: 38%; }
        .pw-node--d { bottom: 24%; left: 18%; }
        .pw-node--e { bottom: 18%; right: 26%; }

        .pw-link {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, rgba(196,30,36,0.55), rgba(15,23,42,0.12));
          transform-origin: left center;
        }

        .pw-link--1 { top: 19%; left: 24%; width: 44%; transform: rotate(10deg); }
        .pw-link--2 { top: 32%; left: 40%; width: 20%; transform: rotate(58deg); }
        .pw-link--3 { top: 53%; left: 20%; width: 20%; transform: rotate(-10deg); }
        .pw-link--4 { top: 58%; left: 39%; width: 42%; transform: rotate(20deg); }
        .pw-link--5 { bottom: 24%; left: 19%; width: 54%; transform: rotate(2deg); }

        .pw-panel {
          position: absolute;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 22px;
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(8px);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
        }

        .pw-panel--primary {
          top: 13%;
          right: 10%;
          width: min(270px, 72%);
          padding: 1rem 1rem 1.1rem;
        }

        .pw-panel--secondary {
          left: 9%;
          bottom: 11%;
          width: min(220px, 55%);
          padding: 1rem;
        }

        .pw-panel-header {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin-bottom: 1rem;
          font-family: var(--co-mono);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          color: var(--co-text-3);
          text-transform: uppercase;
        }

        .pw-panel-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--co-red);
          box-shadow: 0 0 0 6px rgba(196, 30, 36, 0.08);
        }

        .pw-metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.75rem;
        }

        .pw-metrics small {
          display: block;
          margin-bottom: 0.35rem;
          font-family: var(--co-mono);
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--co-text-3);
        }

        .pw-metrics strong {
          display: block;
          font-size: 1.35rem;
          line-height: 1;
          color: var(--co-text-1);
        }

        /* ── Editorial text ─────────────────────────────────── */
        .pw-body-large {
          margin: 0 0 1rem;
          color: var(--co-text-2);
          line-height: 1.86;
          font-size: 1.02rem;
        }

        .pw-body-large:last-child {
          margin-bottom: 0;
        }

        .pw-statement {
          margin: 0 0 1rem;
          color: var(--co-text-1);
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          line-height: 1.3;
          letter-spacing: -0.03em;
        }

        /* ── Card system (principles + impact) ─────────────── */
        .pw-card-grid {
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

        .pw-card-grid--impact {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .pw-card {
          position: relative;
          padding: 2.1rem 2rem 1.8rem;
          background: var(--co-surface);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: default;
        }

        .pw-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(120px circle at 100% 100%,
            rgba(200,30,30,0.075) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 300ms ease;
          pointer-events: none;
        }

        .pw-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 64px;
          height: 64px;
          background: linear-gradient(
            135deg,
            rgba(100,116,139,0.055) 0%,
            transparent 60%
          );
          pointer-events: none;
        }

        .pw-card:hover {
          background: #fafbfe;
        }

        .pw-card:hover::before {
          opacity: 1;
        }

        .pw-card-shimmer {
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
        }

        .pw-card:hover .pw-card-shimmer {
          animation: pwCardShimmer 580ms ease-in-out;
        }

        .pw-card-texture {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(100,116,139,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,116,139,0.035) 1px, transparent 1px);
          background-size: 22px 22px;
          pointer-events: none;
          mask-image: linear-gradient(145deg, rgba(0,0,0,0.45) 0%, transparent 55%);
        }

        @keyframes pwCardShimmer {
          from { transform: translateX(-115%); }
          to   { transform: translateX(115%); }
        }

        .pw-card-top {
          margin-bottom: 1.65rem;
          position: relative;
          z-index: 1;
        }

        .pw-card-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--co-r-md);
          display: grid;
          place-items: center;
          color: var(--co-red);
          background: linear-gradient(
            145deg,
            rgba(200,30,30,0.08),
            rgba(200,30,30,0.04)
          );
          border: 1px solid var(--co-red-border);
          transition: background 250ms ease, border-color 250ms ease;
        }

        .pw-card:hover .pw-card-icon {
          background: linear-gradient(
            145deg,
            rgba(200,30,30,0.13),
            rgba(200,30,30,0.07)
          );
          border-color: rgba(200,30,30,0.28);
        }

        .pw-card-title {
          font-size: 1.125rem;
          font-weight: 700;
          letter-spacing: -0.028em;
          color: var(--co-text-1);
          margin: 0 0 0.6rem;
          line-height: 1.22;
          position: relative;
          z-index: 1;
        }

        .pw-card-desc {
          font-size: 0.905rem;
          line-height: 1.72;
          color: var(--co-text-2);
          position: relative;
          z-index: 1;
        }

        .pw-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding-top: 1.2rem;
          margin-top: 1.35rem;
          border-top: 1px solid var(--co-border);
          position: relative;
          z-index: 1;
        }

        .pw-card-meta {
          font-family: var(--co-mono);
          font-size: 0.62rem;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: var(--co-text-3);
        }

        .pw-card-tag {
          display: inline-flex;
          align-items: center;
          padding: 3px 9px;
          border-radius: 5px;
          background: rgba(15,23,42,0.04);
          border: 1px solid var(--co-border-md);
          font-family: var(--co-mono);
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--co-text-2);
          transition:
            background 240ms ease,
            border-color 240ms ease,
            color 240ms ease;
        }

        .pw-card:hover .pw-card-tag {
          background: rgba(200,30,30,0.05);
          border-color: var(--co-red-border);
          color: var(--co-red);
        }

        /* Impact-specific tweaks (index label) */
        .pw-impact-index {
          font-family: var(--co-mono);
          font-size: 0.64rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--co-red);
          margin-bottom: 1.4rem;
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .pw-impact-index::after {
          content: "";
          flex: 1;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(200,30,30,0.4),
            rgba(15,23,42,0.05)
          );
        }

        /* ── Vision panel & chips ───────────────────────────── */
        .pw-vision-panel {
          padding: clamp(1.6rem, 2vw, 2rem);
          border: 1px solid var(--co-border-md);
          border-radius: 30px;
          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.96),
            rgba(238,240,244,0.82)
          );
          box-shadow: 0 20px 48px rgba(15, 23, 42, 0.06);
        }

        .pw-vision-chips {
          display: grid;
          gap: 0.9rem;
        }

        .pw-vision-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          min-height: 56px;
          padding: 0.95rem 1rem;
          border-radius: 18px;
          border: 1px solid var(--co-border-md);
          background: rgba(255,255,255,0.84);
          color: var(--co-text-1);
          font-weight: 500;
        }

        .pw-vision-chip svg {
          color: var(--co-red);
        }

        /* ── Founder card ───────────────────────────────────── */
        .pw-founder-card {
          padding: clamp(1.3rem, 2vw, 1.8rem);
          border-radius: 26px;
          border: 1px solid var(--co-border-md);
          background: rgba(255,255,255,0.9);
          box-shadow: 0 18px 42px rgba(15, 23, 42, 0.06);
        }

        .pw-founder-badge {
          display: inline-flex;
          align-items: center;
          min-height: 28px;
          padding: 0 0.7rem;
          margin-bottom: 1rem;
          border-radius: 999px;
          background: rgba(196,30,36,0.08);
          border: 1px solid rgba(196,30,36,0.14);
          font-family: var(--co-mono);
          font-size: 0.7rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--co-red);
        }

        .pw-founder-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 1.4rem 0;
        }

        .pw-founder-divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--co-border-md) 40%,
            var(--co-border-md) 60%,
            transparent
          );
        }

        .pw-founder-divider-label {
          font-family: var(--co-mono);
          font-size: 0.61rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--co-text-3);
        }

        /* ── CTA actions ────────────────────────────────────── */
        .pw-cta-inner {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: clamp(1.5rem, 4vw, 3rem);
          align-items: end;
          padding: clamp(1.6rem, 2vw, 2rem);
          border-radius: 30px;
          border: 1px solid var(--co-border-md);
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.95),
            rgba(245,246,248,0.92)
          );
          box-shadow: 0 18px 44px rgba(15, 23, 42, 0.06);
        }

        .pw-cta-actions {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          flex-wrap: wrap;
        }

        .pw-cta-primary {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          min-width: 220px;
          padding: 12px 24px;
          border-radius: var(--co-r-sm);
          border: none;
          background: var(--co-red);
          color: #fff;
          box-shadow: 0 14px 26px rgba(196, 30, 36, 0.2);
          cursor: pointer;
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition:
            background 220ms ease,
            box-shadow 220ms ease,
            transform 220ms ease;
        }

        .pw-cta-primary:hover {
          background: var(--co-red-hover);
          transform: translateY(-2px);
          box-shadow: 0 18px 30px rgba(196, 30, 36, 0.24);
        }

        .pw-cta-primary-shimmer {
          position: absolute;
          inset: 0;
          width: 45%;
          background: linear-gradient(
            105deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          transform: translateX(-120%);
          pointer-events: none;
        }

        .pw-cta-primary:hover .pw-cta-primary-shimmer {
          animation: pwCtaSweep 900ms ease;
        }

        @keyframes pwCtaSweep {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(260%); }
        }

        .pw-cta-primary-content {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .pw-btn-ghost {
          min-height: 48px;
          padding: 12px 20px;
          border-radius: var(--co-r-sm);
          border: 1px solid var(--co-border-md);
          background: rgba(255,255,255,0.82);
          color: var(--co-text-1);
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          transition:
            transform 220ms ease,
            border-color 220ms ease,
            color 220ms ease;
        }

        .pw-btn-ghost:hover {
          transform: translateY(-2px);
          border-color: rgba(196, 30, 36, 0.2);
          color: var(--co-red);
        }

        /* ── Scroll reveal: opacity only (no layout shift) ─── */
        [data-reveal] {
          opacity: 0;
          transition: opacity 700ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        [data-reveal].is-visible {
          opacity: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          [data-reveal] {
            opacity: 1 !important;
            transition: none !important;
          }
        }

        /* ── Image shells (hero, vision, founder) ──────────── */
        .pw-image-shell {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          border: none;
          box-shadow: none;
          background: transparent;
        }

        .pw-image-shell img {
          display: block;
          width: 100%;
          height: auto;
          max-height: 100%;
          object-fit: contain;
          mix-blend-mode: normal;
        }

        .pw-image-shell--hero {
          min-height: 320px;
        }

        .pw-image-shell--vision,
        .pw-image-shell--founder {
          min-height: 260px;
        }

        .pw-image-shell::after {
          content: none;
        }

        /* ── Responsive ─────────────────────────────────────── */
        @media (max-width: 1100px) {
          .pw-grid-hero,
          .pw-grid-editorial,
          .pw-grid-vision,
          .pw-grid-founder,
          .pw-cta-inner {
            grid-template-columns: 1fr;
          }

          .pw-card-grid--impact {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pw-topology {
            min-height: 430px;
          }

          .pw-about .container-custom {
            width: calc(100% - 2.5rem);
          }
        }

        @media (max-width: 860px) {
          .pw-section--hero {
            padding-top: 140px;
            padding-bottom: 72px;
          }

          .pw-grid-hero {
            grid-template-columns: 1fr;
            gap: 40px;
            justify-items: center;
            text-align: center;
          }

          .pw-grid-hero > div:first-child {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .pw-heading {
            font-size: clamp(2.1rem, 6vw, 2.7rem);
            margin-bottom: 24px;
            max-width: 14ch;
            margin-top: 24px;
          }

          .pw-lead {
            max-width: 34ch;
            font-size: 0.98rem;
          }

          .pw-grid-vision,
          .pw-grid-founder {
            gap: 32px;
          }

          .pw-vision-panel,
          .pw-founder-card {
            padding: 1.4rem;
          }

          .pw-image-shell--hero {
            max-width: 420px;
            margin-inline: auto;
          }

          .pw-image-shell--vision,
          .pw-image-shell--founder {
            max-width: 380px;
            margin-inline: auto;
          }
        }

        @media (max-width: 720px) {
          
          .pw-card-grid,
          .pw-card-grid--impact {
            grid-template-columns: 1fr;
          }

          .pw-topology {
            min-height: 340px;
            border-radius: 22px;
          }

          .pw-panel--primary {
            width: 72%;
            right: 6%;
            top: 10%;
          }

          .pw-panel--secondary {
            width: 54%;
            left: 6%;
            bottom: 8%;
          }

          .pw-cta-actions {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
          }

          .pw-cta-primary,
          .pw-btn-ghost {
            width: 100%;
          }

          .pw-about .container-custom {
            width: calc(100% - 2rem);
          }

          .pw-grid-editorial {
            text-align: left;
          }
        }

        @media (max-width: 640px) {
          .pw-about .container-custom {
            width: calc(100% - 1.75rem);
          }

          .pw-heading {
            font-size: clamp(1.95rem, 7vw, 2.3rem);
            line-height: 1.08;
            letter-spacing: -0.035em;
          }

          .pw-lead,
          .pw-body-large {
            font-size: 0.94rem;
            line-height: 1.7;
          }

          .pw-section-title {
            margin-bottom: 2rem;
          }

          .pw-card {
            padding: 1.8rem 1.5rem 1.7rem;
          }

          .pw-image-shell--hero,
          .pw-image-shell--vision,
          .pw-image-shell--founder {
            min-height: 0;
          }
        }

       
        }
      `}</style>

      <div className="pw-about" ref={rootRef}>
        <div className="pw-about__bg-grid" aria-hidden="true" />
        <div className="pw-about__bg-fade" aria-hidden="true" />
        <div className="pw-top-rule" aria-hidden="true" />

        {/* HERO */}
        <section className="pw-section pw-section--hero">
          <div className="container-custom">
            <div className="pw-grid-hero">
              <div data-reveal>
                <p className="pw-eyebrow">
                  <span className="pw-eyebrow-dot pw-eyebrow-dot--pulse" />
                  ABOUT PEDZAWORKS
                </p>
                <h2 className="pw-heading">
                  Engineering Systems <br /> That Power{" "}
                  <mark> Better Operations</mark>
                </h2>
                <p className="pw-lead">
                  Pedzaworks Digital Solutions builds operational software
                  systems, workflow platforms, and connected digital
                  infrastructure designed to help organizations operate with
                  greater clarity, coordination, and confidence.
                </p>
              </div>

              <div data-reveal aria-hidden="true">
                {/* transparent hero image instead of topology + system architecture card */}
                <div className="pw-image-shell pw-image-shell--hero">
                  <img
                    src={aboutHeroImage}
                    alt="Pedzaworks operational systems illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY WE EXIST */}
        <section className="pw-section pw-section--soft">
          <div className="container-custom">
            <div className="pw-grid-editorial" data-reveal>
              <div>
                <p className="pw-eyebrow">
                  <span className="pw-eyebrow-dot" />
                  Why We Exist
                </p>
                <h2 className="pw-heading">
                  A Problem <mark>Worth Solving</mark>
                </h2>
              </div>
              <div>
                <p className="pw-body-large">
                  Many organizations still operate through fragmented tools,
                  disconnected processes, and limited operational visibility.
                </p>
                <p className="pw-body-large">
                  Pedzaworks was created to help organizations transition from
                  operational chaos to connected digital systems that improve
                  coordination, efficiency, and decision-making — not by
                  digitizing existing chaos, but by redesigning how work
                  actually gets done.
                </p>
                <p className="pw-body-large">
                  We believe operational software should be a genuine advantage.
                  The organizations that operate with the most clarity,
                  coordination, and precision will be the ones that endure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE THINK */}
        <section className="pw-section">
          <div className="container-custom">
            <div className="pw-section-title" data-reveal>
              <p className="pw-eyebrow">
                <span className="pw-eyebrow-dot" />
                Our Approach
              </p>
              <h2 className="pw-heading">
                How We Think About <mark>Software</mark>
              </h2>
              <p className="pw-lead">
                Four engineering principles that shape every system we design.
              </p>
            </div>

            <div className="pw-divider" aria-hidden="true">
              <div className="pw-divider-line" />
              <span className="pw-divider-label">
                04 principles · engineering philosophy
              </span>
              <div className="pw-divider-line" />
            </div>

            <div
              className="pw-card-grid"
              role="list"
              aria-label="Engineering principles"
            >
              {principles.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="pw-card"
                    role="listitem"
                    data-reveal
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="pw-card-shimmer" aria-hidden="true" />
                    <div className="pw-card-texture" aria-hidden="true" />

                    <div className="pw-card-top">
                      <div className="pw-card-icon" aria-hidden="true">
                        <Icon size={18} strokeWidth={2} />
                      </div>
                    </div>

                    <h3 className="pw-card-title">{item.title}</h3>
                    <p className="pw-card-desc">{item.text}</p>

                    <div className="pw-card-footer">
                      <span className="pw-card-meta">{item.meta}</span>
                      <span className="pw-card-tag">{item.tag}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* OUR IMPACT */}
        <section className="pw-section pw-section--soft">
          <div className="container-custom">
            <div className="pw-section-title" data-reveal>
              <p className="pw-eyebrow">
                <span className="pw-eyebrow-dot" />
                Our Impact
              </p>
              <h2 className="pw-heading">
                How We Measure <mark>Success</mark>
              </h2>
              <p className="pw-lead">
                We measure outcomes, not outputs. Good software changes how an
                organization operates — not just what it looks like.
              </p>
            </div>

            <div className="pw-divider" aria-hidden="true">
              <div className="pw-divider-line" />
              <span className="pw-divider-label">
                03 outcome dimensions · strategic
              </span>
              <div className="pw-divider-line" />
            </div>

            <div
              className="pw-card-grid pw-card-grid--impact"
              role="list"
              aria-label="How we measure success"
            >
              {impactBlocks.map((item, index) => (
                <article
                  key={item.title}
                  className="pw-card"
                  role="listitem"
                  data-reveal
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="pw-card-shimmer" aria-hidden="true" />
                  <div className="pw-card-texture" aria-hidden="true" />

                  <p className="pw-impact-index">{item.index}</p>
                  <h3 className="pw-card-title">{item.title}</h3>
                  <p className="pw-card-desc">{item.desc}</p>

                  <div className="pw-card-footer">
                    <span className="pw-card-meta">{item.meta}</span>
                    <span className="pw-card-tag">{item.tag}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* VISION (with image) */}
        <section className="pw-section">
          <div className="container-custom">
            <div className="pw-vision-panel pw-grid-vision" data-reveal>
              <div>
                <p className="pw-eyebrow">
                  <span className="pw-eyebrow-dot" />
                  Our Vision
                </p>
                <h2 className="pw-heading">
                  Building Africa&apos;s Operational <mark>Infrastructure</mark>
                </h2>
                <p className="pw-body-large">
                  Africa&apos;s organizations are growing rapidly — and the
                  operational infrastructure to support that growth needs to
                  grow with them. Many still rely on manual processes and
                  disconnected systems that limit what they can achieve.
                </p>
                <p className="pw-body-large">
                  Our long-term vision is to help businesses, institutions, and
                  organizations across Africa build the digital foundations
                  needed to operate with the same precision, clarity, and
                  confidence as the world&apos;s best-run organizations —
                  regardless of size or sector.
                </p>
                <p className="pw-body-large">
                  We believe operational excellence should not be a privilege of
                  large enterprises. Every organization deserves software that
                  actually helps them operate better.
                </p>
              </div>

              {/* transparent vision image */}
              <div aria-hidden="true">
                <div className="pw-image-shell pw-image-shell--vision">
                  <img
                    src={visionImage}
                    alt="Vision illustration for Africa's operational infrastructure"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDER (with image) */}
        <section className="pw-section pw-section--soft">
          <div className="container-custom">
            <div className="pw-grid-founder" data-reveal>
              {/* transparent founder image + heading */}
              <div aria-hidden="true">
                <p className="pw-eyebrow">
                  <span className="pw-eyebrow-dot" />
                  The Founder
                </p>
                <h2 className="pw-heading">
                  Founded By <br />
                  <mark>Builders</mark>
                </h2>

                <div className="pw-image-shell pw-image-shell--founder">
                  <img src={founderImage} alt="Founder of Pedzaworks" />
                </div>
              </div>

              <div className="pw-founder-card">
                <div className="pw-founder-badge">Founder &amp; Builder</div>
                <h3 className="pw-card-title">
                  Tinotenda Maxwell Mapedzamombe
                </h3>
                <p className="pw-body-large">
                  Pedzaworks Digital Solutions was founded by Tinotenda Maxwell
                  Mapedzamombe, a builder, systems engineer, and entrepreneur
                  focused on developing operational software systems and
                  connected digital infrastructure for modern organizations.
                </p>

                <div className="pw-founder-divider" aria-hidden="true">
                  <div className="pw-founder-divider-line" />
                  <span className="pw-founder-divider-label">Background</span>
                  <div className="pw-founder-divider-line" />
                </div>

                <p className="pw-body-large">
                  With a background in Electronics and Communication
                  Engineering, and a passion for software development, IoT, and
                  the integration of hardware and software systems, his work
                  sits at the intersection of software, operations, and
                  connected infrastructure — a perspective that shapes how
                  Pedzaworks approaches every project.
                </p>
                <p className="pw-body-large">
                  Pedzaworks was founded on the belief that software should
                  solve operational problems, not simply digitize them. We
                  believe the most effective technology is built around real
                  operational challenges, helping organizations improve
                  visibility, streamline workflows, strengthen coordination, and
                  make better decisions through systems designed for long-term
                  impact and growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
