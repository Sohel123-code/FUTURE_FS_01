import React, { useState } from 'react';
import ticTacImg from '../assets/tic tac.avif';
import zomatoImg from '../assets/zomato.png';
import touristImg from '../assets/tourist.jpg';
import tourist1Img from '../assets/tourist1.jpg';
import bloodImg from '../assets/blood.png';
import careerGenesisImg from '../assets/robo.webp';
import counterImg from '../assets/counter.jpeg';
import guessImg from '../assets/guess the number.jpeg';
import otpImg from '../assets/otp generator.webp';
import smsPredictorImg from '../assets/sms_predictor.png';
import cleanSlateImg from '../assets/cleanslate.png';
import ecosphereImg from '../assets/ecosphere.jpg';
import beyondDegreesImg from '../assets/Screenshot 2026-06-26 202042.png';

const basicProjects = [
  {
    title: 'TIC-TAC-TOE',
    desc: 'A classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript.',
    img: ticTacImg,
    link: 'https://sohel123-code.github.io/tic-tac-toe2/',
    tags: ['HTML', 'CSS', 'JS'],
  },
  {
    title: 'ZOMATO CLONE',
    desc: 'Front-end clone of Zomato food ordering website.',
    img: zomatoImg,
    link: 'https://sohel123-code.github.io/zomatoclone/',
    tags: ['HTML', 'CSS'],
  },
  {
    title: 'TOURIST PLACES',
    desc: 'A website showcasing tourist destinations with beautiful UI.',
    img: touristImg,
    link: 'https://sohel123-code.github.io/TOURIST3-PLACES/',
    tags: ['HTML', 'CSS', 'JS'],
  },
  {
    title: 'CAREER GENESIS',
    desc: 'An intelligent chatbot helping users navigate career paths and find resources.',
    img: careerGenesisImg,
    link: 'https://chatbot-sigma-murex-12.vercel.app/',
    tags: ['React', 'AI'],
  },
  {
    title: 'OTP GENERATOR',
    desc: 'Generate and validate OTPs seamlessly with this application.',
    img: otpImg,
    link: 'https://glistening-stardust-69e3be.netlify.app/',
    tags: ['JS', 'CSS'],
  },
  {
    title: 'COUNTER APP',
    desc: 'A beautifully styled interactive counter application.',
    img: counterImg,
    link: 'https://taupe-pika-c20a6b.netlify.app/',
    tags: ['HTML', 'JS'],
  },
  {
    title: 'TEMPERATURE CONVERTER',
    desc: 'Converts Temperature from Celsius to Fahrenheit and vice versa.',
    img: guessImg,
    link: 'https://steady-kataifi-8ee5bf.netlify.app/',
    tags: ['HTML', 'JS'],
  },
  {
    title: 'SMS PREDICTOR',
    desc: 'A machine learning application that predicts whether an SMS is spam or not.',
    img: smsPredictorImg,
    link: 'https://sms-predictor.vercel.app/',
    tags: ['ML', 'Python'],
  },
];

const hackathonProjects = [
  {
    title: 'ECOSPHERE',
    desc: 'Full-stack weather prediction platform with AI-powered forecasting and interactive climate maps.',
    img: ecosphereImg,
    link: 'https://eco-sphere-cyan.vercel.app/',
    tags: ['React', 'AI', 'Full-Stack'],
  },
  {
    title: 'CLEANSLATE',
    desc: 'Data profiling, cleaning & preprocessing platform that transforms raw datasets into analysis-ready data.',
    img: cleanSlateImg,
    link: 'https://thiranex-ass4.vercel.app/',
    tags: ['React', 'Data', 'ML'],
  },
  {
    title: 'COSMO EXPLORER',
    desc: 'An interactive space exploration website showcasing planets, stars, and galaxies with stunning visuals.',
    img: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=1000&q=80',
    link: 'https://sohel123-code.github.io/COSMO-EXPLORER--2/',
    tags: ['HTML', 'CSS', 'JS'],
  },
  {
    title: 'CHALO JHARKHAND',
    desc: 'A tourism website highlighting the beautiful landscapes, culture, and heritage of Jharkhand.',
    img: tourist1Img,
    link: 'https://sultanam265-stack.github.io/CHALO-JHARKHAND/',
    tags: ['HTML', 'CSS'],
  },
  {
    title: 'BLOOD CONNECT',
    desc: 'A platform to connect blood donors and recipients, making life-saving donations easier and faster.',
    img: bloodImg,
    link: 'https://blood-bank1-sandy.vercel.app/',
    tags: ['Full-Stack', 'AI'],
  },
  {
    title: 'TRAVEL MINT',
    desc: 'A comprehensive travel platform for booking and exploring new destinations.',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80',
    link: 'https://travel-mint-2.vercel.app/',
    tags: ['React', 'Full-Stack'],
  },
  {
    title: 'BEYOND DEGREES',
    desc: 'A platform focused on skill-building and continuous learning beyond traditional education.',
    img: beyondDegreesImg,
    link: 'https://beyond-degrees2-3meag9zig-sohel123-codes-projects.vercel.app/',
    tags: ['React', 'EdTech'],
  },
];

const tagColors = {
  HTML: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  CSS: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  JS: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  React: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  AI: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  ML: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  Python: 'bg-green-500/10 text-green-400 border-green-500/20',
  Data: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  'Full-Stack': 'bg-primary/10 text-primary border-primary/20',
  EdTech: 'bg-secondary/10 text-secondary border-secondary/20',
};

function ProjectCard({ project, index }) {
  return (
    <div
      className="group bg-card rounded-2xl border border-border/40 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Image */}
      <div className="relative w-full h-40 overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Live link overlay button */}
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1.5 bg-black/60 backdrop-blur-sm rounded-lg text-white hover:bg-primary"
          title="View Live"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4 gap-2">
        <h3 className="text-sm font-bold text-card-foreground tracking-wide group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed flex-grow line-clamp-3">
          {project.desc}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-1">
          {project.tags.map(tag => (
            <span
              key={tag}
              className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${tagColors[tag] || 'bg-primary/10 text-primary border-primary/20'}`}
            >
              {tag}
            </span>
          ))}
        </div>
        {/* View Live button */}
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          View Live
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

const TABS = [
  {
    key: 'basic',
    label: 'Basic Projects',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m10 13-2 2 2 2" /><path d="m14 17 2-2-2-2" />
      </svg>
    ),
    projects: basicProjects,
    desc: 'Core front-end & JavaScript projects demonstrating clean UI design and DOM logic.',
  },
  {
    key: 'hackathon',
    label: 'Hackathon Projects',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    projects: hackathonProjects,
    desc: 'Built under time constraints during hackathons — solving real-world problems with full-stack & AI solutions.',
  },
];

function Projects() {
  const [activeTab, setActiveTab] = useState('basic');
  const active = TABS.find(t => t.key === activeTab);

  return (
    <section className="py-16 bg-background">
      {/* Header */}
      <div className="text-center mb-10 reveal">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">My Projects</h2>
        <p className="text-foreground/60 mt-2 text-base">Things I've built — from quick experiments to hackathon winners.</p>
        <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex gap-2 bg-card border border-border/40 p-1.5 rounded-2xl shadow-sm">
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-primary text-primary-foreground shadow-md scale-[1.03]'
                  : 'text-foreground/60 hover:text-foreground hover:bg-primary/5'
              }`}
            >
              {tab.icon}
              {tab.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${activeTab === tab.key ? 'bg-white/20' : 'bg-primary/10 text-primary'}`}>
                {tab.projects.length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab description */}
      <p className="text-center text-sm text-foreground/55 mb-8 max-w-xl mx-auto">{active.desc}</p>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {active.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
