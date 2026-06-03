import React, { useState, useEffect, useRef } from "react";
import "./styles/navbar.css";
import logo from "../assets/logo-mark.png";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/#systems-showcase" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const ArrowIcon: React.FC<{ size?: number }> = ({ size = 10 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 10 10"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2 8L8 2M8 2H3.5M8 2V6.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const indicatorRef = useRef<HTMLSpanElement>(null);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current || !indicatorRef.current) return;
    const links =
      navRef.current.querySelectorAll<HTMLAnchorElement>(".pw-nav__link");

    if (activeIdx === null) {
      indicatorRef.current.style.opacity = "0";
      return;
    }

    const el = links[activeIdx];
    if (!el) return;

    const parentRect = navRef.current.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    indicatorRef.current.style.width = `${elRect.width}px`;
    indicatorRef.current.style.left = `${elRect.left - parentRect.left}px`;
    indicatorRef.current.style.opacity = "1";
  }, [activeIdx]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="pw-skip-link" href="#main-content">
        Skip to main content
      </a>

      <header
        className={`pw-navbar${scrolled ? " pw-navbar--scrolled" : ""}`}
        role="banner"
      >
        <div className="pw-navbar__pill">
          <div className="pw-navbar__inner">
            <a
              href="/"
              className="pw-navbar__brand"
              aria-label="Pedzaworks Digital Solutions — home"
            >
              <img
                src={logo}
                alt=""
                className="pw-logo-mark"
                width="48"
                height="48"
              />
              <div className="pw-navbar__brand-text">
                <span className="pw-navbar__brand-name">
                  PEDZA
                  <span className="pw-navbar__brand-name--accent">WORKS</span>
                </span>
                <span className="pw-navbar__brand-sub">
                  <span className="pw-navbar__brand-sub-dash">—</span>
                  DIGITAL SOLUTIONS
                  <span className="pw-navbar__brand-sub-dash">—</span>
                </span>
              </div>
            </a>

            <nav className="pw-navbar__nav" aria-label="Primary navigation">
              <ul
                className="pw-navbar__nav-list"
                role="list"
                ref={navRef}
                onMouseLeave={() => setActiveIdx(null)}
              >
                <span
                  className="pw-nav__indicator"
                  ref={indicatorRef}
                  aria-hidden="true"
                />
                {NAV_LINKS.map(({ label, href }, i) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="pw-nav__link"
                      onMouseEnter={() => setActiveIdx(i)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="pw-navbar__actions">
              <a href="/#systems-showcase" className="pw-navbar__cta-ghost">
                <span>Our Work</span>
                <span className="pw-cta-arrow" aria-hidden="true">
                  <ArrowIcon size={9} />
                </span>
              </a>

              <a href="/contact" className="pw-navbar__cta">
                <span>Get in Touch</span>
                <span className="pw-cta-arrow--filled" aria-hidden="true">
                  <ArrowIcon size={9} />
                </span>
              </a>

              <button
                className={`pw-navbar__hamburger${menuOpen ? " pw-navbar__hamburger--open" : ""}`}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="pw-mobile-menu"
                onClick={() => setMenuOpen((p) => !p)}
              >
                <span className="pw-bar pw-bar--1" />
                <span className="pw-bar pw-bar--2" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        id="pw-mobile-menu"
        className={`pw-mobile${menuOpen ? " pw-mobile--open" : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div className="pw-mobile__grid-bg" aria-hidden="true" />

        <div className="pw-mobile__inner">
          <div className="pw-mobile__panel">
            <section className="pw-mobile__card">
              <p className="pw-mobile__section-label">Explore</p>
              <ul className="pw-mobile__list" role="list">
                {NAV_LINKS.map(({ label, href }, i) => (
                  <li
                    key={href}
                    className="pw-mobile__item"
                    style={{ transitionDelay: `${i * 0.06}s` }}
                  >
                    <a
                      href={href}
                      className="pw-mobile__link"
                      onClick={closeMenu}
                    >
                      <span className="pw-mobile__index">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="pw-mobile__label">{label}</span>
                      <svg
                        className="pw-mobile__arrow"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 13L13 3M13 3H6M13 3V10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section className="pw-mobile__card pw-mobile__card--soft">
              <p className="pw-mobile__section-label">Pedzaworks</p>
              <div className="pw-mobile__info-list">
                <div className="pw-mobile__info-row">
                  <span className="pw-mobile__info-title">Focus</span>
                  <span className="pw-mobile__info-text">
                    Operational software systems
                  </span>
                </div>
                <div className="pw-mobile__info-row">
                  <span className="pw-mobile__info-title">Delivery</span>
                  <span className="pw-mobile__info-text">
                    Connected infrastructure & digital platforms
                  </span>
                </div>
              </div>
            </section>

            <div className="pw-mobile__footer">
              <a
                href="/#systems-showcase"
                className="pw-mobile__cta pw-mobile__cta--ghost"
                onClick={closeMenu}
              >
                Our Work
              </a>
              <a href="/contact" className="pw-mobile__cta" onClick={closeMenu}>
                Get in Touch
              </a>
              <p className="pw-mobile__tagline">
                Intelligent Systems. Connected Infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
