const elements = new Set();
let entryObserver;
let exitObserver;

function reveal(element) {
  if (!element.classList.contains("reveal-pending")) return;
  element.classList.remove("reveal-pending");
  element.classList.add("reveal-visible");
}

// Observe entry and exit separately: a section must leave a 96px buffer before
// it resets. The entrance translation can never toggle its own visibility.
export function observeReveal(element) {
  if (!("IntersectionObserver" in window)) return () => {};
  if (!entryObserver) {
    entryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target);
        });
      },
      { rootMargin: "-80px 0px 0px 0px", threshold: 0 },
    );
    exitObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            !entry.isIntersecting &&
            !entry.target.contains(document.activeElement)
          ) {
            entry.target.classList.remove("reveal-visible");
            entry.target.classList.add("reveal-pending");
          }
        });
      },
      { rootMargin: "96px 0px 96px 0px", threshold: 0 },
    );
  }

  const onFocus = () => reveal(element);
  element.classList.add("reveal-pending");
  element.addEventListener("focusin", onFocus);
  elements.add(element);
  entryObserver.observe(element);
  exitObserver.observe(element);

  return () => {
    entryObserver?.unobserve(element);
    exitObserver?.unobserve(element);
    element.removeEventListener("focusin", onFocus);
    elements.delete(element);
    if (!elements.size) {
      entryObserver?.disconnect();
      exitObserver?.disconnect();
      entryObserver = undefined;
      exitObserver = undefined;
    }
  };
}
