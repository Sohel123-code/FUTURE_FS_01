import React, { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Certificates from './pages/Certificates.jsx';
import Connect from './pages/Connect.jsx';
import Contact from './pages/Contact.jsx';
import SEOHead from './components/SEOHead.jsx';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/connect', label: 'Connect' },
  { to: '/contact', label: 'Contact Info' },
];

function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });
}

function App() {
  const location = useLocation();
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <SEOHead />
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm transition-shadow duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold tracking-tight">
            <span className="text-primary">Mohamed</span>
            <span className="text-secondary">KhajaEshaq</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link text-foreground font-medium hover:text-primary ${
                    isActive ? 'active text-primary' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center">
            <button
              onClick={() => setDark((prev) => !prev)}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {!dark ? (
                <svg
                  className="h-6 w-6 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
            <button
              className="md:hidden ml-4 p-2"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`md:hidden px-6 pb-4 space-y-2 transition-all duration-300 ${
            mobileOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="block py-2 text-center text-foreground font-medium"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </header>

      <main className="container mx-auto px-6 pt-24 pb-16">
        <div className="reveal active transition-opacity duration-500">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;


