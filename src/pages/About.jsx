import React, { useState, useEffect } from 'react';
import photo1 from '../assets/photo.jpeg';
import photo2 from '../assets/photo2.jpeg';
import profile2 from '../assets/profile2.jpeg';
import profile3 from '../assets/profile3.jpeg';

const sections = [
  {
    title: 'About Me',
    icon: '👋',
    content: [
      "I am Md Khaja Eshaq, a Computer Science and Engineering student passionate about Artificial Intelligence, Machine Learning, Deep Learning, and Computer Vision. As a Media Cell Coordinator and NEC Member, I combine technical expertise with leadership and collaboration.",
      "I enjoy building AI-powered applications, training machine learning models, solving algorithmic challenges, and deploying scalable software solutions. My goal is to leverage AI to solve real-world problems and continuously grow as an AI/ML Engineer.",
    ],
  },
];

const education = [
  {
    label: 'Schooling',
    place: 'Siva Sivani Public School, Ukkunagaram, Visakhapatnam',
    desc: 'Built a strong foundation in mathematics, science and logical reasoning.',
  },
  {
    label: 'Intermediate (MPC)',
    place: 'Aakash Institute, Visakhapatnam',
    desc: 'Improved analytical thinking, problem-solving skills and conceptual clarity in core subjects.',
  },
  {
    label: 'B.Tech CSE',
    place: 'Vignan Institute of Technology, Visakhapatnam',
    desc: 'Currently pursuing B.Tech in CSE with 1st Sem SGPA 9.03 and 2nd Sem SGPA 9.80 and 3rd sem 9.4, actively involved in coding, projects and technical events.',
  },
];

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Java', 'C', 'JavaScript'],
  },
  {
    category: 'AI & Machine Learning',
    skills: [
      'Machine Learning (Scikit-learn)',
      'Deep Learning (PyTorch)',
      'Computer Vision (OpenCV)',
      'Generative AI (GANs, StyleGAN2)',
      'Image Processing',
      'Data Preprocessing & Feature Engineering',
      'Model Training & Evaluation',
    ],
  },
  {
    category: 'Data Science',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Data Cleaning & Preprocessing', 'Data Visualization'],
  },
  {
    category: 'Web Technologies',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    category: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Google Colab', 'Jupyter Notebook', 'Kaggle'],
  },
  {
    category: 'Deployment & Cloud',
    skills: ['Streamlit', 'Vercel', 'Render', 'GitHub Pages'],
  },
  {
    category: 'AI Productivity Tools',
    skills: ['Cursor', 'Claude', 'ChatGPT', 'GitHub Copilot', 'Antigravity'],
  },
];

const achievements = [
  'Gold Badge on CodeChef',
  'Active LeetCode problem solver (50-day batch on LeetCode)',
  'Participated in multiple hackathons and technical events',
];

// Gallery photos with captions
const galleryPhotos = [
  {
    src: profile2,
    caption: 'Speaking at IDE Bootcamp Inauguration',
  },
  {
    src: profile3,
    caption: 'Presenting at Innovation & Entrepreneurship Event',
  },
  {
    src: photo1,
    caption: 'Collaborating with Teammates at Hackathon',
  },
  {
    src: photo2,
    caption: 'IDE Bootcamp — Inauguration Ceremony',
  },
];

function AutoSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryPhotos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full space-y-3">
      {/* Main slideshow image — full width */}
      <div
        className="relative w-full overflow-hidden rounded-2xl shadow-xl border border-primary/15"
        style={{ aspectRatio: '16/10' }}
      >
        {galleryPhotos.map((photo, i) => (
          <img
            key={i}
            src={photo.src}
            alt={photo.caption}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === activeIndex ? 1 : 0 }}
            loading="lazy"
          />
        ))}

        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4 pt-8 md:pt-10">
          <p className="text-white text-xs md:text-sm font-semibold drop-shadow-lg">
            {galleryPhotos[activeIndex].caption}
          </p>
        </div>
      </div>

      {/* Dot indicators — full width bar */}
      <div className="flex items-center justify-center gap-2 w-full py-2">
        {galleryPhotos.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300 rounded-full"
            style={{
              width:  i === activeIndex ? 28 : 10,
              height: 10,
              background: i === activeIndex
                ? 'hsl(188, 84%, 48%)'
                : 'hsl(188, 84%, 48%, 0.25)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="py-12 md:py-16 lg:py-20 space-y-8 md:space-y-10">
      <div className="text-center mb-4 reveal">
        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        <p className="text-base md:text-lg text-foreground/70 mt-2">
          A detailed look at my journey, skills and what I love to build.
        </p>
        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2.3fr,2.2fr] gap-8 md:gap-10 lg:gap-14 items-start">
        {/* Left: Education, skills, projects, achievements */}
        <div className="space-y-6 reveal">
          {/* Educational Journey */}
          <div className="bg-card rounded-3xl p-4 md:p-6 shadow-lg border border-primary/10">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
              <span>🎓</span> Educational Journey
            </h3>
            <div className="space-y-4">
              {education.map(item => (
                <div key={item.label} className="border-l-2 border-primary/40 pl-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
                    {item.label}
                  </p>
                  <p className="text-sm md:text-base font-semibold text-foreground">{item.place}</p>
                  <p className="text-xs md:text-sm text-foreground/70 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical skills */}
          <div className="bg-card rounded-3xl p-4 md:p-6 shadow-lg border border-secondary/10 space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span>💻</span> Technical Skills
            </h3>
            <p className="text-sm text-foreground/75">
              I work with modern AI technologies, machine learning frameworks, programming languages, and software development tools to build intelligent, scalable applications.
            </p>
            <div className="space-y-3">
              {skillCategories.map(({ category, skills }) => (
                <div key={category}>
                  <p className="text-xs font-semibold text-primary/80 uppercase tracking-wide mb-1.5">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full bg-primary/8 border border-primary/25 text-xs font-medium text-foreground/90"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Photo slideshow + About text */}
        <div className="space-y-6 reveal" style={{ transitionDelay: '150ms' }}>
          {/* Auto slideshow */}
          <AutoSlideshow />

          {sections.map(section => (
            <div key={section.title} className="bg-card rounded-3xl p-4 md:p-6 shadow-lg border border-primary/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{section.icon}</span>
                <h3 className="text-lg font-semibold">{section.title}</h3>
              </div>
              <div className="space-y-2">
                {section.content.map(line => (
                  <p key={line} className="text-sm md:text-base text-foreground/80 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
