export type Screen = {
  title: string;
  wireframe: string;
  prototype: string;
  text: string;
  /** "phone" for tall mobile screens, "desktop" for wide ones */
  format: "phone" | "desktop";
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  role: string[];
  cover: string;
  accent: string;
  challenge: string;
  approach: string;
  personas: { name: string; image: string }[];
  journeyEmbed?: string;
  screens: Screen[];
  motion?: string;
  outcome: { text: string; points?: string[]; placeholder?: boolean };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "swedish-nouns",
    title: "Swedish Nouns",
    client: "Language-learning app concept",
    role: ["UX research", "Visual design", "Prototyping", "Learning design"],
    cover: "/img/lang-home-proto.webp",
    accent: "#e2f046",
    challenge:
      "French has complex verb conjugations, German a challenging word order — and Swedish has nouns. As a Swedish teacher for many years, I know nouns are where most learners stumble. Learning a language is rewarding but overwhelming, and most apps try to cover everything at once.",
    approach:
      "An app that does one thing: Swedish nouns, and only nouns. Narrowing the scope lets learners see the whole topic, understand how far along they are, and start at the level that suits them. The simplicity makes studying feel achievable.",
    personas: [
      { name: "Ji-Yun", image: "/img/lang-persona-jiyun.webp" },
      { name: "Manuel", image: "/img/lang-persona-manuel.webp" },
    ],
    journeyEmbed:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FSebzPuMKApO0CG2LZobjis%2FL.A-User-Journeys%3Fnode-id%3D0%253A1",
    screens: [
      {
        title: "Home",
        wireframe: "/img/lang-home-wf.webp",
        prototype: "/img/lang-home-proto.webp",
        format: "phone",
        text: "A single, confident entry point. Learners pick their level straight away instead of wading through menus — the topic is the product.",
      },
      {
        title: "Profile & level",
        wireframe: "/img/lang-profile-wf.webp",
        prototype: "/img/lang-profile-proto.webp",
        format: "phone",
        text: "The personas showed how important it is to grasp how far along you are. The profile shows points and current level, lets you change level, and shows how much of each level is finished.",
      },
      {
        title: "Test",
        wireframe: "/img/lang-test-wf.webp",
        prototype: "/img/lang-test-proto.webp",
        format: "phone",
        text: "Manuel is impatient and wants immediate feedback, so a progress bar shows how long the exercise takes and how well he is doing. Ji-Yun benefits too: if level 1 is too easy, the exit button lets her move on.",
      },
    ],
    motion: "/img/lang-flow.gif",
    outcome: {
      text: "Working with personas made it clear what learners need:",
      points: [
        "An overview of how much is done and how much is left.",
        "Quick access to tests without reading through study pages first.",
        "The ability to jump straight to the right level.",
      ],
    },
  },
  {
    slug: "karamba",
    title: "Karamba Dance Studio",
    client: "Website for a new dance school",
    role: ["Client brief", "UX research", "Art direction", "Web design"],
    cover: "/img/dance-home-proto.webp",
    accent: "#ee8fd0",
    challenge:
      "A newly started dance school needed a website that made booking courses easy, gave a feel for the different dance styles and showed off the instructors' skills — in a city that already had several well-established schools.",
    approach:
      "The personas made it clear that visual content is key: it convinces experienced dancers to join and inspires total beginners. Course pages lead with video next to the schedule, and the home page gives an immediate sense of what is happening through the social feed.",
    personas: [
      { name: "Ingrid", image: "/img/dance-persona-ingrid.webp" },
      { name: "Max", image: "/img/dance-persona-max.webp" },
    ],
    journeyEmbed:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FP0oSdH6DKAOoJZU5GI4Zgp%2FKaramba-User-Journeys%3Fnode-id%3D0%253A1",
    screens: [
      {
        title: "Home",
        wireframe: "/img/dance-home-wf.webp",
        prototype: "/img/dance-home-proto.webp",
        format: "desktop",
        text: "The home page has to inspire. A top menu would crop the dance photography awkwardly, so a side menu leaves the full frame to the imagery.",
      },
      {
        title: "Courses",
        wireframe: "/img/dance-course-wf.webp",
        prototype: "/img/dance-course-proto.webp",
        format: "desktop",
        text: "Every dance style has its own section with clips, a description and a schedule of times, dates and levels. A pop-up gives address, level, teacher, time and weekday at a glance.",
      },
      {
        title: "Registration",
        wireframe: "/img/dance-reg-wf.webp",
        prototype: "/img/dance-reg-proto.webp",
        format: "desktop",
        text: "Booked courses collect under Registration for an overview before payment. Progress circles fill in step by step, and an empty cart gets its own clear state.",
      },
    ],
    outcome: {
      // The old site only had lorem ipsum here.
      text: "Write a short outcome: what the client said, whether the site launched, and what you would do differently now.",
      placeholder: true,
    },
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
