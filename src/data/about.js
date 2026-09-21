import photo1 from "../assets/photo.jpeg";
import photo2 from "../assets/photo2.jpeg";
import profile2 from "../assets/profile2.jpeg";
import profile3 from "../assets/profile3.jpeg";
import originalPortrait from "../assets/profile.jpg";
import { portrait, outdoors } from "./photos.js";

export const sections = [
  {
    title: "About Me",
    icon: "👋",
    content: [
      "I am Md Khaja Eshaq, a Computer Science and Engineering student passionate about Artificial Intelligence, Machine Learning, Deep Learning, and Computer Vision. As a Media Cell Coordinator and NEC Member, I combine technical expertise with leadership and collaboration.",
      "I enjoy building AI-powered applications, training machine learning models, solving algorithmic challenges, and deploying scalable software solutions. My goal is to leverage AI to solve real-world problems and continuously grow as an AI/ML Engineer.",
    ],
  },
];

export const education = [
  {
    label: "Schooling",
    place: "Siva Sivani Public School, Ukkunagaram, Visakhapatnam",
    desc: "Built a strong foundation in mathematics, science and logical reasoning.",
  },
  {
    label: "Intermediate (MPC)",
    place: "Aakash Institute, Visakhapatnam",
    desc: "Improved analytical thinking, problem-solving skills and conceptual clarity in core subjects.",
  },
  {
    label: "B.Tech CSE",
    place: "Vignan Institute of Technology, Visakhapatnam",
    desc: "Currently pursuing B.Tech in CSE with 1st Sem SGPA 9.03 and 2nd Sem SGPA 9.80 and 3rd sem 9.4, actively involved in coding, projects and technical events.",
  },
];

export const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C", "JavaScript"],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "Machine Learning (Scikit-learn)",
      "Deep Learning (PyTorch)",
      "Computer Vision (OpenCV)",
      "Generative AI (GANs, StyleGAN2)",
      "Image Processing",
      "Data Preprocessing & Feature Engineering",
      "Model Training & Evaluation",
    ],
  },
  {
    category: "Data Science",
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Data Cleaning & Preprocessing",
      "Data Visualization",
    ],
  },
  {
    category: "Web Technologies",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    category: "Developer Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Google Colab",
      "Jupyter Notebook",
      "Kaggle",
    ],
  },
  {
    category: "Deployment & Cloud",
    skills: ["Streamlit", "Vercel", "Render", "GitHub Pages"],
  },
  {
    category: "AI Productivity Tools",
    skills: ["Cursor", "Claude", "ChatGPT", "GitHub Copilot", "Antigravity"],
  },
];

export const achievements = [
  "Gold Badge on CodeChef",
  "Active LeetCode problem solver (50-day batch on LeetCode)",
  "Participated in multiple hackathons and technical events",
];

// Gallery photos with captions
export const galleryPhotos = [
  { ...outdoors, caption: "A little sunshine between the lines of code" },
  {
    ...portrait,
    caption: "The person behind the projects",
    position: "center 25%",
  },
  {
    src: profile2,
    caption: "Speaking at IDE Bootcamp Inauguration",
  },
  {
    src: profile3,
    caption: "Presenting at Innovation & Entrepreneurship Event",
  },
  {
    src: photo1,
    caption: "Collaborating with Teammates at Hackathon",
  },
  {
    src: photo2,
    caption: "IDE Bootcamp — Inauguration Ceremony",
  },
  { src: originalPortrait, caption: "Finding a little inspiration outdoors" },
];
