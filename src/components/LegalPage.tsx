// src/components/LegalPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import SEO from "./SEO";

export interface LegalSection {
  id: string;
  title: string;
  body: React.ReactNode;
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
  lastUpdated: string;
  seoTitle: string;
  seoDescription: string;
  url: string;
  sections: LegalSection[];
  related: { label: string; to: string };
}

const LegalPage: React.FC<LegalPageProps> = ({
  eyebrow,
  title,
  intro,
  lastUpdated,
  seoTitle,
  seoDescription,
  url,
  sections,
  related,
}) => (
  <>
    <SEO
      title={seoTitle}
      description={seoDescription}
      url={url}
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `${seoTitle} | Pedzaworks Digital Solutions`,
        url,
        description: seoDescription,
        dateModified: lastUpdated,
      }}
    />

    <div className="pw-legal">
      <div className="pw-legal__container">
        <header className="pw-legal__header">
          <div className="pw-legal__eyebrow">
            <span className="pw-legal__eyebrow-dot" aria-hidden="true" />
            {eyebrow}
          </div>
          <h1 className="pw-legal__heading">{title}</h1>
          <p className="pw-legal__meta">
            Last updated:{" "}
            <time dateTime={lastUpdated}>
              {new Date(lastUpdated).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
                timeZone: "UTC",
              })}
            </time>
          </p>
          <div className="pw-legal__intro">{intro}</div>
        </header>

        <div className="pw-legal__layout">
          <nav className="pw-legal__toc" aria-label="On this page">
            <p className="pw-legal__toc-heading">On this page</p>
            <ol>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="pw-legal__body">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="pw-legal__section">
                <h2>
                  <span className="pw-legal__num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </h2>
                {s.body}
              </section>
            ))}

            <p className="pw-legal__related">
              See also: <Link to={related.to}>{related.label}</Link>
            </p>
          </article>
        </div>
      </div>
    </div>

    <style>{`
      .pw-legal {
        background: linear-gradient(160deg, #edf1f7 0%, #f3f6fa 55%, #eef1f6 100%);
        padding: clamp(136px, 15vw, 190px) 0 clamp(72px, 9vw, 112px);
        color: var(--pw-text-primary);
      }

      .pw-legal__container {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 max(16px, var(--pw-container-gutter));
      }

      .pw-legal__header {
        max-width: 760px;
        margin-bottom: clamp(40px, 6vw, 64px);
      }

      .pw-legal__eyebrow {
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

      .pw-legal__eyebrow-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--pw-red);
      }

      .pw-legal__heading {
        font-family: "Montserrat", sans-serif;
        font-weight: 800;
        font-size: clamp(2rem, 5vw, 3.25rem);
        line-height: 1.1;
        margin: 0 0 12px;
      }

      .pw-legal__meta {
        font-family: "DM Mono", monospace;
        font-size: 0.8rem;
        color: var(--pw-text-muted);
        margin: 0 0 24px;
      }

      .pw-legal__intro p {
        font-size: 1.05rem;
        line-height: 1.7;
        color: var(--pw-text-secondary);
        margin: 0 0 12px;
      }

      .pw-legal__layout {
        display: grid;
        grid-template-columns: 240px minmax(0, 1fr);
        gap: clamp(32px, 5vw, 64px);
        align-items: start;
      }

      .pw-legal__toc {
        position: sticky;
        top: 120px;
        font-size: 0.875rem;
      }

      .pw-legal__toc-heading {
        font-family: "DM Mono", monospace;
        font-size: 0.7rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--pw-text-muted);
        margin: 0 0 12px;
      }

      .pw-legal__toc ol {
        list-style: none;
        margin: 0;
        padding: 0;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
      }

      .pw-legal__toc a {
        display: block;
        padding: 6px 0 6px 14px;
        color: var(--pw-text-secondary);
        text-decoration: none;
        transition: color var(--pw-t-fast);
      }

      .pw-legal__toc a:hover,
      .pw-legal__toc a:focus-visible {
        color: var(--pw-red);
      }

      .pw-legal__body {
        background: var(--pw-bg-surface);
        border: 1px solid var(--pw-border);
        border-radius: var(--pw-r-lg);
        box-shadow: var(--pw-shadow-sm);
        padding: clamp(24px, 4vw, 48px);
      }

      .pw-legal__section {
        scroll-margin-top: 120px;
        padding-bottom: 28px;
        margin-bottom: 28px;
        border-bottom: 1px solid var(--pw-border);
      }

      .pw-legal__section:last-of-type {
        border-bottom: none;
        margin-bottom: 0;
      }

      .pw-legal__section h2 {
        display: flex;
        align-items: baseline;
        gap: 12px;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 1.25rem;
        margin: 0 0 14px;
      }

      .pw-legal__num {
        font-family: "DM Mono", monospace;
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--pw-red);
      }

      .pw-legal__section h3 {
        font-size: 1rem;
        font-weight: 600;
        margin: 18px 0 8px;
      }

      .pw-legal__section p,
      .pw-legal__section li {
        font-size: 0.975rem;
        line-height: 1.75;
        color: var(--pw-text-secondary);
      }

      .pw-legal__section p {
        margin: 0 0 12px;
      }

      .pw-legal__section ul {
        margin: 0 0 12px;
        padding-left: 1.25rem;
      }

      .pw-legal__section li {
        margin-bottom: 6px;
      }

      .pw-legal__section strong {
        color: var(--pw-text-primary);
        font-weight: 600;
      }

      .pw-legal__body a,
      .pw-legal__intro a {
        color: var(--pw-red);
      }

      .pw-legal__related {
        margin: 32px 0 0;
        font-size: 0.9rem;
        color: var(--pw-text-muted);
      }

      @media (max-width: 860px) {
        .pw-legal__layout {
          grid-template-columns: 1fr;
        }

        .pw-legal__toc {
          position: static;
        }

        .pw-legal {
          padding-top: 140px;
        }
      }
    `}</style>
  </>
);

export default LegalPage;
