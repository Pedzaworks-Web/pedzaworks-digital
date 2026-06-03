// src/components/Footer.tsx
import React from "react";
import "./styles/footer.css";

/* ── Data ── */

const SOLUTIONS = [
  { label: "Education & Institutions", href: "/industries#education" },
  { label: "Service Businesses", href: "/industries#services" },
  { label: "Logistics & Transport", href: "/industries#logistics" },
  { label: "SMEs & Growing Businesses", href: "/industries#smes" },
  { label: "Community Organizations", href: "/industries#community" },
  { label: "Connected Infrastructure", href: "/industries#infra" },
];

const COMPANY = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/#systems-showcase" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  value: string;
}

const CONTACT: ContactItem[] = [
  {
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    href: "mailto:admin@pedzaworks.com",
    value: "admin@pedzaworks.com",
  },
  {
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.12 6.12l.99-.99a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone",
    href: "tel:+263771926517",
    value: "+263 77 192 6517",
  },
  {
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    href: "https://maps.google.com/?q=Harare,Zimbabwe",
    value: "Harare, Zimbabwe",
  },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/pedzaworks",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/pedzaworks",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

/* ── Sub-components ── */
const FooterCol: React.FC<{ heading: string; children: React.ReactNode }> = ({
  heading,
  children,
}) => (
  <div className="pw-footer__col">
    <h3 className="pw-footer__col-heading">{heading}</h3>
    {children}
  </div>
);

/* ── Main component ── */
const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pw-footer" role="contentinfo">
      {/* Top gradient divider */}
      <div className="pw-footer__divider" aria-hidden="true" />

      <div className="pw-footer__container">
        {/* Upper grid */}
        <div className="pw-footer__grid">
          {/* Brand */}
          <div className="pw-footer__col pw-footer__col--brand">
            <a
              href="/"
              className="pw-footer__brand"
              aria-label="Pedzaworks Digital Solutions logo"
            >
              <img
                src="/footer.png"
                alt="Pedzaworks Digital Solutions logo"
                className="pw-footer__brand-image"
                loading="lazy"
              />
            </a>

            <p className="pw-footer__mission">
              Building intelligent digital infrastructure through enterprise
              software, IoT systems, and industrial automation.
            </p>

            {/* Social icons */}
            <div
              className="pw-footer__socials"
              role="list"
              aria-label="Social links"
            >
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="pw-footer__social"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <FooterCol heading="Solutions">
            <ul className="pw-footer__link-list" role="list">
              {SOLUTIONS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="pw-footer__link">
                    <span className="pw-footer__link-arrow" aria-hidden="true">
                      →
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterCol>

          {/* Company */}
          <FooterCol heading="Company">
            <ul className="pw-footer__link-list" role="list">
              {COMPANY.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="pw-footer__link">
                    <span className="pw-footer__link-arrow" aria-hidden="true">
                      →
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterCol>

          {/* Contact */}
          <FooterCol heading="Contact">
            <ul className="pw-footer__contact-list" role="list">
              {CONTACT.map(({ icon, label, href, value }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="pw-footer__contact-link"
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <span className="pw-footer__contact-icon">{icon}</span>
                    <span className="pw-footer__contact-value">{value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </FooterCol>
        </div>

        {/* Tagline band */}
        <div className="pw-footer__tagline-band" aria-hidden="true">
          <span>Intelligent Solutions</span>
          <span className="pw-footer__tagline-dot" />
          <span>Connected Future</span>
          <span className="pw-footer__tagline-dot" />
          <span>Engineered for Excellence</span>
        </div>

        {/* Bottom strip */}
        <div className="pw-footer__bottom">
          <p className="pw-footer__copyright">
            © {year} Pedzaworks Digital Solutions. All rights reserved.
          </p>
          <div className="pw-footer__legal-links">
            <a href="#privacy" className="pw-footer__legal-link">
              Privacy Policy
            </a>
            <span aria-hidden="true">·</span>
            <a href="#terms" className="pw-footer__legal-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
