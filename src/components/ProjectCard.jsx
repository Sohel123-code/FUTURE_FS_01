import React from "react";
import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";

export default function ProjectCard({ project, index = 0 }) {
  const title = project.title
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
  return (
    <Reveal
      as="article"
      className={`project-card project-tone-${index % 4}`}
      delay={(index % 3) * 80}
    >
      <a
        className="project-visual"
        href={project.link}
        target="_blank"
        rel="noreferrer"
        aria-label={`Explore ${title} (opens in a new tab)`}
      >
        <div className="project-browser">
          <div className="browser-chrome">
            <span />
            <span />
            <span />
            <small>{title.toLowerCase().replaceAll(" ", "")}.app</small>
          </div>
          <img src={project.img} alt={`${title} project`} loading="lazy" />
        </div>
        <span className="project-open">
          <Icon name="arrow" size={24} />
        </span>
        <span className="project-number">
          {String(index + 1).padStart(2, "0")} / PROJECT
        </span>
      </a>
      <div className="project-info">
        <div className="project-title">
          <h3>
            <a href={project.link} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h3>
          <Icon name="arrow" />
        </div>
        <p>{project.desc}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
