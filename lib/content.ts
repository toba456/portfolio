// TODO: replace with the real production domain once it's live.
export const SITE_URL = "https://tobiasmarroquin.dev";

export type ProjectImage = { src: string; width: number; height: number };

export type StackedProject = {
  id: string;
  kind: "client" | "work" | "personal";
  liveUrl?: string;
  repo?: string;
  images: [ProjectImage, ProjectImage, ProjectImage];
  imageLayout?: "web" | "mobile";
};

export const stackedProjects: StackedProject[] = [
  {
    id: "okda",
    kind: "client",
    liveUrl: "https://okda-landing.vercel.app/",
    images: [
      { src: "/projects/okda-1.jpg", width: 1100, height: 523 },
      { src: "/projects/okda-2.jpg", width: 1100, height: 517 },
      { src: "/projects/okda-3.jpg", width: 1100, height: 543 },
    ],
  },
  {
    id: "florencia",
    kind: "client",
    liveUrl: "https://florencia-ski.vercel.app/es",
    repo: "https://github.com/toba456/florencia-ski",
    images: [
      { src: "/projects/florencia-1.jpg", width: 1100, height: 512 },
      { src: "/projects/florencia-2.jpg", width: 1100, height: 544 },
      { src: "/projects/florencia-3.jpg", width: 1100, height: 546 },
    ],
  },
  {
    id: "tenedores",
    kind: "personal",
    repo: "https://github.com/toba456/5Tenedores",
    images: [
      { src: "/projects/tenedores-1.jpg", width: 700, height: 1365 },
      { src: "/projects/tenedores-2.jpg", width: 700, height: 1365 },
      { src: "/projects/tenedores-3.jpg", width: 700, height: 1365 },
    ],
    imageLayout: "mobile",
  },
  {
    id: "anonima",
    kind: "work",
    images: [
      { src: "/projects/anonima-1.webp", width: 1176, height: 672 },
      { src: "/projects/anonima-2.png", width: 1196, height: 668 },
      { src: "/projects/anonima-3.png", width: 1198, height: 670 },
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
];

export const marqueeImages: ProjectImage[] = [
  { src: "/marquee/m1.jpg", width: 1100, height: 347 },
  { src: "/marquee/m2.jpg", width: 1100, height: 348 },
  { src: "/marquee/m3.jpg", width: 1100, height: 584 },
  { src: "/marquee/m4.jpg", width: 1100, height: 560 },
  { src: "/marquee/m5.jpg", width: 1100, height: 561 },
  { src: "/marquee/m6.jpg", width: 1100, height: 652 },
  { src: "/marquee/m7.jpg", width: 1100, height: 614 },
  { src: "/marquee/m8.jpg", width: 1100, height: 842 },
  { src: "/marquee/m9.jpg", width: 767, height: 1025 },
  { src: "/marquee/m10.jpg", width: 875, height: 1100 },
];

export const marqueeRow1 = marqueeImages.slice(0, 5);
export const marqueeRow2 = marqueeImages.slice(5);

export const skillCategories = {
  frontend: ["React JS", "TypeScript", "Next.js", "Tailwind CSS", "HTML & CSS", "Vite", "GraphQL", 'API Rest', 'React Query', 'Zustand', "Redux", 'React Testing Library', 'Jest'],
  mobile: ["React Native", "Expo", "React Navigation"],
  backend: ["Node.js", "Express.js", "Firebase", "MongoDB", "SQLite", "REST APIs"],
  ai: ["Claude Code", "Claude API", "Gemini API", "Cursor", "AI-augmented workflows"],
} as const;
