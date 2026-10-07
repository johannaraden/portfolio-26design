/**
 * All site copy lives here so it can be edited without touching layout code.
 *
 * Anything marked `placeholder: true` renders with a dashed "to fill in" outline
 * and makes `npm run check:content` fail — so nothing half-finished gets deployed.
 */

export const site = {
  name: "Johanna Richter Rådén",
  url: "https://johannaraden.netlify.app",
  role: "Communicator & visual creator",
  email: "johanna.raden@gmail.com",
  linkedin: "https://www.linkedin.com/in/johanna-r%C3%A5d%C3%A9n-0821b310b/",
  github: "https://github.com/johannaraden",
  medium: "https://medium.com/@johanna.raden",
  location: "Sweden",
  description:
    "Communicator and visual creator. I shape ideas into clear stories and strong visuals — from concept and art direction to AI-assisted production and the finished interface.",
} as const;

export const hero = {
  eyebrow: "Communicator · Visual creator · Developer",
  headline: ["Clear ideas,", "made visible."],
  intro:
    "Messages that land, visuals that stick. I take ideas from first concept to finished product, with a multifaceted toolkit and AI to speed up the process.",
};

export type Principle = { title: string; text: string; placeholder?: boolean };

/** How Johanna works. Rewrite in your own words — these are a draft based on the old site. */
export const principles: Principle[] = [
  {
    title: "Message first",
    text: "Years of teaching and rhetoric taught me to find the one thing an audience must take away — and to build every visual around it.",
  },
  {
    title: "Design for real people",
    text: "Personas, user journeys and testing keep the work grounded in who it is for, not in what looks good in a deck.",
  },
  {
    title: "Direct the tools",
    text: "AI speeds up exploration and production; taste, judgement and a consistent visual language are what make the output usable.",
  },
];

export type AiItem = { title: string; text: string; tools?: string[]; placeholder?: boolean };

/**
 * AI work. These are placeholders — replace with real examples:
 * a campaign visual, a moodboard series, a short video, a prompt system, etc.
 */
export const aiWork: AiItem[] = [
  {
    title: "Concept & moodboards",
    text: "Describe a project where you used AI image tools to explore visual directions quickly. What was the brief, what did you generate, what did you choose and why?",
    tools: ["Add tools you use"],
    placeholder: true,
  },
  {
    title: "Copy & messaging",
    text: "Show how you use language models to draft, test and sharpen messaging — and where your own editing made the difference.",
    tools: ["Add tools you use"],
    placeholder: true,
  },
  {
    title: "Production at scale",
    text: "An example of producing many on-brand assets (social formats, variants, video) with AI while keeping a consistent look.",
    tools: ["Add tools you use"],
    placeholder: true,
  },
];

export type SkillGroup = { title: string; items: string[]; placeholder?: boolean };

export const skills: SkillGroup[] = [
  {
    title: "Communication",
    items: [
      "Communication strategy",
      "Rhetoric",
      "Teaching & coaching",
      "Workshop & event facilitation",
      "Project management",
    ],
  },
  {
    title: "Visual & UX",
    items: ["Figma", "Canva", "Adobe XD", "Adobe Illustrator", "Adobe InDesign", "Adobe Premiere", "Miro", "Personas & user journeys"],
  },
  {
    title: "Build",
    items: ["HTML & CSS", "JavaScript", "React", "Node.js", "REST APIs", ""],
  },
];

export type Article = { title: string; summary: string; href: string; tags: string[] };

export const articles: Article[] = [
  {
    title: "Coding is communicating",
    summary:
      "Thoughts on naming and what code communicates — and how a love for languages led me into programming.",
    href: "https://medium.com/@johanna.raden/coding-is-communicating-1c595f6766fd",
    tags: ["Communication", "Naming"],
  },
  {
    title: "HTML, is that you?",
    summary:
      "Moving from vanilla JavaScript to React: where did the HTML go, and what does React give us in return?",
    href: "https://medium.com/@johanna.raden/html-is-that-you-3ada7303b5f5",
    tags: ["React", "Learning"],
  },
  {
    title: "Being a tech bootcamp student",
    summary: "On learning to code through a bootcamp — and the preconceptions that come with it.",
    href: "https://medium.com/@johanna.raden/being-a-tech-bootcamp-student-2f7dc7006b45",
    tags: ["Learning to code"],
  },
];

export type CodeProject = {
  title: string;
  summary: string;
  image: string;
  live: string;
  repo: string;
  stack: string[];
};

/** Earlier front-end builds (2020). Kept as proof of hands-on build skills. */
export const codeProjects: CodeProject[] = [
  {
    title: "Veggie Checker",
    summary: "Scan or type a barcode to see whether a product is vegetarian or vegan.",
    image: "/img/proj-nutrition.webp",
    live: "https://compassionate-noyce-b3f7e0.netlify.app/",
    repo: "https://github.com/johannaraden/project-nutrition",
    stack: ["React", "Redux", "API"],
  },
  {
    title: "Happy Thoughts",
    summary: "A Twitter-like feed for sharing thoughts — front end and API built from scratch.",
    image: "/img/proj-happy-thoughts.webp",
    live: "https://sad-sammet-3a9bbc.netlify.app/",
    repo: "https://github.com/johannaraden/project-happy-thoughts",
    stack: ["React", "API"],
  },
  {
    title: "Organizer",
    summary: "A to-do app designed around upcoming deadlines.",
    image: "/img/proj-organizer.webp",
    live: "https://johannastodoapp.netlify.app/",
    repo: "https://github.com/johannaraden/New-Todo",
    stack: ["React", "Redux"],
  },
  {
    title: "Sign-up flow",
    summary: "A registration and log-in flow with its own API.",
    image: "/img/proj-auth.webp",
    live: "https://modest-bell-37cf0d.netlify.app/",
    repo: "https://github.com/johannaraden/project-auth",
    stack: ["React", "Redux", "API"],
  },
  {
    title: "Swedish quiz",
    summary: "A small grammar quiz with score tracking.",
    image: "/img/proj-quiz.webp",
    live: "https://amazing-heisenberg-555cf5.netlify.app",
    repo: "https://github.com/johannaraden/project-redux-quiz-lions",
    stack: ["React", "Redux"],
  },
];
