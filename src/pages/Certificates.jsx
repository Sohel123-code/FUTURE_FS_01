import React, { useState } from "react";
import { certificates } from "../data/certificates.js";
import {
  PageHeading,
  DocumentModal,
  ContactBanner,
} from "../components/Shared.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";

const categories = [
  { key: "all", label: "All milestones" },
  { key: "courses", label: "Courses" },
  { key: "hackathons", label: "Hackathons" },
  { key: "achievements", label: "Achievements" },
  { key: "events", label: "Events" },
];

export default function Certificates() {
  const [category, setCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [viewing, setViewing] = useState(null);
  const filtered = certificates.filter(
    (certificate) => category === "all" || certificate.category === category,
  );
  const visible = showAll ? filtered : filtered.slice(0, 6);
  return (
    <div className="container interior-page">
      <PageHeading
        eyebrow="LEARNING, MADE VISIBLE"
        title="Every milestone,"
        accent="a new beginning."
        description="Courses, hackathons, and experiences that have shaped the way I think and build."
      >
        <span className="count-badge">
          <Icon name="trophy" size={17} /> {certificates.length} certificates &
          achievements
        </span>
      </PageHeading>
      <div
        className="filter-bar"
        id="certificate-filters"
        role="group"
        aria-label="Filter certificates"
      >
        {categories.map((item) => (
          <button
            key={item.key}
            className={category === item.key ? "filter active" : "filter"}
            aria-pressed={category === item.key}
            onClick={() => {
              setCategory(item.key);
              setShowAll(false);
            }}
          >
            {item.label}
            <span>
              {item.key === "all"
                ? certificates.length
                : certificates.filter(
                    (certificate) => certificate.category === item.key,
                  ).length}
            </span>
          </button>
        ))}
      </div>
      <p className="results-count" role="status">
        Showing {visible.length} of {filtered.length} milestones
      </p>
      <div className="certificate-grid" key={category}>
        {visible.map((certificate, index) => (
          <Reveal
            as="article"
            className="certificate-card"
            key={certificate.id}
            delay={(index % 3) * 60}
          >
            <button
              className={`certificate-preview certificate-tone-${index % 3}`}
              onClick={() => setViewing(certificate)}
              aria-label={`Preview ${certificate.title}`}
            >
              {certificate.fileType === "image" ? (
                <img
                  src={certificate.filePath}
                  alt={`${certificate.title} certificate`}
                  loading="lazy"
                />
              ) : (
                <div className="certificate-paper">
                  <span className="paper-corner" />
                  <Icon
                    name={
                      certificate.category === "achievements"
                        ? "trophy"
                        : "file"
                    }
                    size={31}
                  />
                  <span className="paper-kicker">
                    A MILESTONE IN THE JOURNEY
                  </span>
                  <strong>{certificate.issuer}</strong>
                  <span>{certificate.title}</span>
                  <div className="paper-lines">
                    <i />
                    <i />
                  </div>
                  <span className="paper-year">{certificate.date}</span>
                </div>
              )}
              <span className="preview-icon">
                <Icon name="arrow" />
              </span>
            </button>
            <div className="certificate-details">
              <div className="certificate-meta">
                <span>{certificate.category}</span>
                <span>{certificate.date}</span>
              </div>
              <h3>{certificate.title}</h3>
              <p>{certificate.description}</p>
              <div className="certificate-actions">
                <button
                  className="text-link"
                  onClick={() => setViewing(certificate)}
                >
                  View certificate <Icon name="arrow" size={17} />
                </button>
                <a
                  href={certificate.filePath}
                  download
                  className="icon-button"
                  aria-label={`Download ${certificate.title}`}
                >
                  <Icon name="download" size={18} />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      {filtered.length > 6 && (
        <div className="load-more">
          <button
            className="button button-outline"
            onClick={() => {
              setShowAll((value) => !value);
              if (showAll)
                document
                  .getElementById("certificate-filters")
                  ?.scrollIntoView({ behavior: "auto", block: "start" });
            }}
          >
            {showAll ? "Show less" : `View all ${filtered.length} certificates`}
            <Icon name={showAll ? "right" : "down"} size={18} />
          </button>
        </div>
      )}
      <div className="section">
        <ContactBanner />
      </div>
      <DocumentModal document={viewing} onClose={() => setViewing(null)} />
    </div>
  );
}
