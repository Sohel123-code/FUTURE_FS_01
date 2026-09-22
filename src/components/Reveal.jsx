import React, { useEffect, useRef } from "react";
import { observeReveal } from "../lib/scrollReveal.js";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  ...props
}) {
  const ref = useRef(null);
  useEffect(() => observeReveal(ref.current), []);
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--delay": `${Math.min(delay, 140)}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
