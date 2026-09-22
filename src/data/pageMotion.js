export const pageMotion = {
  "/": {
    kind: "home",
    title: "Hello, again.",
    caption: "A curious mind. A new beginning.",
    icon: "spark",
    duration: 900,
  },
  "/about": {
    kind: "about",
    title: "The next chapter.",
    caption: "A little more of my story.",
    icon: "file",
    duration: 1000,
  },
  "/projects": {
    kind: "projects",
    title: "Ideas in motion.",
    caption: "From curiosity to creation.",
    icon: "code",
    duration: 950,
  },
  "/certificates": {
    kind: "certificates",
    title: "Little wins. Big steps.",
    caption: "One milestone at a time.",
    icon: "trophy",
    duration: 1100,
  },
  "/connect": {
    kind: "connect",
    title: "Better, together.",
    caption: "Good things start with connection.",
    icon: "globe",
    duration: 950,
  },
  "/contact": {
    kind: "contact",
    title: "You had me at hello.",
    caption: "Every idea starts with a conversation.",
    icon: "mail",
    duration: 1000,
  },
};

export function getPageMotion(pathname) {
  return pageMotion[pathname] || pageMotion["/"];
}
