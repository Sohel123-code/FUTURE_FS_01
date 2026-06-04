import React from 'react';
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

function Projects() {
  const basicProjects = [
    {
      title: "TIC-TAC-TOE",
      desc: "A classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript.",
      img: ticTacImg,
      link: "https://sohel123-code.github.io/tic-tac-toe2/",
    },
    {
      title: "ZOMATO CLONE",
      desc: "Front-end clone of Zomato food ordering website.",
      img: zomatoImg,
      link: "https://sohel123-code.github.io/zomatoclone/",
    },
    {
      title: "TOURIST PLACES",
      desc: "A website showcasing tourist destinations with beautiful UI.",
      img: touristImg,
      link: "https://sohel123-code.github.io/TOURIST3-PLACES/",
    },
    {
      title: "CAREER GENESIS",
      desc: "An intelligent chatbot helping users navigate career paths and find resources.",
      img: careerGenesisImg,
      link: "https://chatbot-sigma-murex-12.vercel.app/",
    },
    {
      title: "OTP GENERATOR",
      desc: "Generate and validate OTPs seamlessly with this application.",
      img: otpImg,
      link: "https://glistening-stardust-69e3be.netlify.app/",
    },
    {
      title: "COUNTER APP",
      desc: "A beautifully styled interactive counter application.",
      img: counterImg,
      link: "https://taupe-pika-c20a6b.netlify.app/",
    },
    {
      title: "Temperature Convertor",
      desc: "Converts Temperature from Celsius to Fahrenheit and vice versa.",
      img: guessImg,
      link: "https://steady-kataifi-8ee5bf.netlify.app/",
    },
    {
      title: "SMS PREDICTOR",
      desc: "A machine learning application that predicts whether an SMS is spam or not.",
      img: smsPredictorImg,
      link: "https://sms-predictor.vercel.app/",
    }
  ];

  const hackathonProjects = [
    {
      title: "CLEANSLATE",
      desc: "CleanSlate is a web-based data profiling, cleaning, and preprocessing platform that transforms raw datasets into high-quality, analysis-ready data through automated validation, visualization, and export tools.",
      img: cleanSlateImg,
      link: "https://thiranex-ass4.vercel.app/"
    },
    {
      title: "COSMO EXPLORER",
      desc: "An interactive space exploration website showcasing planets, stars, and galaxies with stunning visuals.",
      img: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=1000&q=80",
      link: "https://sohel123-code.github.io/COSMO-EXPLORER--2/"
    },
    {
      title: "CHALO JHARKHAND",
      desc: "A tourism website highlighting the beautiful landscapes, culture, and heritage of Jharkhand state.",
      img: tourist1Img,
      link: "https://sultanam265-stack.github.io/CHALO-JHARKHAND/"
    },
    {
      title: "BLOOD CONNECT",
      desc: "A platform to connect blood donors and recipients, making life-saving donations easier and faster.",
      img: bloodImg,
      link: "https://blood-bank1-sandy.vercel.app/"
    },
    {
      title: "TRAVEL MINT",
      desc: "A comprehensive travel platform for booking and exploring new destinations.",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
      link: "https://travel-mint-2.vercel.app/"
    },
    {
      title: "BEYOND DEGREES",
      desc: "A platform focused on skill-building and continuous learning beyond traditional education.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
      link: "https://beyond-degrees2-sohel123-codes-projects.vercel.app/"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="text-center mb-16 reveal">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">My Projects</h2>

        <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {/* Basic Projects Section */}
        <div className="w-full reveal">
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="p-3 bg-primary/10 rounded-2xl text-primary mb-4 inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="m10 13-2 2 2 2" /><path d="m14 17 2-2-2-2" /></svg>
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">Basic Projects</h3>
            <p className="text-foreground/70 mt-4 max-w-3xl leading-relaxed">
              These applications demonstrate my strong grasp of core front-end technologies: HTML, CSS, and modern JavaScript. They emphasize clean DOM manipulation, responsive UI design, and bulletproof logic.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {basicProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Hackathon Projects Section */}
        <div className="w-full reveal">
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="p-3 bg-secondary/10 rounded-2xl text-secondary mb-4 inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">Hackathon Projects</h3>
            <p className="text-foreground/70 mt-4 max-w-3xl leading-relaxed">
              Developed under intense time constraints during collaborative hackathon events. These applications focus on solving real-world problems utilizing scalable architectures and modern full-stack integrations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hackathonProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="group bg-card rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full border border-border/40 overflow-hidden"
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="w-full h-56 overflow-hidden relative">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>

      <div className="flex flex-col flex-grow p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-card-foreground tracking-tight mb-3">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed flex-grow mb-8">
          {project.desc}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-max"
        >
          View Live
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
