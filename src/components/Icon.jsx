import React from "react";

const paths = {
  arrow: (
    <>
      <path d="M7 17 17 7M7 7h10v10" />
    </>
  ),
  right: (
    <>
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </>
  ),
  down: (
    <>
      <path d="M12 4v16m-6-6 6 6 6-6" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12m-4-4 4 4 4-4M4 15v5h16v-5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
    </>
  ),
  moon: <path d="M20 15.4A8.5 8.5 0 0 1 8.6 4 8.5 8.5 0 1 0 20 15.4Z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  code: (
    <>
      <path d="m7 7-5 5 5 5m10-10 5 5-5 5M14 4l-4 16" />
    </>
  ),
  brain: (
    <>
      <path d="M12 5a3 3 0 0 0-6-1 4 4 0 0 0-3 6 4 4 0 0 0 1 7 4 4 0 0 0 8 1V5Zm0 0a3 3 0 0 1 6-1 4 4 0 0 1 3 6 4 4 0 0 1-1 7 4 4 0 0 1-8 1M7 9l2 2m8-2-2 2M7 16h2m8 0h-2" />
    </>
  ),
  spark: <path d="m12 2 2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6Z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18" />
    </>
  ),
  pin: (
    <>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: (
    <path d="m8 3 3 5-3 3a14 14 0 0 0 5 5l3-3 5 3c0 3-2 5-5 4C9 18 6 15 4 9 2 4 5 3 8 3Z" />
  ),
  copy: (
    <>
      <rect x="8" y="8" width="12" height="13" rx="2" />
      <path d="M15 8V3H3v13h5" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  trophy: (
    <>
      <path d="M7 3h10v6a5 5 0 0 1-10 0V3ZM7 5H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4M12 14v7m-5 0h10" />
    </>
  ),
  file: (
    <>
      <path d="M14 2H5v20h14V7l-5-5Zm0 0v6h5M8 12h8m-8 4h6" />
    </>
  ),
  pause: (
    <>
      <path d="M8 5v14M16 5v14" />
    </>
  ),
  play: <path d="m7 4 14 8-14 8V4Z" />,
  github: (
    <>
      <path
        d="M9 20c-4 1-4-2-6-2m14 4v-4c0-1-.3-2-1-2.5 4-.5 6-2 6-6a5 5 0 0 0-1-3.5c.3-1 .3-2 0-3-2 0-3 1-4 1a14 14 0 0 0-6 0C10 3 9 2 7 2c-.3 1-.3 2 0 3A5 5 0 0 0 6 8.5c0 4 2 5.5 6 6-.7.5-1 1.5-1 2.5v5"
        transform="translate(-1 1) scale(.95)"
      />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
    </>
  ),
};

export default function Icon({
  name = "arrow",
  size = 20,
  className = "",
  ...props
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}
