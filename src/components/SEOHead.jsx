import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://www.eshaq.me';
const SITE_NAME = 'Md Khaja Eshaq | Portfolio';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const TWITTER_HANDLE = '@MdKhajaEshaq';

/**
 * Per-page SEO metadata.
 * Keys match the route paths defined in App.jsx.
 */
const SEO_DATA = {
  '/': {
    title: 'Md Khaja Eshaq | AI & ML Engineer – Portfolio',
    description:
      'Portfolio of Md Khaja Eshaq — CSE Student, AI/ML Enthusiast, Full Stack Developer, and LeetCode Problem Solver. Explore projects, certifications, and more.',
    keywords:
      'Md Khaja Eshaq, AI Engineer, ML Engineer, Full Stack Developer, React, Portfolio, CSE Student, LeetCode',
  },
  '/about': {
    title: 'About – Md Khaja Eshaq',
    description:
      'Learn about Md Khaja Eshaq — education, skills, technical expertise in AI/ML, and passion for building real-world web applications.',
    keywords:
      'About Md Khaja Eshaq, Education, Skills, AI ML Background, Computer Science Engineering',
  },
  '/projects': {
    title: 'Projects – Md Khaja Eshaq',
    description:
      'Browse projects built by Md Khaja Eshaq — from full-stack web apps and AI/ML models to creative side projects and open-source contributions.',
    keywords:
      'Projects, Web Apps, AI ML Projects, React Projects, Full Stack, Open Source, Md Khaja Eshaq',
  },
  '/certificates': {
    title: 'Certifications – Md Khaja Eshaq',
    description:
      'View professional certifications and course completions earned by Md Khaja Eshaq in AI, Machine Learning, Web Development, and more.',
    keywords:
      'Certifications, Courses, AI Certificates, ML Certificates, Web Development, Md Khaja Eshaq',
  },
  '/connect': {
    title: 'Connect – Md Khaja Eshaq',
    description:
      'Connect with Md Khaja Eshaq on LinkedIn, GitHub, LeetCode, CodeChef, and other platforms. View achievements and coding profiles.',
    keywords:
      'Connect, Social Links, GitHub, LinkedIn, LeetCode, CodeChef, Md Khaja Eshaq',
  },
  '/contact': {
    title: 'Contact – Md Khaja Eshaq',
    description:
      'Get in touch with Md Khaja Eshaq for freelance work, collaboration, or any professional inquiries.',
    keywords:
      'Contact, Email, Hire, Freelance, Collaboration, Md Khaja Eshaq',
  },
};

/**
 * Sets or creates a <meta> tag in <head>.
 */
function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Sets or creates a <link> tag in <head>.
 */
function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * SEOHead — a zero-dependency React component that dynamically injects
 * all SEO meta tags into <head> based on the current route.
 *
 * Usage: Drop <SEOHead /> once inside your <App /> component.
 */
export default function SEOHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const data = SEO_DATA[pathname] || SEO_DATA['/'];
    const pageUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`;

    // ── Document title ──
    document.title = data.title;

    // ── Standard meta tags ──
    setMeta('name', 'description', data.description);
    setMeta('name', 'keywords', data.keywords);
    setMeta('name', 'author', 'Md Khaja Eshaq');
    setMeta('name', 'robots', 'index, follow');

    // ── Canonical URL ──
    setLink('canonical', pageUrl);

    // ── Open Graph tags ──
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', pageUrl);
    setMeta('property', 'og:title', data.title);
    setMeta('property', 'og:description', data.description);
    setMeta('property', 'og:image', DEFAULT_IMAGE);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:image:alt', 'Md Khaja Eshaq – AI & ML Engineer Portfolio');
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:locale', 'en_US');

    // ── Twitter Card tags ──
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:site', TWITTER_HANDLE);
    setMeta('name', 'twitter:creator', TWITTER_HANDLE);
    setMeta('name', 'twitter:title', data.title);
    setMeta('name', 'twitter:description', data.description);
    setMeta('name', 'twitter:image', DEFAULT_IMAGE);
    setMeta('name', 'twitter:image:alt', 'Md Khaja Eshaq – AI & ML Engineer Portfolio');
  }, [pathname]);

  return null; // This component renders nothing — it only manages <head>.
}
