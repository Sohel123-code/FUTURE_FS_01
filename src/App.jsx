import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Certificates from "./pages/Certificates.jsx";
import Connect from "./pages/Connect.jsx";
import Contact from "./pages/Contact.jsx";
import SEOHead from "./components/SEOHead.jsx";
import Icon from "./components/Icon.jsx";
import PageTransition from "./components/PageTransition.jsx";
import "./styles.css";
import "./responsive.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/certificates", label: "Certificates" },
  { to: "/connect", label: "Connect" },
];

export default function App() {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("eshaq-theme") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });
  const [paused, setPaused] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const progress = useRef(null);
  const menuButton = useRef(null);
  const previousPath = useRef(pathname);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#15251f" : "#f6f6ee");
    try {
      localStorage.setItem("eshaq-theme", theme);
    } catch {
      /* Storage can be disabled. */
    }
  }, [theme]);
  useEffect(() => {
    document.documentElement.classList.toggle("motion-paused", paused);
  }, [paused]);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event) => setPaused(event.matches);
    preference.addEventListener("change", onChange);
    return () => preference.removeEventListener("change", onChange);
  }, []);
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
    if (previousPath.current !== pathname)
      document.getElementById("main-content")?.focus({ preventScroll: true });
    previousPath.current = pathname;
  }, [pathname]);
  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current)
        progress.current.style.transform = `scaleX(${height > 0 ? window.scrollY / height : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);
  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = requestAnimationFrame(() => {
      document.querySelector(".main-nav a")?.focus();
    });
    const onKey = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const desktop = window.matchMedia("(min-width: 1001px)");
    const onResize = (event) => {
      if (event.matches) setMobileOpen(false);
    };
    desktop.addEventListener("change", onResize);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [mobileOpen]);

  return (
    <>
      <SEOHead />
      <PageTransition key={pathname} pathname={pathname} disabled={paused} />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-wrap container">
          <Link to="/" className="brand" aria-label="Eshaq home">
            eshaq<span className="brand-dot">.</span>
            <span className="brand-asterisk" aria-hidden="true">
              ✳
            </span>
          </Link>
          <nav
            className={`main-nav ${mobileOpen ? "is-open" : ""}`}
            id="main-navigation"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"}>
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className="mobile-contact">
              Let’s talk <Icon name="arrow" size={16} />
            </NavLink>
          </nav>
          <div className="nav-actions">
            <button
              className="icon-button motion-toggle"
              onClick={() => setPaused((value) => !value)}
              aria-label={paused ? "Enable animations" : "Pause animations"}
              title={paused ? "Enable animations" : "Pause animations"}
              aria-pressed={paused}
            >
              <Icon name={paused ? "play" : "pause"} size={16} />
            </button>
            <button
              className="icon-button theme-toggle"
              onClick={() =>
                setTheme((value) => (value === "light" ? "dark" : "light"))
              }
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            >
              <Icon name={theme === "light" ? "moon" : "sun"} size={19} />
            </button>
            <Link className="button button-dark nav-contact" to="/contact">
              Let’s talk <Icon name="arrow" size={17} />
            </Link>
            <button
              ref={menuButton}
              className="icon-button menu-toggle"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              aria-controls="main-navigation"
              onClick={() => setMobileOpen((value) => !value)}
            >
              <Icon name={mobileOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
        <div className="scroll-progress" ref={progress} />
      </header>
      {mobileOpen && (
        <button
          className="mobile-nav-scrim"
          tabIndex={-1}
          aria-label="Close navigation"
          onClick={() => {
            setMobileOpen(false);
            menuButton.current?.focus();
          }}
        />
      )}
      <main id="main-content" tabIndex={-1}>
        <div key={pathname} className="page-enter page-arriving">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <div className="container not-found">
                  <p className="eyebrow">404 / A LITTLE OFF THE PATH</p>
                  <h1>
                    Let’s head <em>home.</em>
                  </h1>
                  <Link to="/" className="button button-dark">
                    Back to the portfolio <Icon name="right" />
                  </Link>
                </div>
              }
            />
          </Routes>
        </div>
      </main>
      <footer className="site-footer container">
        <div>
          <Link to="/" className="brand">
            eshaq<span className="brand-dot">.</span>
          </Link>
          <p>Curiosity in mind. Purpose in every line.</p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/Sohel123-code"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Icon name="arrow" size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/md-khaja-eshaq-8862b532a"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Icon name="arrow" size={14} />
          </a>
          <a href="mailto:mdsohel46940@gmail.com">
            Email <Icon name="arrow" size={14} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Md Khaja Eshaq</span>
          <span>
            Made with curiosity & a little caffeine{" "}
            <span aria-hidden="true">↗</span>
          </span>
          <a href="#main-content">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
