import React, { useRef, useState } from "react";
import {
  sections,
  education,
  skillCategories,
  achievements,
  galleryPhotos,
} from "../data/about.js";
import {
  PageHeading,
  SectionHeading,
  ContactBanner,
} from "../components/Shared.jsx";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";

export default function About() {
  const [activePhoto, setActivePhoto] = useState(0);
  const gesture = useRef(null);
  const changePhoto = (direction) =>
    setActivePhoto(
      (index) =>
        (index + direction + galleryPhotos.length) % galleryPhotos.length,
    );
  return (
    <div className="container interior-page">
      <PageHeading
        eyebrow="A LITTLE MORE ABOUT ME"
        title="Curious by nature."
        accent="Builder by choice."
        description="Computer Science student. AI explorer. Teammate. Always a work in progress."
      />
      <div className="about-intro-grid">
        <Reveal className="about-story">
          <p className="eyebrow">
            HELLO, I’M ESHAQ <span aria-hidden="true">↗</span>
          </p>
          <h2>
            Good questions.
            <br />
            <em>Better possibilities.</em>
          </h2>
          {sections[0].content.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <div className="tags">
            <span>Media Cell Coordinator</span>
            <span>NEC Member</span>
            <span>AI/ML Enthusiast</span>
          </div>
        </Reveal>
        <Reveal className="gallery" delay={100}>
          <div
            className="gallery-stage"
            tabIndex={0}
            role="group"
            aria-label="Photo gallery. Swipe left or right, or use the arrow keys, to change photos."
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                event.preventDefault();
                changePhoto(event.key === "ArrowLeft" ? -1 : 1);
              }
            }}
            onPointerDown={(event) => {
              if (event.pointerType === "mouse") return;
              gesture.current = { x: event.clientX, y: event.clientY };
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerUp={(event) => {
              if (!gesture.current) return;
              const dx = event.clientX - gesture.current.x;
              const dy = event.clientY - gesture.current.y;
              if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3)
                changePhoto(dx < 0 ? 1 : -1);
              gesture.current = null;
            }}
            onPointerCancel={() => {
              gesture.current = null;
            }}
          >
            {galleryPhotos.map((photo, index) => (
              <img
                key={photo.src}
                src={photo.src}
                srcSet={photo.srcSet}
                sizes="(max-width: 700px) 90vw, 550px"
                alt={photo.caption}
                style={{ objectPosition: photo.position || "center" }}
                className={index === activePhoto ? "active" : ""}
                aria-hidden={index !== activePhoto}
                loading={index ? "lazy" : "eager"}
              />
            ))}
            <div className="gallery-caption" aria-live="polite">
              <span>
                {String(activePhoto + 1).padStart(2, "0")} /{" "}
                {String(galleryPhotos.length).padStart(2, "0")}
              </span>
              <p>{galleryPhotos[activePhoto].caption}</p>
            </div>
          </div>
          <div className="gallery-controls">
            <span>Little moments. Big memories.</span>
            <div className="gallery-arrows">
              <button
                className="icon-button gallery-previous"
                onClick={() => changePhoto(-1)}
                aria-label="Previous photo"
              >
                <Icon name="right" />
              </button>
              <button
                className="icon-button"
                onClick={() => changePhoto(1)}
                aria-label="Next photo"
              >
                <Icon name="right" />
              </button>
            </div>
            <div className="gallery-dots">
              {galleryPhotos.map((photo, index) => (
                <button
                  key={photo.src}
                  className={index === activePhoto ? "active" : ""}
                  onClick={() => setActivePhoto(index)}
                  aria-label={`Show photo ${index + 1}: ${photo.caption}`}
                  aria-pressed={index === activePhoto}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
      <section className="section">
        <SectionHeading
          number="01"
          eyebrow="THE JOURNEY SO FAR"
          title="Growing, one chapter"
          accent="at a time."
        />
        <div className="education-grid">
          {education.map((item, index) => (
            <Reveal
              key={item.label}
              className="education-card"
              delay={index * 90}
            >
              <span className="education-number">0{index + 1}</span>
              <p className="eyebrow">{item.label}</p>
              <h3>{item.place}</h3>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
        <div className="semester-strip">
          <span>THE LEARNING CURVE</span>
          <div>
            <strong>9.03</strong>
            <span>Semester 01</span>
          </div>
          <div>
            <strong>9.80</strong>
            <span>Semester 02</span>
          </div>
          <div>
            <strong>9.40</strong>
            <span>Semester 03</span>
          </div>
          <Icon name="arrow" size={38} />
        </div>
      </section>
      <section className="skills-section">
        <SectionHeading
          number="02"
          eyebrow="MY EVER-GROWING TOOLBOX"
          title="The tools behind"
          accent="the ideas."
        />
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <Reveal
              className="skill-card"
              key={category.category}
              delay={(index % 3) * 70}
            >
              <span className="skill-index">0{index + 1}</span>
              <h3>{category.category}</h3>
              <div className="tags">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Reveal className="achievement-strip">
        <Icon name="trophy" size={34} />
        <div>
          <p className="eyebrow">LITTLE WINS, LASTING MOTIVATION</p>
          {achievements.map((achievement) => (
            <p key={achievement}>
              {achievement.replace("50-day batch", "50-day badge")}
            </p>
          ))}
        </div>
      </Reveal>
      <ContactBanner />
    </div>
  );
}
