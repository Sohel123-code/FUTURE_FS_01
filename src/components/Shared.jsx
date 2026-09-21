import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";

export function SectionHeading({ number, eyebrow, title, accent, children }) {
  return (
    <Reveal className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number || "01"}</span> {eyebrow}
        </p>
        <h2>
          {title} <em>{accent}</em>
        </h2>
      </div>
      {children}
    </Reveal>
  );
}

export function PageHeading({ eyebrow, title, accent, description, children }) {
  return (
    <Reveal className="page-heading">
      <p className="eyebrow">
        <span className="tiny-star">✳</span> {eyebrow}
      </p>
      <h1>
        {title} <em>{accent}</em>
      </h1>
      <p className="page-description">{description}</p>
      {children}
    </Reveal>
  );
}

export function ContactBanner() {
  return (
    <Reveal className="contact-banner">
      <div>
        <p className="eyebrow">A GOOD IDEA STARTS WITH A CONVERSATION</p>
        <h2>
          Let’s make
          <br />
          something <em>matter.</em>
        </h2>
      </div>
      <Link className="contact-orb" to="/contact">
        <Icon name="arrow" size={38} />
        <span>Let’s talk</span>
      </Link>
      <span className="banner-star" aria-hidden="true">
        ✳
      </span>
    </Reveal>
  );
}

export function DocumentModal({ document, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    if (!document) return;
    const element = dialog.current;
    const previousOverflow = window.document.body.style.overflow;
    element.showModal();
    window.document.body.style.overflow = "hidden";
    return () => {
      element.close();
      window.document.body.style.overflow = previousOverflow;
    };
  }, [document]);
  if (!document) return null;
  return (
    <dialog
      className="document-modal"
      ref={dialog}
      aria-labelledby="document-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="document-inner">
        <div className="document-toolbar">
          <h2 id="document-title">{document.title}</h2>
          <div>
            <a
              href={document.filePath}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Open file <Icon name="arrow" />
            </a>
            <a
              href={document.filePath}
              download
              className="icon-button"
              aria-label="Download document"
            >
              <Icon name="download" />
            </a>
            <button
              className="icon-button"
              onClick={onClose}
              aria-label="Close document preview"
              autoFocus
            >
              <Icon name="close" />
            </button>
          </div>
        </div>
        {document.fileType === "image" ? (
          <img
            className="document-image"
            src={document.filePath}
            alt={document.title}
          />
        ) : (
          <iframe src={document.filePath} title={`${document.title} preview`} />
        )}
        <p className="document-help">
          Preview unavailable? Use “Open file” to view it in your browser.
        </p>
      </div>
    </dialog>
  );
}
