export type ProjectKind =
  | "Product"
  | "Open source"
  | "Legal tech"
  | "Automation"
  | "Research"
  | "Native";

export type ProjectStatus = "Public" | "Private" | "Live" | "Local";

export type Project = {
  name: string;
  kind: ProjectKind;
  status: ProjectStatus;
  year: string;
  summary: string;
  detail: string;
  stack: string[];
  links: {
    repo?: string;
    live?: string;
  };
  image?: string;
  accent: string;
  signal: string;
  featured?: boolean;
};

export const featuredProjects: Project[] = [
  {
    name: "Tideflow",
    kind: "Product",
    status: "Private",
    year: "2026",
    summary: "AI missed-call handling for Australian service businesses.",
    detail:
      "A production monorepo spanning a Next.js app, voice worker, Supabase, realtime tool calls, and operational contract tests.",
    stack: ["TypeScript", "Next.js", "Supabase", "OpenAI Realtime", "Nx"],
    links: {
      live: "https://www.tideflow.au/",
    },
    image: "/assets/tideflow.png",
    accent: "#ff5a3d",
    signal: "production system",
    featured: true,
  },
  {
    name: "Policai",
    kind: "Legal tech",
    status: "Live",
    year: "2026",
    summary: "Australian AI policy tracker across federal, state, and agency sources.",
    detail:
      "Combines structured policy data, court and agency context, timelines, maps, editorial pages, and a tested Next.js surface.",
    stack: ["TypeScript", "Next.js", "Supabase", "D3", "Vitest"],
    links: {
      repo: "https://github.com/l0cka/policai",
      live: "https://policai.vercel.app",
    },
    image: "/assets/policai.png",
    accent: "#b9ff66",
    signal: "public civic intelligence",
    featured: true,
  },
  {
    name: "OpenClaw",
    kind: "Product",
    status: "Live",
    year: "2026",
    summary: "A cross-platform personal AI assistant project.",
    detail:
      "A public product site and TypeScript codebase exploring personal agent workflows, setup, and assistant ergonomics.",
    stack: ["TypeScript", "React", "AI agents", "Product UI"],
    links: {
      repo: "https://github.com/l0cka/openclaw",
      live: "https://openclaw.ai",
    },
    image: "/assets/openclaw.png",
    accent: "#8fd3ff",
    signal: "personal AI tooling",
    featured: true,
  },
  {
    name: "MatterOS",
    kind: "Legal tech",
    status: "Public",
    year: "2026",
    summary: "Self-hosted legal ops command center.",
    detail:
      "An open-source Python project for contracts, requests, compliance deadlines, privilege-aware access, and auditable legal workflows.",
    stack: ["Python", "FastAPI", "Legal ops", "CLI"],
    links: {
      repo: "https://github.com/l0cka/matteros",
    },
    accent: "#ffd166",
    signal: "legal operations",
    featured: true,
  },
  {
    name: "Commodity",
    kind: "Product",
    status: "Public",
    year: "2026",
    summary: "Australia/APAC oil and LNG tracker.",
    detail:
      "A market data product with a dual-mode map UI, charting, ingestion jobs, and Postgres-backed commodity intelligence.",
    stack: ["TypeScript", "Next.js", "Drizzle", "Postgres", "Charts"],
    links: {
      repo: "https://github.com/l0cka/commodity",
    },
    accent: "#d8b4fe",
    signal: "market intelligence",
    featured: true,
  },
  {
    name: "GitLaw",
    kind: "Legal tech",
    status: "Public",
    year: "2026",
    summary: "Git-native tooling for legal documents.",
    detail:
      "A TypeScript monorepo with document models, parsing, diffing, workflow utilities, CLI tooling, and a browsing UI.",
    stack: ["TypeScript", "Turbo", "CLI", "Next.js", "Document models"],
    links: {
      repo: "https://github.com/l0cka/gitlaw",
    },
    accent: "#6ee7b7",
    signal: "versioned legal docs",
    featured: true,
  },
  {
    name: "Enrich Aged Care",
    kind: "Legal tech",
    status: "Live",
    year: "2026",
    summary: "Public explorer for enriched aged-care legislation.",
    detail:
      "A Next.js research surface for ingesting, searching, and presenting aged-care legislative material.",
    stack: ["TypeScript", "Next.js", "Legislation", "Playwright", "Vitest"],
    links: {
      repo: "https://github.com/l0cka/enrich-aged-care",
      live: "https://enrich-aged-care.vercel.app",
    },
    image: "/assets/enrich-aged-care.png",
    accent: "#fca5a5",
    signal: "public law explorer",
    featured: true,
  },
  {
    name: "WhisperPad",
    kind: "Native",
    status: "Private",
    year: "2026",
    summary: "Menu bar dictation app that turns speech into polished text.",
    detail:
      "A macOS utility focused on fast capture, transcript cleanup, and writing into the active app without breaking flow.",
    stack: ["Swift", "macOS", "Speech", "Menu bar app"],
    links: {},
    accent: "#f0abfc",
    signal: "native productivity",
    featured: true,
  },
  {
    name: "BlueThread",
    kind: "Open source",
    status: "Public",
    year: "2026",
    summary: "Self-hosted bridge between iMessage group chats and Slack channels.",
    detail:
      "A local-first connector that runs on a Mac, reads approved local conversations, and relays mapped group chats into Slack.",
    stack: ["macOS", "Slack", "Local-first", "Open source"],
    links: {
      repo: "https://github.com/tideflowau/blue-thread",
    },
    accent: "#93c5fd",
    signal: "connector infrastructure",
    featured: true,
  },
  {
    name: "Slack News Bot",
    kind: "Automation",
    status: "Public",
    year: "2026",
    summary: "Licensed market/news feed bot for compact Slack digests.",
    detail:
      "Fetches RSS or JSON feeds, normalizes stories, dedupes, ranks, and posts concise digests to a fixed Slack channel.",
    stack: ["TypeScript", "RSS", "Slack", "Postgres", "Vitest"],
    links: {
      repo: "https://github.com/tideflowau/slack-news-bot",
    },
    accent: "#c4b5fd",
    signal: "news automation",
    featured: true,
  },
];

export const archiveProjects: Project[] = [
  {
    name: "AusLex",
    kind: "Legal tech",
    status: "Live",
    year: "2026",
    summary: "Australian legal AI assistant web application.",
    detail: "A public legal assistant prototype with a Python-heavy backend surface.",
    stack: ["Python", "React", "Legal AI"],
    links: {
      repo: "https://github.com/l0cka/auslex",
      live: "https://auslex.vercel.app",
    },
    accent: "#facc15",
    signal: "legal assistant",
  },
  {
    name: "Australian Law",
    kind: "Research",
    status: "Public",
    year: "2026",
    summary: "Python repository for Australian law research work.",
    detail: "Research code and legal data exploration.",
    stack: ["Python", "Legal research"],
    links: {
      repo: "https://github.com/l0cka/australian-law",
    },
    accent: "#67e8f9",
    signal: "research code",
  },
  {
    name: "Paralegal",
    kind: "Legal tech",
    status: "Public",
    year: "2026",
    summary: "Agentic legal software concept.",
    detail: "Early public repository exploring agent-driven legal workflows.",
    stack: ["Legal AI", "Agents"],
    links: {
      repo: "https://github.com/l0cka/paralegal",
    },
    accent: "#fb7185",
    signal: "agentic legal work",
  },
  {
    name: "sRGB Galahad II Trinity AIO Plugin",
    kind: "Open source",
    status: "Public",
    year: "2025",
    summary: "JavaScript plugin project for hardware lighting control.",
    detail: "Utility work around device control and desktop setup.",
    stack: ["JavaScript", "Hardware"],
    links: {
      repo: "https://github.com/l0cka/srgb-galahad-ii-trinity-aio-plugin",
    },
    accent: "#a7f3d0",
    signal: "hardware utility",
  },
  {
    name: "SHGPR UCF Figures",
    kind: "Research",
    status: "Public",
    year: "2025",
    summary: "Figure and visualisation repository.",
    detail: "A public JavaScript repository for chart and figure work.",
    stack: ["JavaScript", "Visualisation"],
    links: {
      repo: "https://github.com/l0cka/SHGPR_UCF_Figures",
    },
    accent: "#fdba74",
    signal: "visual research",
  },
];

export const allProjects = [...featuredProjects, ...archiveProjects];
