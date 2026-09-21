import React, { useState } from "react";
import linkedinImg from "../assets/linkdn.png";
import githubImg from "../assets/github.png";
import hackerRankImg from "../assets/hk logo.jpg";
import codechefImg from "../assets/codecef.jpg";
import leetcodeImg from "../assets/leetcode.png";
import mainResume from "../assets/certificates/Main_resume.pdf";
import resume1 from "../assets/certificates/reaume 1.pdf";
import resume2 from "../assets/certificates/resume 2.pdf";
import resume3 from "../assets/certificates/resume 3.pdf";
import {
  PageHeading,
  SectionHeading,
  DocumentModal,
  ContactBanner,
} from "../components/Shared.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";

const socials = [
  {
    platform: "LinkedIn",
    desc: "A little professional life.",
    img: linkedinImg,
    link: "https://www.linkedin.com/in/md-khaja-eshaq-8862b532a",
  },
  {
    platform: "GitHub",
    desc: "Ideas, commits, and everything in between.",
    img: githubImg,
    link: "https://github.com/Sohel123-code",
  },
  {
    platform: "HackerRank",
    desc: "Working through the next challenge.",
    img: hackerRankImg,
    link: "https://www.hackerrank.com/profile/mdsohel46940",
  },
  {
    platform: "CodeChef",
    desc: "A healthy appetite for problem solving.",
    img: codechefImg,
    link: "https://www.codechef.com/users/mdsohel123",
  },
  {
    platform: "LeetCode",
    desc: "Building consistency, one problem at a time.",
    img: leetcodeImg,
    link: "https://leetcode.com/u/mdsohel786/",
  },
];
const resumes = [
  { title: "Main Resume", filePath: mainResume, main: true },
  { title: "Resume-1", filePath: resume1 },
  { title: "Resume-2", filePath: resume2 },
  { title: "Resume-3", filePath: resume3 },
];

export default function Connect() {
  const [viewing, setViewing] = useState(null);
  return (
    <div className="container interior-page">
      <PageHeading
        eyebrow="FIND ME AROUND THE INTERNET"
        title="Good things happen"
        accent="when we connect."
        description="Explore my work, follow the learning journey, or take a closer look at my experience."
      />
      <div className="social-grid">
        {socials.map((social, index) => (
          <Reveal key={social.platform} delay={index * 70}>
            <a
              className="social-card"
              href={social.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="social-card-top">
                <span className="social-logo">
                  <img src={social.img} alt="" />
                </span>
                <Icon name="arrow" />
              </div>
              <h2>{social.platform}</h2>
              <p>{social.desc}</p>
              <span className="social-visit">
                Visit profile <Icon name="right" size={17} />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
      <section className="section">
        <SectionHeading
          number="01"
          eyebrow="THE STORY ON PAPER"
          title="A closer look at"
          accent="my experience."
        />
        <div className="resume-grid">
          {resumes.map((resume, index) => (
            <Reveal
              className={`resume-card ${resume.main ? "resume-featured" : ""}`}
              key={resume.title}
              delay={index * 70}
            >
              <div className="resume-cover">
                <span className="resume-label">
                  {resume.main ? "THE MAIN RÉSUMÉ" : `RÉSUMÉ / 0${index}`}
                </span>
                <Icon name="file" size={38} />
                <strong>
                  Md Khaja
                  <br />
                  Eshaq<span>.</span>
                </strong>
                <span>AI / ML · DEVELOPMENT</span>
              </div>
              <div className="resume-details">
                <h3>{resume.title}</h3>
                <div>
                  <button
                    className="text-link"
                    onClick={() => setViewing(resume)}
                  >
                    Preview <Icon name="arrow" size={16} />
                  </button>
                  <a
                    className="icon-button"
                    href={resume.filePath}
                    download
                    aria-label={`Download ${resume.title}`}
                  >
                    <Icon name="download" size={18} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <ContactBanner />
      <DocumentModal document={viewing} onClose={() => setViewing(null)} />
    </div>
  );
}
