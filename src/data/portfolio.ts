import {
  Code2,
  Cpu,
  Database,
  Palette,
  Layers,
  Wrench,
  Brain,
  Trophy,
  Users,
  Rocket,
  Award,
} from "lucide-react";

import skEliteImg from "@/assets/images/projects/sk-elite-moments.png";
import eventImg from "@/assets/images/projects/event-management.png";
import groundwaterImg from "@/assets/images/projects/groundwater-ai.png";
import conveyorImg from "@/assets/images/projects/dual-conveyor.png";

export const profile = {
  name: "Divyajothi S",

  roles: [
    "Full-Stack Developer",
    "AI & Data Science Undergraduate",
    "AI Solutions Developer",
  ],

  tagline:
    "Engineering scalable web applications and AI-powered digital experiences with a focus on clean architecture, intuitive user interfaces, and practical problem solving. I enjoy transforming ideas into production-ready software while continuously learning and building impactful technology.",

  email: "sdivyajothi087@gmail.com",

  phone: "+91 99467 71890",

  linkedin: "https://www.linkedin.com/in/divyajothi786/",

  github: "https://github.com/Divyajothi90",

  location: "Coimbatore, Tamil Nadu, India",

  cgpa: "9.28 / 10",

  degree: "Artificial Intelligence & Data Science",

  duration: "2023 – 2027",

  college: "P.A. College of Engineering and Technology",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  {
    label: "Major Projects",
    value: 4,
    suffix: "+",
  },
  {
    label: "Internships",
    value: 2,
    suffix: "",
  },
  {
    label: "CGPA",
    value: 9.28,
    suffix: "/10",
    decimals: 2,
  },
  {
    label: "Certifications",
    value: 3,
    suffix: "+",
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: [
      "Python",
      "Java",
      "JavaScript",
      "SQL",
      "HTML",
      "CSS",
    ],
  },

  {
    title: "Frontend",
    icon: Layers,
    items: [
      "React",
      "Tailwind CSS",
      "Responsive Web Design",
      "Vite",
    ],
  },

  {
    title: "Backend",
    icon: Cpu,
    items: [
      "REST APIs",
      "FastAPI",
    ],
  },

  {
    title: "Database",
    icon: Database,
    items: [
      "MySQL",
    ],
  },

  {
    title: "AI & Machine Learning",
    icon: Brain,
    items: [
      "Machine Learning",
      "Scikit-learn",
      "OpenCV",
      "Pandas",
      "NumPy",
      "Data Preprocessing",
      "Model Evaluation",
    ],
  },

  {
    title: "UI / UX",
    icon: Palette,
    items: [
      "Figma",
      "Wireframing",
      "Prototyping",
    ],
  },

  {
    title: "Development Tools",
    icon: Wrench,
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Google Colab",
    ],
  },
];

export const experience = [
  {
    role: "UI/UX Design Intern",
    company: "Neha Solutions",
    period: "Internship",

    points: [
      "Designed user-friendly interfaces for a Netflix-inspired redesign, focusing on navigation clarity and visual hierarchy.",

      "Collaborated on wireframing and prototyping in Figma, translating requirements into interactive mockups ahead of front-end implementation.",

      "Conducted usability reviews to identify friction points in user flows and proposed design refinements bridging design and development.",
    ],
  },

  {
    role: "AI & Robotics Intern",
    company: "I-Hub Robotics",
    period: "Internship",

    points: [
      "Gained hands-on exposure to software-hardware integration, automation systems, and structured project workflows using Git.",

      "Worked on sensor-driven applications on Raspberry Pi, building foundational experience in debugging and systems-level problem solving.",

      "Contributed to prototype iterations and documentation for reproducible engineering workflows.",
    ],
  },
];

export const projects = [
  {
    title: "SK Elite Moments",

    image: skEliteImg,

    tag: "Production Web Application",

    problem:
      "A modern showcase experience was required with fast load times and long-term maintainability.",

    solution:
      "Modern, responsive web application built from scratch with a component-driven architecture and deployed through a full build-to-deploy pipeline.",

    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Netlify",
    ],

    features: [
      "Type-safe, reusable UI components",
      "Optimized production builds via Vite tooling",
      "End-to-end Netlify deployment pipeline",
    ],
  },

  {
    title: "Event Management Website",

    image: eventImg,

    tag: "Client Project · Jan 2026",

    problem:
      "A real-world event management client required a production-ready digital product translating business needs into a functional site.",

    solution:
      "Developed a fully responsive website end-to-end, coordinating revisions directly with the client and delivering a mobile-first experience.",

    stack: [
      "React",
      "Tailwind CSS",
      "Responsive Design",
    ],

    features: [
      "Reusable React components with mobile-first layouts",
      "Optimized navigation and information architecture",
      "Client-facing revision cycles and iterative delivery",
    ],
  },

  {
    title: "AI-Based Groundwater Level Predictor",

    image: groundwaterImg,

    tag: "SIH Hackathon · Aug 2025",

    problem:
      "Groundwater fluctuations require predictive modelling to inform planning and conservation decisions.",

    solution:
      "Data-driven prediction model built with Python and Scikit-learn, focusing on data preprocessing and feature selection.",

    stack: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],

    features: [
      "Cleaned and engineered features from raw hydrological data",
      "Baseline regression models with evaluation metrics",
      "Reproducible workflow suitable for extension",
    ],
  },

  {
    title: "Dual Conveyor Belt System",

    image: conveyorImg,

    tag: "Automation · May 2025",

    problem:
      "Manual object sorting is repetitive and error-prone in small-scale automation demos.",

    solution:
      "Automated object-sorting prototype using Arduino with sensor input and coordinated motor control logic across two belts.",

    stack: [
      "Arduino",
      "Sensors",
      "Embedded C",
    ],

    features: [
      "Sensor-driven sorting logic",
      "Coordinated dual-belt motor control",
      "Hands-on hardware-software integration",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech — Artificial Intelligence & Data Science",

    school: "P.A. College of Engineering and Technology",

    period: "2023 – 2027",

    detail: "CGPA: 9.28 / 10",

    highlights: [
      "Proficiency Award — Class Topper",
      "IST Student Coordinator",
    ],
  },

  {
    degree: "Higher Secondary Certificate (HSC)",

    school: "G.H.S.S Mannur, Ramanathapuram",

    period: "2023",

    detail: "86%",

    highlights: [],
  },
];

export const certifications = [
  {
    name: "Microsoft Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    year: "May 2025",
  },

  {
    name: "Google Crash Course on Python",
    issuer: "Google",
    year: "Aug 2025",
  },

  {
    name: "Artificial Intelligence Certification",
    issuer: "Novitech Solutions",
    year: "Apr 2025",
  },
];

export const achievements = [
  {
    title: "Class Topper",

    desc:
      "Proficiency Award for highest academic performance in the B.Tech program.",

    icon: Trophy,
  },

  {
    title: "IST Student Coordinator",

    desc:
      "Represented the department in institutional technology initiatives.",

    icon: Users,
  },

  {
    title: "Hackathon Participation",

    desc:
      "Contributed to SIH with an AI-based groundwater prediction model.",

    icon: Rocket,
  },

  {
    title: "Leadership Activities",

    desc:
      "Coordinated technical events and mentored peers in Python and web development.",

    icon: Award,
  },
];