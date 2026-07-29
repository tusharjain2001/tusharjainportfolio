export const profile = {
  name: "Tushar Jain",
  firstName: "Tushar",
  lastName: "Jain",
  roles: [
    "Frontend Engineer",
    "React & Next.js",
    "Performance work",
    "Web3 interfaces",
  ],
  tagline:
    "I build fast, precise interfaces with React, Next.js and Tailwind — from an AI hiring platform to a production decentralized exchange.",
  location: "Bahadurgarh, Haryana, India",
  email: "tusharjainqwerty@gmail.com",
  phone: "+91 93066 95193",
  links: {
    github: "https://github.com/tusharjain2001",
    linkedin: "https://www.linkedin.com/in/tushar-jain2001",
    upwork: "https://www.upwork.com/freelancers/tusharjain2001",
  },
  about: [
    "I'm a frontend developer who works close to both sides of the handoff. I take Figma files and turn them into clean, responsive, production-grade interfaces — the kind where the detail survives the build.",
    "I've led a team of four on an AI-driven hiring platform, and spent a year on a decentralized exchange for a UK startup, cutting unnecessary re-renders and improving performance by 50%. Speed and scalability are the parts I care about most.",
    "B.Tech in Computer Science from Amity University, Noida. I do my best work in small, fast-moving teams.",
  ],
  stats: [
    { value: 2, suffix: "+", label: "Years experience" },
    { value: 10, suffix: "+", label: "Projects shipped" },
    { value: 50, suffix: "%", label: "Performance gained" },
    { value: 4, suffix: "", label: "Devs led" },
  ],
};

export const experience = [
  {
    company: "KreoApp",
    location: "United Kingdom · Remote",
    role: "Frontend Developer",
    period: "Jan 2026 — Apr 2026",
    points: [
      "Built and maintained a decentralized exchange on the Next.js stack.",
      "Turned Figma designs into responsive UI that held up across devices.",
      "Shipped Chrome Extensions with dynamic DOM injection.",
      "Worked with the backend team on REST integration and app state.",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Zustand", "Chrome Extensions"],
  },
  {
    company: "RRhai Tech",
    location: "Hyderabad, India",
    role: "Software Engineer · Full Stack",
    period: "Oct 2024 — Oct 2025",
    points: [
      "Led development of a dynamic job listing portal — 25% more successful job matches.",
      "Built mobile-first UIs with React and Tailwind, lifting mobile engagement 40%.",
      "Integrated REST APIs with tighter state management — 30% lower response latency.",
      "Applied code-splitting and lazy loading, cutting average page load by 1.3s.",
      "Raised team velocity ~35% with a reusable component architecture.",
    ],
    tech: ["React", "Tailwind CSS", "JavaScript", "REST APIs", "HTML5/CSS3"],
  },
];

export const projects = [
  {
    title: "Monkify.ai",
    subtitle: "AI-driven hiring and recruitment platform",
    role: "Team Lead",
    year: "2025",
    description:
      "Led four developers building a scalable AI job portal — secure auth, real-time application tracking, and an application flow rebuilt around getting candidates to the end of it.",
    metrics: [
      { value: "30%", label: "fewer drop-offs" },
      { value: "40%", label: "more mobile engagement" },
      { value: "1.5s", label: "faster load" },
    ],
    tech: ["React", "Tailwind CSS", "Auth", "Real-time"],
  },
  {
    title: "Kreo.App",
    subtitle: "Decentralized exchange",
    role: "Frontend Developer",
    year: "2026",
    description:
      "A production Web3 exchange. I cut unnecessary re-renders, restructured the Zustand stores, and reworked roughly 60% of the codebase so it could keep growing.",
    metrics: [
      { value: "50%", label: "performance gain" },
      { value: "60%", label: "codebase reworked" },
      { value: "1:1", label: "Figma fidelity" },
    ],
    tech: ["React", "Next.js", "Zustand", "Tailwind CSS", "Web3"],
  },
  {
    title: "Seraphon Global",
    subtitle: "Business website",
    role: "Frontend Developer",
    year: "2025",
    description:
      "An SEO-friendly business site with custom interactive components, built mobile-first from the start rather than adapted down to it.",
    metrics: [
      { value: "30%", label: "more interaction" },
      { value: "45%", label: "more mobile engagement" },
      { value: "SEO", label: "first architecture" },
    ],
    tech: ["React", "HTML5", "CSS3", "SEO"],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "C++", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Zustand",
      "Framer Motion",
    ],
  },
  {
    category: "Tools & Platforms",
    items: ["AWS", "Vercel", "Netlify", "Hostinger", "Figma", "Chrome Extensions"],
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub"],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
