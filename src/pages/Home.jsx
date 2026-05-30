import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/s1.jpeg';

function Home() {
  return (
    <section className="min-h-[calc(100vh-8rem)] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr,2fr] gap-10 lg:gap-16 items-center w-full">
        {/* Left: text & actions */}
        <div className="space-y-6 reveal pl-4 lg:pl-12">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-[0.18em]">
            CSE Student &amp; Web Developer
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I&apos;m <span className="text-primary">Md Khaja Eshaq</span> —
            <br />
            building <span className="text-secondary">real-world</span> web apps.
          </h1>

          <p className="text-base md:text-lg text-foreground/80 max-w-xl">
            Motivated Computer Science and Engineering student with a strong passion for software
            development, problem solving and turning ideas into working products that create real
            impact.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              View My Projects
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 rounded-lg bg-secondary/10 text-secondary font-semibold border border-secondary/40 hover:bg-secondary hover:text-secondary-foreground hover:-translate-y-0.5 transition-all"
            >
              More About Me
            </Link>
          </div>

          {/* Quick highlights */}
          <div className="grid grid-cols-3 gap-4 pt-4 max-w-md">
            <div className="bg-card rounded-2xl px-4 py-3 shadow-sm border border-primary/10">
              <p className="text-xs text-foreground/60">1st Sem SGPA</p>
              <p className="text-xl font-bold text-primary">9.03</p>
            </div>
            <div className="bg-card rounded-2xl px-4 py-3 shadow-sm border border-primary/10">
              <p className="text-xs text-foreground/60">2nd Sem SGPA</p>
              <p className="text-xl font-bold text-secondary">9.80</p>
            </div>
            <div className="bg-card rounded-2xl px-4 py-3 shadow-sm border border-primary/10">
              <p className="text-xs text-foreground/60">Code Platforms</p>
              <p className="text-sm font-semibold">LeetCode, CodeChef</p>
            </div>
          </div>
        </div>

        {/* Right: profile card */}
        <div className="reveal" style={{ transitionDelay: '200ms' }}>
          <div className="relative max-w-xs mx-auto">
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto mb-4 group">
              <img
                src={profileImg}
                alt="Sohel"
                className="w-full h-full object-cover rounded-full border-4 border-primary/70 shadow-xl transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-2xl"
              />
              <span className="absolute bottom-4 right-4 text-4xl transition-transform duration-500 group-hover:rotate-12">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;


