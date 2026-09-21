import ticTacImg from "../assets/tic tac.avif";
import zomatoImg from "../assets/zomato.png";
import touristImg from "../assets/tourist.jpg";
import tourist1Img from "../assets/tourist1.jpg";
import bloodImg from "../assets/blood.png";
import careerGenesisImg from "../assets/robo.webp";
import counterImg from "../assets/counter.jpeg";
import guessImg from "../assets/guess the number.jpeg";
import otpImg from "../assets/otp generator.webp";
import smsPredictorImg from "../assets/sms_predictor.png";
import cleanSlateImg from "../assets/cleanslate.png";
import ecosphereImg from "../assets/ecosphere.jpg";
import beyondDegreesImg from "../assets/Screenshot 2026-06-26 202042.png";

export const basicProjects = [
  {
    title: "TIC-TAC-TOE",
    desc: "A classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript.",
    img: ticTacImg,
    link: "https://sohel123-code.github.io/tic-tac-toe2/",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    title: "ZOMATO CLONE",
    desc: "Front-end clone of Zomato food ordering website.",
    img: zomatoImg,
    link: "https://sohel123-code.github.io/zomatoclone/",
    tags: ["HTML", "CSS"],
  },
  {
    title: "TOURIST PLACES",
    desc: "A website showcasing tourist destinations with beautiful UI.",
    img: touristImg,
    link: "https://sohel123-code.github.io/TOURIST3-PLACES/",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    title: "CAREER GENESIS",
    desc: "An intelligent chatbot helping users navigate career paths and find resources.",
    img: careerGenesisImg,
    link: "https://chatbot-sigma-murex-12.vercel.app/",
    tags: ["React", "AI"],
  },
  {
    title: "OTP GENERATOR",
    desc: "Generate and validate OTPs seamlessly with this application.",
    img: otpImg,
    link: "https://glistening-stardust-69e3be.netlify.app/",
    tags: ["JS", "CSS"],
  },
  {
    title: "COUNTER APP",
    desc: "A beautifully styled interactive counter application.",
    img: counterImg,
    link: "https://taupe-pika-c20a6b.netlify.app/",
    tags: ["HTML", "JS"],
  },
  {
    title: "TEMPERATURE CONVERTER",
    desc: "Converts Temperature from Celsius to Fahrenheit and vice versa.",
    img: guessImg,
    link: "https://steady-kataifi-8ee5bf.netlify.app/",
    tags: ["HTML", "JS"],
  },
  {
    title: "SMS PREDICTOR",
    desc: "A machine learning application that predicts whether an SMS is spam or not.",
    img: smsPredictorImg,
    link: "https://sms-predictor.vercel.app/",
    tags: ["ML", "Python"],
  },
];

export const hackathonProjects = [
  {
    title: "ECOSPHERE",
    desc: "Full-stack weather prediction platform with AI-powered forecasting and interactive climate maps.",
    img: ecosphereImg,
    link: "https://eco-sphere-cyan.vercel.app/",
    tags: ["React", "AI", "Full-Stack"],
  },
  {
    title: "CLEANSLATE",
    desc: "Data profiling, cleaning & preprocessing platform that transforms raw datasets into analysis-ready data.",
    img: cleanSlateImg,
    link: "https://thiranex-ass4.vercel.app/",
    tags: ["React", "Data", "ML"],
  },
  {
    title: "COSMO EXPLORER",
    desc: "An interactive space exploration website showcasing planets, stars, and galaxies with stunning visuals.",
    img: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=1000&q=80",
    link: "https://sohel123-code.github.io/COSMO-EXPLORER--2/",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    title: "CHALO JHARKHAND",
    desc: "A tourism website highlighting the beautiful landscapes, culture, and heritage of Jharkhand.",
    img: tourist1Img,
    link: "https://sultanam265-stack.github.io/CHALO-JHARKHAND/",
    tags: ["HTML", "CSS"],
  },
  {
    title: "BLOOD CONNECT",
    desc: "A platform to connect blood donors and recipients, making life-saving donations easier and faster.",
    img: bloodImg,
    link: "https://blood-bank1-sandy.vercel.app/",
    tags: ["Full-Stack", "AI"],
  },
  {
    title: "TRAVEL MINT",
    desc: "A comprehensive travel platform for booking and exploring new destinations.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
    link: "https://travel-mint-2.vercel.app/",
    tags: ["React", "Full-Stack"],
  },
  {
    title: "BEYOND DEGREES",
    desc: "A platform focused on skill-building and continuous learning beyond traditional education.",
    img: beyondDegreesImg,
    link: "https://beyond-degrees2-3meag9zig-sohel123-codes-projects.vercel.app/",
    tags: ["React", "EdTech"],
  },
];

export const projects = [...hackathonProjects, ...basicProjects];
