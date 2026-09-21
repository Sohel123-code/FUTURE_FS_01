import React, { useEffect, useRef } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  ...props
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!("IntersectionObserver" in window)) return;
    let entering = false;
    const reset = () => {
      if (el.contains(document.activeElement)) return;
      el.classList.remove("reveal-visible");
      el.classList.add("reveal-pending");
    };
    const onAnimationEnd = (event) => {
      if (event.target !== el || event.animationName !== "scroll-reveal")
        return;
      entering = false;
      const bounds = el.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) reset();
    };
    const onFocus = () => {
      el.classList.remove("reveal-pending");
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && el.classList.contains("reveal-pending")) {
          entering = true;
          el.classList.remove("reveal-pending");
          el.classList.add("reveal-visible");
        } else if (!entry.isIntersecting && !entering) {
          reset();
        }
      },
      { threshold: 0 },
    );
    el.classList.add("reveal-pending");
    el.addEventListener("animationend", onAnimationEnd);
    el.addEventListener("focusin", onFocus);
    observer.observe(el);
    return () => {
      observer.disconnect();
      el.removeEventListener("animationend", onAnimationEnd);
      el.removeEventListener("focusin", onFocus);
    };
  }, []);
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--delay": `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
