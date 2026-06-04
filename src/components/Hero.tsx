import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Users, Layers } from "lucide-react";
import heroImage from "../assets/hero.png";

gsap.registerPlugin(ScrollTrigger);

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ icon, value, label }) => (
  <div className="pw-hero__stat">
    <span className="pw-hero__stat-icon">{icon}</span>
    <span className="pw-hero__stat-text">
      <span className="pw-hero__stat-value">{value}</span> {label}
    </span>
  </div>
);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from("[data-hero-badge]", {
        y: 18,
        autoAlpha: 0,
        duration: 0.55,
      })
        .from(
          "[data-hero-headline]",
          {
            y: 28,
            autoAlpha: 0,
            duration: 0.75,
          },
          "-=0.1",
        )
        .from(
          "[data-hero-subline]",
          {
            y: 18,
            autoAlpha: 0,
            duration: 0.6,
          },
          "-=0.35",
        )
        .from(
          "[data-hero-actions] > *",
          {
            y: 16,
            autoAlpha: 0,
            stagger: 0.12,
            duration: 0.45,
          },
          "-=0.25",
        )
        .from(
          "[data-hero-stats] > *",
          {
            y: 14,
            autoAlpha: 0,
            stagger: 0.1,
            duration: 0.45,
          },
          "-=0.2",
        )
        .from(
          "[data-hero-image]",
          {
            x: 42,
            scale: 0.97,
            autoAlpha: 0,
            duration: 0.9,
          },
          "-=0.7",
        )
        .from(
          "[data-hero-float]",
          {
            y: 16,
            autoAlpha: 0,
            duration: 0.5,
          },
          "-=0.45",
        );

      gsap.to("[data-hero-content]", {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: heroEl,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.to("[data-hero-image]", {
        yPercent: 3,
        scale: 1.02,
        ease: "none",
        scrollTrigger: {
          trigger: heroEl,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.to("[data-hero-float]", {
        y: -8,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, heroEl);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .pw-hero {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 126px;
          padding-bottom: 80px;
          position: relative;
          overflow: hidden;
          background: var(--pw-bg-base);
        }

        .pw-hero::before {
          content: "";
          position: absolute;
          width: 720px;
          height: 720px;
          background: radial-gradient(circle, rgba(200,30,30,0.055) 0%, transparent 65%);
          top: -100px;
          right: -80px;
          pointer-events: none;
          z-index: 0;
        }

        .pw-hero__container {
          width: min(1280px, calc(100% - 3rem));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 580px;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .pw-hero__content {
          max-width: 620px;
        }

        .pw-hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(200, 30, 30, 0.07);
          color: var(--pw-red);
          padding: 5px 14px;
          border-radius: 100px;
          font-family: 'DM Mono', monospace;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 48px;
          border: 1px solid rgba(200, 30, 30, 0.16);
        }

        .pw-hero__headline {
          font-family: 'DM Sans', sans-serif;
          font-size: 40px;
          font-weight: 800;
          color: var(--pw-text-primary);
          line-height: 1.06;
          letter-spacing: -0.04em;
          margin-bottom: 20px;
        }

        .pw-hero__headline-accent {
          background: linear-gradient(135deg, var(--pw-text-primary) 0%, var(--pw-red) 60%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pw-hero__subline {
          font-size: 1.0625rem;
          color: var(--pw-text-secondary);
          line-height: 1.7;
          margin-bottom: 50px;
          max-width: 520px;
        }

        .pw-hero__actions {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .pw-hero__cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--pw-red);
          color: #fff;
          border-radius: var(--pw-r-sm);
          padding: 14px 28px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(200, 30, 30, 0.28);
          transition: background var(--pw-t-fast), box-shadow var(--pw-t-fast), transform var(--pw-t-fast);
          white-space: nowrap;
        }

        .pw-hero__cta-primary:hover {
          background: var(--pw-red-hover);
          transform: translateY(-2px);
          box-shadow: var(--pw-shadow-red);
        }

        .pw-hero__cta-primary:active {
          transform: translateY(0);
        }

        .pw-hero__cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(14, 7, 7, 0.04);
          color: var(--pw-text-primary);
          border: 1.5px solid rgba(8, 8, 8, 0.28);
          border-radius: var(--pw-r-sm);
          padding: 14px 28px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          transition: border-color var(--pw-t-fast), color var(--pw-t-fast), transform var(--pw-t-fast), box-shadow var(--pw-t-fast), background var(--pw-t-fast);
        }

        .pw-hero__cta-secondary:hover {
          border-color: rgba(200, 30, 30, 0.5);
          background: rgba(200, 30, 30, 0.07);
          color: var(--pw-red);
          transform: translateY(-2px);
          box-shadow: var(--pw-shadow-sm);
        }

        .pw-hero__stats {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
          align-items: center;
          transform: translateX(-28px);
        }

        .pw-hero__stat {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .pw-hero__stat-divider {
          width: 1px;
          height: 20px;
          background: var(--pw-border);
        }

        .pw-hero__stat-icon {
          color: var(--pw-red);
          flex-shrink: 0;
          display: flex;
        }

        .pw-hero__stat-text {
          font-size: 0.875rem;
          font-weight: 400;
          color: var(--pw-text-secondary);
          line-height: 1.3;
          white-space: nowrap;
        }

        .pw-hero__stat-value {
          color: var(--pw-text-primary);
          font-weight: 700;
        }

        .pw-hero__visual {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          min-height: 540px;
          align-self: stretch;
        }

        .pw-hero__image-wrapper {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          height: 100%;
          min-height: 580px;
        }

        .pw-hero__image {
          width: auto;
          height: 550px;
          max-height: none;
          object-fit: contain;
          object-position: bottom center;
          filter: drop-shadow(0 16px 40px rgba(15, 23, 42, 0.08));
        }

        .pw-hero__float {
          position: absolute;
          top: 56px;
          right: 20px;
          background: var(--pw-bg-surface);
          border: 1px solid var(--pw-border);
          border-radius: var(--pw-r-md);
          padding: 12px 16px;
          box-shadow: var(--pw-shadow-lg);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 10;
          will-change: transform, opacity;
        }

        .pw-hero__float-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(200, 30, 30, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--pw-red);
          flex-shrink: 0;
        }

        .pw-hero__float-title {
          display: block;
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--pw-text-primary);
          line-height: 1.2;
          margin-bottom: 3px;
          white-space: nowrap;
        }

        .pw-hero__float-sub {
          display: block;
          font-family: 'DM Mono', monospace;
          font-size: 0.625rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: var(--pw-text-muted);
          text-transform: uppercase;
          white-space: nowrap;
        }

        .pw-hero__badge,
        .pw-hero__headline,
        .pw-hero__subline,
        .pw-hero__actions > *,
        .pw-hero__stats > *,
        .pw-hero__image {
          will-change: transform, opacity;
        }

        .pw-hero__cta-primary,
        .pw-hero__cta-secondary {
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            background-color 180ms ease,
            border-color 180ms ease,
            color 180ms ease;
        }

        .pw-hero__cta-primary:hover,
        .pw-hero__cta-secondary:hover {
          transform: translateY(-1px);
        }

        @media (max-width: 860px) {
          .pw-hero {
            padding-top: 112px;
            padding-bottom: 72px;
            min-height: 100vh;
          }

          .pw-hero__container {
            grid-template-columns: 1fr;
            width: calc(100% - 2rem);
            gap: 40px;
            justify-items: center;
            text-align: center;
          }

          .pw-hero__visual {
            display: none;
          }

          .pw-hero__content {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .pw-hero__badge {
            margin-top: -30px;
          }

          .pw-hero__headline {
            font-size: clamp(2.1rem, 6vw, 2.7rem);
            margin-bottom: 24px;
            max-width: 12ch;
            margin-top: 30px;
          }

          .pw-hero__subline {
            max-width: 34ch;
            font-size: 0.98rem;
            margin-bottom: 36px;
          }

          .pw-hero__actions {
            flex-direction: column;
            align-items: stretch;
            gap: 14px;
            margin-bottom: 36px;
            width: 100%;
            max-width: 360px;
          }

          .pw-hero__cta-primary,
          .pw-hero__cta-secondary {
            width: 100%;
            justify-content: center;
          }

          .pw-hero__stats {
            margin-top: 30px;
            gap: 18px;
            transform: translateX(0);
            justify-content: center;
          }

          .pw-hero__stat-divider {
            display: none;
          }

          .pw-hero__stat {
            justify-content: center;
          }

          .pw-hero__stat-text {
            white-space: normal;
          }
        }

        @media (max-width: 640px) {
          .pw-hero {
            padding-top: 108px;
            padding-bottom: 64px;
          }

          .pw-hero__container {
            width: calc(100% - 1.75rem);
            gap: 32px;
          }

          .pw-hero__badge {
            font-size: 0.625rem;
            margin-bottom: 18px;
          }

          .pw-hero__headline {
            font-size: clamp(1.95rem, 8vw, 2.35rem);
            letter-spacing: -0.035em;
            line-height: 1.08;
          }

          .pw-hero__subline {
            font-size: 0.9375rem;
            margin-bottom: 28px;
            line-height: 1.65;
          }

          .pw-hero__actions {
            gap: 12px;
            margin-bottom: 28px;
          }

          .pw-hero__cta-primary,
          .pw-hero__cta-secondary {
            padding: 15px 18px;
            min-height: 48px;
          }

          .pw-hero__stats {
            display: grid;
            grid-template-columns: 1fr;
            gap: 14px;
            align-items: start;
            width: 100%;
            max-width: 360px;
          }

          .pw-hero__stat {
            align-items: flex-start;
            gap: 10px;
          }

          .pw-hero__stat-text {
            white-space: normal;
            font-size: 0.8125rem;
          }
        }

        @media (max-width: 480px) {
          .pw-hero__container {
            width: calc(100% - 1.5rem);
            gap: 28px;
          }

          .pw-hero__badge {
            margin-bottom: 16px;
          }

          .pw-hero__headline {
            font-size: 1.9rem;
          }

          .pw-hero__subline {
            font-size: 0.875rem;
          }

          .pw-hero__actions {
            margin-bottom: 24px;
          }

          .pw-hero__stats {
            gap: 12px;
          }
        }
      `}</style>

      <section className="pw-hero" id="home" aria-label="Hero" ref={heroRef}>
        <div className="pw-hero__container">
          <div className="pw-hero__content" data-hero-content>
            <div className="pw-hero__badge" data-hero-badge>
              <CheckCircle size={12} strokeWidth={2.5} />
              Engineering Intelligent Operations
            </div>

            <h1 className="pw-hero__headline" data-hero-headline>
              Building{" "}
              <span className="pw-hero__headline-accent">
                Intelligent Systems
              </span>{" "}
              For the Connected World.
            </h1>

            <p className="pw-hero__subline" data-hero-subline>
              Pedzaworks integrates software, IoT, embedded systems, and
              automation into one connected infrastructure — built for
              enterprises that demand precision, reliability, and scale.
            </p>

            <div className="pw-hero__actions" data-hero-actions>
              <a href="#contact" className="pw-hero__cta-primary">
                Start a project
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#solutions" className="pw-hero__cta-secondary">
                View Solutions
              </a>
            </div>

            <div
              className="pw-hero__stats"
              role="list"
              aria-label="Company metrics"
              data-hero-stats
            >
              <div className="pw-hero__stat-divider" aria-hidden="true" />
              <Stat
                icon={<Layers size={17} strokeWidth={2} />}
                value="100%"
                label="End-to-End Integration"
              />
              <div className="pw-hero__stat-divider" aria-hidden="true" />
              <Stat
                icon={<Users size={17} strokeWidth={2} />}
                value="IoT + Cloud"
                label="Connected Ecosystems"
              />
            </div>
          </div>

          <div className="pw-hero__visual">
            <div className="pw-hero__image-wrapper" data-hero-image>
              <img
                src={heroImage}
                alt="Pedzaworks intelligent infrastructure"
                className="pw-hero__image"
              />
              <div
                className="pw-hero__float"
                aria-hidden="true"
                data-hero-float
              >
                <div className="pw-hero__float-icon">
                  <CheckCircle size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <span className="pw-hero__float-title">Enterprise Grade</span>
                  <span className="pw-hero__float-sub">Systems Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
