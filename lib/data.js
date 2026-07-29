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
    "Since April 2026 I've been freelancing full-time — 20+ projects shipped, most of them for clients who came through referrals rather than a marketplace.",
    "B.Tech in Computer Science from Amity University, Noida. I do my best work in small, fast-moving teams.",
  ],
};

/** At-a-glance credentials for the hero card. Static text, no counters. */
export const credentials = [
  { value: "20+", label: "Projects shipped" },
  { value: "100%", label: "Job success" },
  { value: "5.0", label: "Client rating" },
  { value: "2+", label: "Years experience" },
];

/**
 * The proof band under the hero. Outcome numbers, not vanity ones — each has
 * to name what changed and where, or it doesn't earn the space.
 */
export const achievements = [
  {
    value: 50,
    decimals: 0,
    suffix: "%",
    headline: "faster on a production exchange",
    detail:
      "Cut unnecessary re-renders and restructured the Zustand stores on Kreo.App, then reworked roughly 60% of the codebase so it could keep growing.",
    source: "KreoApp · 2026",
  },
  {
    value: 4,
    decimals: 0,
    suffix: "",
    headline: "developers led on an AI hiring platform",
    detail:
      "Ran the team building Monkify.ai — secure auth, real-time application tracking, and a flow rebuilt around getting candidates to the end of it. Drop-offs fell 30%.",
    source: "RRhai Tech · 2025",
  },
  {
    value: 1.3,
    decimals: 1,
    suffix: "s",
    headline: "cut from average page load",
    detail:
      "Code-splitting and lazy loading across a job portal, plus a reusable component architecture that lifted team velocity around 35%.",
    source: "RRhai Tech · 2025",
  },
];

/**
 * Traits Upwork clients actually selected at the end of a contract — not
 * self-assessment. The counts are how many separate clients picked each one.
 */
export const endorsements = [
  { label: "Detail Oriented", count: 2 },
  { label: "Committed to Quality", count: 1 },
  { label: "Accountable for Outcomes", count: 1 },
  { label: "Clear Communicator", count: 1 },
  { label: "Solution Oriented", count: 1 },
  { label: "Collaborative", count: 1 },
  { label: "Reliable", count: 1 },
  { label: "Professional", count: 1 },
];

/** Verifiable badges. Each one links out to where it can be checked. */
export const badges = [
  "100% Job Success",
  "Rising Talent",
  "5.0 average over 10 contracts",
  "B.Tech CSE, Amity University",
];

/**
 * Upwork standing. Deliberately no earnings figure — the volume is early, and
 * a perfect job-success score alongside it reads stronger on its own.
 */
export const freelance = {
  platform: "Upwork",
  badge: "Rising Talent",
  href: profile.links.upwork,
  proof: [
    { value: "100", suffix: "%", label: "Job success" },
    { value: "10", suffix: "", label: "Jobs on Upwork" },
    { value: "5.0", suffix: "★", label: "Average rating" },
  ],
};

export const experience = [
  {
    company: "Freelance",
    location: "Remote · Direct clients & Upwork",
    role: "Frontend Developer",
    period: "Apr 2026 — Present",
    points: [
      "Shipping React and Next.js frontends for direct clients, most of them referred through my network.",
      "Turning Figma files into responsive, production-ready UI — landing pages through to full web apps.",
      "100% Job Success across 10 contracts on Upwork, averaging 5.0.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
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

/**
 * `featured: true` gets the full treatment — description, metrics, the lot.
 * Everything else renders as a one-line row in the index below it, so the
 * section can carry twenty projects without the page becoming a scroll.
 */
export const projects = [
  {
    featured: true,
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
    featured: true,
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
    featured: true,
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
    link: "https://seraphonglobal.com",
  },

  /* ---- client work: renders as the card grid under the featured rows ----
     `image` is optional; drop a file in public/work/ and point at it. */

  {
    title: "PropHives",
    subtitle: "Property management software",
    tech: ["React", "Next.js"],
    link: "https://prophives.com",
  },
  {
    title: "Onward Vet",
    subtitle:
      "Practice management platform for veterinary clinics — scheduling, records and billing in one place",
    tech: ["WordPress", "Elementor"],
    link: "https://onwardvet.com",
  },
  {
    title: "DESIFEST",
    subtitle:
      "Canada's largest South Asian music and arts festival, Toronto",
    tech: ["React", "Vite"],
    link: "https://desifest.ca",
  },
  {
    title: "Safe Haven Housing",
    subtitle: "Housing provider, Australia",
    tech: [],
    link: "https://safehavenhousing.com.au",
  },
  {
    title: "Blissful Cleaning",
    subtitle: "Cleaning services business site",
    tech: [],
    link: "https://www.blissfulcleaningpro.com",
  },
  {
    title: "StrateAura",
    subtitle: "Strategy consultancy — “Where Strategy Comes to Life”",
    tech: [],
    link: "https://strateaura.com",
  },
  {
    title: "Naxatra Labs",
    subtitle: "Business website",
    tech: [],
    link: "https://naxatralabs.com",
  },
  {
    title: "BKL Ventures",
    subtitle: "Early-access landing page",
    tech: [],
    link: "https://www.bklventures.com",
  },
  {
    title: "Lin Wilder",
    subtitle: "Author portfolio site",
    tech: [],
    link: "https://linwilder.com",
  },
  {
    title: "RRhai Tech",
    subtitle: "Company website",
    tech: [],
    link: "https://rrhaitech.com",
  },
  {
    title: "Behavior Technician Association",
    subtitle:
      "National professional association for behavior technicians — 2,500+ members",
    tech: [],
    link: "https://behaviortechassociation.com/",
  },
  {
    title: "Cook & Craft",
    subtitle: "Online store",
    tech: [],
    link: "https://cook-craft.dhcb.io/store/",
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
      "Redux",
      "Framer Motion",
    ],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "REST APIs"],
  },
  {
    category: "Tools & Platforms",
    items: [
      "AWS",
      "Vercel",
      "Netlify",
      "Hostinger",
      "Figma",
      "WordPress",
      "Chrome Extensions",
    ],
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub"],
  },
];

/**
 * What clients actually hire me for, as opposed to what I use. Kept separate
 * from `skills` so the tools list stays a tools list — and so the marquee,
 * which reads from `skills`, doesn't have to carry five-word phrases.
 */
export const practices = [
  "Figma & XD to code",
  "Landing pages",
  "Business & marketing sites",
  "Web apps",
  "Single-page apps",
  "Email templates — Mailchimp & Gmail",
  "Performance optimization",
  "Bug fixing & debugging",
  "Responsive design",
  "REST API integration",
];

/**
 * The reasons clients give for coming back, from the Upwork profile. Kept to
 * four — a longer list reads as a wish list rather than a claim.
 */
export const workingStyle = [
  "Fast turnaround on small to mid-size tasks",
  "Clear communication and regular updates",
  "Frontend-focused, with solid backend understanding",
  "Bug fixes that don't break what already works",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
