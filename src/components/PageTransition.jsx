import React, { useEffect, useState } from "react";

const chapters = {
  "/": "A curious mind. A new beginning.",
  "/about": "A little more of my story.",
  "/projects": "From curiosity to creation.",
  "/certificates": "One milestone at a time.",
  "/connect": "Good things start with connection.",
  "/contact": "Every idea starts with hello.",
};

// Keyed by the route in App so forward, back, and menu navigation all replay it.
export default function PageTransition({ pathname, disabled }) {
  const [finished, setFinished] = useState(false);
  useEffect(() => {
    if (disabled) {
      setFinished(true);
      return;
    }
    // Also clean up in background tabs where animation events may be suspended.
    const timeout = window.setTimeout(() => setFinished(true), 1350);
    return () => window.clearTimeout(timeout);
  }, [disabled]);

  if (disabled || finished) return null;
  return (
    <div className="page-transition" aria-hidden="true">
      <div
        className="transition-veil"
        onAnimationEnd={(event) => {
          if (event.target === event.currentTarget) setFinished(true);
        }}
      >
        <span className="transition-wordmark">
          eshaq<span>.</span>
        </span>
        <span className="transition-chapter">
          {chapters[pathname] || "On to the next chapter."}
        </span>
      </div>
      <span className="transition-cap">🎓</span>
      <span className="transition-spark transition-spark-one">✦</span>
      <span className="transition-spark transition-spark-two">✦</span>
    </div>
  );
}
