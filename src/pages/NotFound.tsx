// src/pages/NotFound.tsx
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";

const SUGGESTIONS = [
  { label: "Services", to: "/services", text: "What we build" },
  { label: "Industries", to: "/industries", text: "Who we work with" },
  { label: "About", to: "/about", text: "How we think" },
  { label: "Contact", to: "/contact", text: "Start a project" },
];

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for doesn't exist or has moved."
        url={`https://www.pedzaworks.com${pathname}`}
        robots="noindex, nofollow"
      />

      <div className="pw-404">
        <div className="pw-404__container">
          <p className="pw-404__code" aria-hidden="true">
            404
          </p>
          <div className="pw-404__eyebrow">
            <span className="pw-404__dot" aria-hidden="true" />
            Page Not Found
          </div>
          <h1 className="pw-404__heading">
            This route isn&apos;t <mark>connected.</mark>
          </h1>
          <p className="pw-404__lead">
            The page <code>{pathname}</code> doesn&apos;t exist or may have
            moved. Try one of the links below or head back home.
          </p>

          <div className="pw-404__actions">
            <Link to="/" className="pw-404__btn">
              Back to Home
              <ArrowRight size={15} strokeWidth={2.2} />
            </Link>
            <Link to="/contact" className="pw-404__btn pw-404__btn--ghost">
              Contact Us
            </Link>
          </div>

          <ul className="pw-404__links">
            {SUGGESTIONS.map(({ label, to, text }) => (
              <li key={to}>
                <Link to={to} className="pw-404__card">
                  <span className="pw-404__card-label">{label}</span>
                  <span className="pw-404__card-text">{text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .pw-404 {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(160deg, #edf1f7 0%, #f3f6fa 55%, #eef1f6 100%);
          padding: clamp(136px, 15vw, 180px) 0 clamp(72px, 9vw, 112px);
          overflow: hidden;
        }

        .pw-404__container {
          position: relative;
          width: 100%;
          max-width: 880px;
          margin: 0 auto;
          padding: 0 max(16px, var(--pw-container-gutter));
          text-align: center;
        }

        .pw-404__code {
          position: absolute;
          inset: -60px 0 auto;
          margin: 0;
          font-family: "Montserrat", sans-serif;
          font-weight: 900;
          font-size: clamp(9rem, 28vw, 18rem);
          line-height: 1;
          color: rgba(200, 30, 30, 0.06);
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }

        .pw-404__container > *:not(.pw-404__code) {
          position: relative;
          z-index: 1;
        }

        .pw-404__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: "DM Mono", monospace;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--pw-red);
          margin-bottom: 16px;
        }

        .pw-404__dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--pw-red);
        }

        .pw-404__heading {
          font-family: "Montserrat", sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 5.5vw, 3.5rem);
          line-height: 1.1;
          color: var(--pw-text-primary);
          margin: 0 0 16px;
        }

        .pw-404__heading mark {
          background: none;
          color: var(--pw-red);
        }

        .pw-404__lead {
          max-width: 560px;
          margin: 0 auto 32px;
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--pw-text-secondary);
        }

        .pw-404__lead code {
          font-family: "DM Mono", monospace;
          font-size: 0.9em;
          padding: 2px 6px;
          border-radius: var(--pw-r-xs);
          background: var(--pw-bg-elevated);
          color: var(--pw-text-primary);
          word-break: break-all;
        }

        .pw-404__actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 48px;
        }

        .pw-404__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          background: var(--pw-red);
          color: #fff;
          box-shadow: var(--pw-shadow-red);
          transition: background var(--pw-t-fast), transform var(--pw-t-fast);
        }

        .pw-404__btn:hover {
          background: var(--pw-red-hover);
          transform: translateY(-1px);
        }

        .pw-404__btn--ghost {
          background: var(--pw-bg-surface);
          color: var(--pw-text-primary);
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: var(--pw-shadow-sm);
        }

        .pw-404__btn--ghost:hover {
          background: var(--pw-bg-surface);
          color: var(--pw-red);
        }

        .pw-404__links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
        }

        .pw-404__card {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 18px 16px;
          border-radius: var(--pw-r-md);
          background: var(--pw-bg-surface);
          border: 1px solid var(--pw-border);
          box-shadow: var(--pw-shadow-sm);
          text-decoration: none;
          text-align: left;
          transition: border-color var(--pw-t-fast), transform var(--pw-t-fast);
        }

        .pw-404__card:hover {
          border-color: rgba(200, 30, 30, 0.3);
          transform: translateY(-2px);
        }

        .pw-404__card-label {
          font-weight: 600;
          color: var(--pw-text-primary);
        }

        .pw-404__card-text {
          font-size: 0.85rem;
          color: var(--pw-text-muted);
        }

        @media (max-width: 720px) {
          .pw-404__links {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </>
  );
}
