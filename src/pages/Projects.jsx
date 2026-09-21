import React, { useState } from "react";
import {
  projects,
  basicProjects,
  hackathonProjects,
} from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import { PageHeading, ContactBanner } from "../components/Shared.jsx";
import Icon from "../components/Icon.jsx";

const filters = [
  { label: "All projects", key: "all", items: projects },
  {
    label: "AI & Machine Learning",
    key: "ai",
    items: projects.filter((project) =>
      project.tags.some((tag) => ["AI", "ML"].includes(tag)),
    ),
  },
  { label: "Hackathon builds", key: "hackathon", items: hackathonProjects },
  { label: "Experiments", key: "basic", items: basicProjects },
];

export default function Projects() {
  const [active, setActive] = useState("all");
  const selected = filters.find((filter) => filter.key === active);
  return (
    <div className="container interior-page">
      <PageHeading
        eyebrow="THE PROJECT COLLECTION"
        title="From “what if”"
        accent="to what’s next."
        description="A collection of things I’ve built — intelligent applications, hackathon experiments, and ideas that turned into something real."
      />
      <div className="filter-bar" role="group" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            className={active === filter.key ? "filter active" : "filter"}
            key={filter.key}
            aria-pressed={active === filter.key}
            onClick={() => setActive(filter.key)}
          >
            {filter.label}
            <span>{filter.items.length}</span>
          </button>
        ))}
      </div>
      <p className="results-count" role="status">
        {selected.items.length} projects · {selected.label}
      </p>
      <div className="project-grid" key={active}>
        {selected.items.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.title} />
        ))}
      </div>
      <div className="github-note">
        <Icon name="github" size={25} />
        <p>There’s more behind the scenes.</p>
        <a
          href="https://github.com/Sohel123-code"
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          Explore my GitHub <Icon name="arrow" />
        </a>
      </div>
      <ContactBanner />
    </div>
  );
}
