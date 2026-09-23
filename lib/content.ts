// TODO: replace with the real production domain once it's live.
export const SITE_URL = "https://tobiasmarroquin.dev";

export type StackedProject = {
  id: string;
  kind: "client" | "work" | "personal";
  liveUrl?: string;
  repo?: string;
  images: [string, string, string];
};

export const stackedProjects: StackedProject[] = [
  {
    id: "okda",
    kind: "client",
    liveUrl: "https://okda-landing.vercel.app/",
    images: ["/projects/okda-1.jpg", "/projects/okda-2.jpg", "/projects/okda-3.jpg"],
  },
  {
    id: "florencia",
    kind: "client",
    liveUrl: "https://florencia-ski.vercel.app/es",
    repo: "https://github.com/toba456/florencia-ski",
    images: [
      "/projects/florencia-1.jpg",
      "/projects/florencia-2.jpg",
      "/projects/florencia-3.jpg",
    ],
  },
];

export type MoreProject = {
  id: string;
  repo: string;
  liveUrl?: string;
  tags: string[];
};

export const moreProjects: MoreProject[] = [
  {
    id: "snap",
    repo: "https://github.com/toba456/snap-url-shortener",
    tags: ["TypeScript", "Node.js", "Express", "SQLite", "Playwright"],
  },
  {
    id: "calorie_tracker",
    repo: "https://github.com/toba456/calorie-tracker",
    tags: ["React", "TypeScript", "Vite"],
  },
  {
    id: "tip_calculator",
    repo: "https://github.com/toba456/Calculator_Tip",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "guitarla",
    repo: "https://github.com/toba456/GuitarLA",
    tags: ["React", "Vite", "CSS"],
  },
  {
    id: "tenedores",
    repo: "https://github.com/toba456/5Tenedores",
    tags: ["React Native", "Expo", "Firebase"],
  },
];

export const marqueeImages = [
  "/marquee/m1.jpg",
  "/marquee/m2.jpg",
  "/marquee/m3.jpg",
  "/marquee/m4.jpg",
  "/marquee/m5.jpg",
  "/marquee/m6.jpg",
  "/marquee/m7.jpg",
  "/marquee/m8.jpg",
  "/marquee/m9.jpg",
  "/marquee/m10.jpg",
];

export const marqueeRow1 = marqueeImages.slice(0, 5);
export const marqueeRow2 = marqueeImages.slice(5);

export const skillCategories = {
  frontend: ["React JS", "TypeScript", "Next.js", "Tailwind CSS", "HTML & CSS", "Vite"],
  mobile: ["React Native", "Expo", "React Navigation", "Redux", "GraphQL"],
  backend: ["Node.js", "Express.js", "Firebase", "MongoDB", "SQLite", "REST APIs"],
  ai: ["Claude Code", "Claude API", "Gemini API", "Cursor", "AI-augmented workflows"],
} as const;
