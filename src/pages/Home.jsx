import React from "react";
import { Link } from "react-router-dom";
import speakingImg from "../assets/s1.jpeg";
import { portrait, outdoors } from "../data/photos.js";
import mainResume from "../assets/certificates/Main_resume.pdf";
import { hackathonProjects, projects } from "../data/projects.js";
import { certificates } from "../data/certificates.js";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { SectionHeading, ContactBanner } from "../components/Shared.jsx";

const toolkit = [
  "Python",
  "PyTorch",
  "Scikit-learn",
  "React",
  "OpenCV",
  "Generative AI",
];

export default function Home() {
  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <Reveal className="hero-copy">
          <p className="eyebrow hero-intro">
            <span className="status-dot" /> HEY THERE, I’M MD KHAJA ESHAQ
          </p>
          <h1 id="hero-title">
            A curious mind.
            <br />A builder’s{" "}
            <span className="heading-heart">
              heart
              <svg viewBox="0 0 220 20" aria-hidden="true">
                <path d="M5 11C57 1 145 0 210 9M18 17c61-7 135-6 176-1" />
              </svg>
            </span>
            <span className="lime-period">.</span>
          </h1>
          <p className="hero-role">
            Aspiring AI/ML engineer <span>×</span> Creative problem solver
          </p>
          <p className="hero-description">
            Turning complex problems into thoughtful, intelligent solutions.
            Exploring the space where machine learning meets real-world impact.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="button button-dark">
              Explore my work <Icon name="arrow" />
            </Link>
            <a
              href={mainResume}
              download="Md_Khaja_Eshaq_Resume.pdf"
              className="button button-outline"
            >
              Download résumé <Icon name="download" size={18} />
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <Icon name="pin" size={15} /> Visakhapatnam, India
            </span>
            <span className="meta-divider" />
            <span>Learning. Building. Evolving.</span>
          </div>
        </Reveal>
        <Reveal className="hero-art">
          <div className="art-grid" aria-hidden="true" />
          <div className="portrait-backdrop" />
          <div className="orbit-ring" aria-hidden="true" />
          <span className="portrait-star" aria-hidden="true">
            ✳
          </span>
          <div className="portrait-card">
            <div className="portrait-photo">
              <img
                src={portrait.src}
                srcSet={portrait.srcSet}
                sizes="(max-width: 700px) 80vw, 360px"
                alt="Md Khaja Eshaq smiling in a blue suit"
                width="960"
                height="1440"
                fetchPriority="high"
              />
            </div>
            <div className="portrait-caption">
              <span>a little curiosity goes a long way.</span>
              <Icon name="spark" size={19} />
            </div>
          </div>
          <div className="floating-label label-top">
            <span className="label-icon">
              <Icon name="brain" size={21} />
            </span>
            <div>
              <strong>Powered by curiosity</strong>
              <span>AI · ML · endless possibilities</span>
            </div>
          </div>
          <div className="floating-label label-bottom">
            <span className="code-symbol">&lt;/&gt;</span>
            <div>
              <strong>Ideas → real-world impact</strong>
              <span>One line of code at a time.</span>
            </div>
            <span className="status-dot" />
          </div>
          <div className="art-note">
            a human behind the code{" "}
            <svg viewBox="0 0 65 36" aria-hidden="true">
              <path d="M2 5c33-9 51 1 49 23m-9-7 9 9 10-9" />
            </svg>
          </div>
        </Reveal>
        <div className="hero-bottom">
          <a href="#selected-work" className="scroll-cue">
            <span>
              <Icon name="down" size={15} />
            </span>{" "}
            SCROLL TO EXPLORE
          </a>
          <span className="hero-bottom-note">
            A little code. A lot of possibility.
          </span>
          <span className="section-index">01 — 06</span>
        </div>
      </section>
      <div className="toolkit-strip">
        <div className="container toolkit-inner">
          <span className="toolkit-label">MY EVERYDAY TOOLKIT</span>
          <div className="toolkit-window">
            <div className="toolkit-track">
              {[0, 1].map((copy) => (
                <div
                  className="toolkit-group"
                  key={copy}
                  aria-hidden={copy === 1}
                >
                  {toolkit.map((tool, i) => (
                    <span key={tool}>
                      <Icon
                        name={
                          ["code", "brain", "spark", "globe", "code", "spark"][
                            i
                          ]
                        }
                        size={21}
                      />
                      {tool}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="section container" id="selected-work">
        <SectionHeading
          number="01"
          eyebrow="SELECTED WORK"
          title="Small ideas."
          accent="Real impact."
        >
          <Link to="/projects" className="text-link">
            All projects{" "}
            <span className="link-circle">
              <Icon name="arrow" size={18} />
            </span>
          </Link>
        </SectionHeading>
        <div className="project-grid featured-grid">
          {hackathonProjects
            .slice(0, 2)
            .concat(
              projects.find((project) => project.title === "SMS PREDICTOR"),
            )
            .map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
        </div>
        <p className="section-footnote">
          <span className="status-dot" /> A few things I’ve built, broken,
          learned from, and made better.
        </p>
      </section>
      <section className="about-feature">
        <div className="container about-feature-grid">
          <Reveal className="about-photo about-photo-collage">
            <img
              src={outdoors.src}
              srcSet={outdoors.srcSet}
              sizes="(max-width: 700px) 90vw, 500px"
              alt="Eshaq smiling outdoors among the trees"
              width="960"
              height="540"
              loading="lazy"
            />
            <img
              className="story-inset"
              src={speakingImg}
              alt="Sharing ideas at a technical presentation"
              loading="lazy"
            />
            <span className="photo-sticker">
              more than
              <br />
              <em>just code.</em>
              <Icon name="spark" size={29} />
            </span>
            <span className="photo-corner">IN MY ELEMENT ↗</span>
          </Reveal>
          <Reveal className="about-feature-copy" delay={100}>
            <p className="eyebrow">02 / THE HUMAN BEHIND THE WORK</p>
            <h2>
              Forever a student.
              <br />
              Always a <em>builder.</em>
            </h2>
            <p>
              I’m Eshaq, a Computer Science student who loves asking “what if?”
              — and then writing the code to find out.
            </p>
            <p>
              From training neural networks to bringing ideas to life at
              hackathons, I’m driven by the chance to make something useful.
              Along the way, I lead, collaborate, and keep learning.
            </p>
            <Link to="/about" className="text-link">
              A little more about me{" "}
              <span className="link-circle">
                <Icon name="arrow" size={18} />
              </span>
            </Link>
            <div className="about-stats">
              <div>
                <strong>
                  {projects.length}
                  <span>+</span>
                </strong>
                <span>Projects & experiments</span>
              </div>
              <div>
                <strong>{certificates.length}</strong>
                <span>Learning milestones</span>
              </div>
              <div>
                <strong>9.80</strong>
                <span>2nd semester SGPA</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          number="03"
          eyebrow="WHAT I BRING TO THE TABLE"
          title="Built on curiosity."
          accent="Backed by skills."
        />
        <div className="expertise-grid">
          {[
            {
              icon: "brain",
              title: "Intelligent by design",
              desc: "Machine learning, deep learning, and computer vision. Turning data into something meaningful.",
              tags: "PYTHON / PYTORCH / OPENCV",
            },
            {
              icon: "code",
              title: "Ideas you can interact with",
              desc: "Thoughtful interfaces and full-stack applications that connect good ideas with real people.",
              tags: "REACT / JAVASCRIPT / WEB",
            },
            {
              icon: "spark",
              title: "Always exploring what’s next",
              desc: "Generative AI, creative experiments, and the kind of problems that make you think a little differently.",
              tags: "GENERATIVE AI / PROBLEM SOLVING",
            },
          ].map((item, index) => (
            <Reveal
              className="expertise-card"
              key={item.title}
              delay={index * 90}
            >
              <div className="expertise-top">
                <span className="expertise-icon">
                  <Icon name={item.icon} size={27} />
                </span>
                <span>0{index + 1}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="expertise-tags">{item.tags}</span>
            </Reveal>
          ))}
        </div>
      </section>
      <div className="container">
        <ContactBanner />
      </div>
    </>
  );
}
