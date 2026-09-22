import React, { useEffect, useState } from "react";
import Icon from "./Icon.jsx";
import { getPageMotion } from "../data/pageMotion.js";

function TransitionScene({ kind }) {
  switch (kind) {
    case "about":
      return (
        <>
          <div className="book-leaf book-leaf-left" />
          <div className="book-leaf book-leaf-right" />
          <div className="book-spine" />
        </>
      );
    case "projects":
      return (
        <div className="code-shutters">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} style={{ "--panel": index }} />
          ))}
        </div>
      );
    case "certificates":
      return (
        <>
          <div className="certificate-curtain" />
          <span className="graduation-cap">🎓</span>
          <span className="graduation-spark">✦</span>
        </>
      );
    case "connect":
      return (
        <>
          <div className="connection-surface" />
          <div className="connection-rings">
            {[0, 1, 2].map((index) => (
              <span key={index} style={{ "--ring": index }} />
            ))}
          </div>
          <svg className="connection-network" viewBox="0 0 600 400" fill="none">
            <path d="M80 100 300 200 520 70M300 200 470 330M300 200 130 330" />
            <circle cx="80" cy="100" r="9" />
            <circle cx="520" cy="70" r="9" />
            <circle cx="470" cy="330" r="9" />
            <circle cx="130" cy="330" r="9" />
          </svg>
        </>
      );
    case "contact":
      return (
        <>
          <div className="envelope-top" />
          <div className="envelope-bottom" />
          <div className="envelope-flap" />
          <svg className="flying-letter" viewBox="0 0 80 80" fill="none">
            <path d="m7 36 65-25-23 62-13-25L7 36Z" fill="currentColor" />
            <path d="m36 48 36-37" stroke="#e7c8b6" strokeWidth="3" />
          </svg>
        </>
      );
    default:
      return (
        <>
          <div className="home-iris" />
          <div className="home-orbit">
            <Icon name="spark" size={68} />
          </div>
        </>
      );
  }
}

// Keyed by the route in App so forward, back, and menu navigation all replay it.
export default function PageTransition({ pathname, disabled }) {
  const [finished, setFinished] = useState(false);
  const motion = getPageMotion(pathname);
  useEffect(() => {
    if (disabled) {
      setFinished(true);
      return;
    }
    // Also clean up in background tabs where animation events may be suspended.
    const timeout = window.setTimeout(
      () => setFinished(true),
      motion.duration + 180,
    );
    return () => window.clearTimeout(timeout);
  }, [disabled, motion.duration]);

  if (disabled || finished) return null;
  return (
    <div
      className={`page-transition transition-${motion.kind}`}
      data-transition={motion.kind}
      style={{ "--scene-duration": `${motion.duration}ms` }}
      aria-hidden="true"
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget) setFinished(true);
      }}
    >
      <TransitionScene kind={motion.kind} />
      <div className="transition-message">
        <Icon name={motion.icon} size={45} />
        <strong>{motion.title}</strong>
        <span>{motion.caption}</span>
      </div>
    </div>
  );
}
