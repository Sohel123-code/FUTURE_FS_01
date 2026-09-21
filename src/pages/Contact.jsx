import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeading } from "../components/Shared.jsx";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import gmailImg from "../assets/gmail.png";
import callImg from "../assets/call.png";

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("mdsohel46940@gmail.com");
      setCopyStatus("Email copied!");
    } catch {
      setCopyStatus("Please select and copy the email address above.");
    }
  }
  return (
    <div className="container interior-page contact-page">
      <PageHeading
        eyebrow="SAY HELLO. SHARE AN IDEA."
        title="Something on"
        accent="your mind?"
        description="An interesting project, a collaboration, or just a good conversation — I’d love to hear from you."
      />
      <div className="contact-layout">
        <Reveal className="contact-card">
          <p className="eyebrow">LET’S START A CONVERSATION</p>
          <div className="contact-method">
            <span className="contact-method-icon">
              <img src={gmailImg} alt="" />
            </span>
            <div>
              <span>DROP ME A LINE</span>
              <a href="mailto:mdsohel46940@gmail.com">mdsohel46940@gmail.com</a>
            </div>
            <a
              className="icon-button"
              href="mailto:mdsohel46940@gmail.com"
              aria-label="Write an email"
            >
              <Icon name="arrow" />
            </a>
          </div>
          <div className="contact-method">
            <span className="contact-method-icon">
              <img src={callImg} alt="" />
            </span>
            <div>
              <span>LET’S TALK</span>
              <a href="tel:+917396987687">+91 73969 87687</a>
            </div>
            <a
              className="icon-button"
              href="tel:+917396987687"
              aria-label="Call Eshaq"
            >
              <Icon name="arrow" />
            </a>
          </div>
          <div className="contact-card-bottom">
            <button className="text-link" onClick={copyEmail}>
              <Icon
                name={copyStatus === "Email copied!" ? "check" : "copy"}
                size={17}
              />
              {copyStatus === "Email copied!"
                ? "Email copied!"
                : "Copy email address"}
            </button>
            <span>
              <Icon name="pin" size={15} /> Visakhapatnam, India
            </span>
          </div>
          <p className="copy-status" role="status">
            {copyStatus}
          </p>
        </Reveal>
        <Reveal className="contact-note" delay={120}>
          <span className="contact-note-star" aria-hidden="true">
            ✳
          </span>
          <p>
            Every great project
            <br />
            starts with a simple
          </p>
          <strong>“hello.”</strong>
          <span>Let’s see where it takes us.</span>
          <Link to="/connect" className="text-link">
            Find me elsewhere <Icon name="arrow" />
          </Link>
        </Reveal>
      </div>
      <div className="contact-interests">
        <span>ALWAYS HAPPY TO TALK ABOUT</span>
        <div className="tags">
          <span>AI & Machine Learning</span>
          <span>Creative ideas</span>
          <span>Hackathons</span>
          <span>Collaboration</span>
        </div>
      </div>
    </div>
  );
}
