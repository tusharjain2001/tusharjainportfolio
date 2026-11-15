export const profile = {
  name: "Tushar Jain",
  firstName: "Tushar",
  lastName: "Jain",
  /* one source for the canonical origin — metadataBase, robots, sitemap and
     the JSON-LD all read from here so they can't drift apart */
  siteUrl: "https://tusharjainportfolio.vercel.app",
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
  links: {
    github: "https://github.com/tusharjain2001",
    linkedin: "https://www.linkedin.com/in/tushar-jain2001",
    upwork: "https://www.upwork.com/freelancers/~01de4a702b72e24aca",
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
  { value: "16", label: "Upwork jobs" },
  { value: "2+", label: "Years experience" },
  { value: "4", label: "Devs led" },
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

/** Verifiable credentials. The first two also lead the hero card. */
export const badges = [
  { label: "Top Rated on Upwork", icon: "award" },
  { label: "100% Job Success", icon: "check" },
  { label: "5.0 from 9 client reviews", icon: "star" },
  { label: "B.Tech CSE, Amity University", icon: "cap" },
];

/**
 * Upwork standing. Deliberately no earnings figure — the volume is early, and
 * a perfect job-success score alongside it reads stronger on its own.
 */
export const freelance = {
  platform: "Upwork",
  badge: "Top Rated",
  href: profile.links.upwork,
  /* clients who came back for a second contract */
  repeatClients: 3,
  /* every review on the profile is 5★ */
  reviews: 9,
  proof: [
    { value: "100", suffix: "%", label: "Job success" },
    { value: "16", suffix: "", label: "Jobs on Upwork" },
    { value: "5.0", suffix: "★", label: "Average rating" },
  ],
};

/**
 * Client reviews, quoted exactly as they appear on Upwork — wording and
 * punctuation untouched — so anyone can check them against the profile.
 */
export const testimonials = [
  {
    quote:
      "I was specifically looking for a provider who could take my PSD files for desktop & mobile layouts and make a site that flows that way. That's what Tushar provided. He was quick and easy to communicate with.",
    project: "Responsive website from PSD designs",
  },
  {
    quote:
      "Tushar is a professional & quite experienced developer, It was really a pleasure & smooth experience working with him, Highly Recommended.",
    project: "Next.js landing page deployment",
  },
  {
    quote: "It was amazing working with Tushar as always, Highly recommend him",
    project: "Personal brand landing page · repeat client",
  },
  {
    quote:
      "Tushar was able to start right away and deliver the following HTML template on time. Thanks Again",
    project: "Website rebuilt as an HTML template",
  },
];

export const experience = [
  {
    company: "Freelance",
    location: "Remote · Direct clients & Upwork",
    role: "Frontend Developer",
    period: "Apr 2026 — Present",
    points: [
      "Shipping React and Next.js frontends for direct clients, most of them referred through my network.",
      "Turning Figma files into responsive, production-ready UI — landing pages through to full web apps.",
      "Top Rated on Upwork — 100% Job Success across 16 jobs, 5.0 from 9 client reviews.",
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
    link: "https://kreo.app/feeds",
  },
  {
    featured: true,
    title: "Monkify.ai",
    subtitle: "AI-driven hiring and recruitment platform",
    role: "Team Lead",
    year: "2025",
    /* the business has since closed — shown under the role so the missing
       link reads as deliberate rather than forgotten */
    status: "No longer live",
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
    title: "Pagecraft",
    subtitle: "Content-only CMS for React and Next.js sites",
    role: "Solo Developer",
    year: "2026",
    description:
      "A CMS that keeps the design in code and hands site owners only the words and photos. Publishing fires an on-demand revalidate, so the static page is live again in about three seconds — and an MCP server lets AI coding agents draft content without being able to publish it.",
    metrics: [
      { value: "~3s", label: "publish to live" },
      { value: "9", label: "section types" },
      { value: "26", label: "MCP tools for AI agents" },
    ],
    tech: ["Next.js", "React", "TypeScript", "REST API", "MCP"],
    link: "https://mypagecraft.com",
    image: "/work/mypagecraft.png",
  },

  /* ---- client work: renders as the card grid under the featured rows ----
     `image` is optional; drop a file in public/work/ and point at it. */

  {
    title: "PropHives",
    subtitle: "Property management software",
    tech: ["React", "Next.js"],
    link: "https://prophives.com",
    image: "/work/prophives.png",
  },
  {
    title: "Onward Vet",
    subtitle:
      "Practice management platform for veterinary clinics — scheduling, records and billing in one place",
    tech: ["WordPress", "Elementor"],
    link: "https://onwardvet.com",
    image: "/work/onwardvet.png",
  },
  {
    title: "DESIFEST",
    subtitle:
      "Canada's largest South Asian music and arts festival, Toronto",
    tech: ["React", "Vite"],
    link: "https://desifest.ca",
    image: "/work/desifest.png",
  },
  {
    title: "Behavior Technician Association",
    subtitle:
      "National professional association for behavior technicians — 2,500+ members",
    tech: [],
    link: "https://behaviortechassociation.com/",
    image: "/work/behaviortech.png",
  },
  {
    title: "Safe Haven Housing",
    subtitle: "Housing provider, Australia",
    tech: ["React", "Vite"],
    link: "https://safehavenhousing.com.au",
    image: "/work/safehaven.png",
  },
  {
    title: "Blissful Cleaning",
    subtitle: "Cleaning services business site",
    tech: ["React", "Vite"],
    link: "https://www.blissfulcleaningpro.com",
    image: "/work/blissful.png",
  },
  {
    title: "StrateAura",
    subtitle: "Strategy consultancy — “Where Strategy Comes to Life”",
    tech: ["React", "Vite"],
    link: "https://strateaura.com",
    image: "/work/strateaura.png",
  },
  {
    title: "Naxatra Labs",
    subtitle: "Business website",
    tech: ["React", "Vite"],
    link: "https://naxatralabs.com",
    image: "/work/naxatralabs.png",
  },
  {
    title: "Cook & Craft",
    subtitle: "Online store",
    tech: ["React", "Vite"],
    link: "https://cook-craft.dhcb.io/store/",
    image: "/work/cookandcraft.png",
  },
  {
    title: "BKL Ventures",
    subtitle: "Early-access landing page",
    tech: ["React", "Vite", "Framer Motion"],
    link: "https://www.bklventures.com",
    image: "/work/bklventures.png",
  },
  {
    title: "Lin Wilder",
    subtitle: "Author portfolio site",
    tech: ["React", "Vite"],
    link: "https://linwilder.com",
    image: "/work/linwilder.png",
  },
  {
    title: "RRhai Tech",
    subtitle: "Company website",
    tech: ["React", "Vite"],
    link: "https://www.rrhaitech.com",
    image: "/work/rrhaitech.png",
  },

  {
    title: "DataCentre Crew",
    subtitle:
      "Two-sided marketplace placing verified trades on AI data centre builds",
    tech: ["React", "Vite"],
    link: "https://www.datacentrecrew.com",
    image: "/work/datacentrecrew.png",
  },
  {
    title: "TransitionMemory",
    subtitle:
      "Succession platform capturing owner knowledge before retirement or sale",
    tech: ["React", "Vite"],
    link: "https://www.transitionmemory.com",
    image: "/work/transition-memory.png",
  },
  {
    title: "Lil' Loaves",
    subtitle:
      "Craft bakery with online ordering — breads, cookies and crackers",
    tech: ["React", "Vite"],
    link: "https://lilloaves.com",
    image: "/work/lil-loaves.png",
  },

  {
    title: "Webfluere",
    subtitle: "Web design and development studio site",
    tech: ["React", "Vite"],
    link: "https://webfluere.com",
    image: "/work/webfluere.png",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
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
    items: [
      "Node.js",
      "Express",
      "Next.js API Routes",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "Firebase",
      "Stripe",
    ],
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
  { label: "Reviews", href: "#reviews" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
