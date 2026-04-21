export type ProjectKind =
  | "Product"
  | "Open source"
  | "Legal tech"
  | "Automation"
  | "Research"
  | "Native";

export type ProjectStatus = "Public" | "Private" | "Live" | "Local" | "Contributor";

export type ProjectVisual =
  | "calls"
  | "policy"
  | "agent"
  | "legalops"
  | "market"
  | "gitlaw"
  | "legislation"
  | "dictation"
  | "bridge"
  | "news"
  | "archive";

export type Project = {
  name: string;
  kind: ProjectKind;
  status: ProjectStatus;
  year: string;
  line: string;
  proof: string[];
  stack: string[];
  links: {
    repo?: string;
    live?: string;
  };
  accent: string;
  visual: ProjectVisual;
};

export const featuredProjects: Project[] = [
  {
    name: "Tideflow",
    kind: "Product",
    status: "Private",
    year: "2026",
    line: "Missed call -> qualified lead -> booked job.",
    proof: ["Realtime voice worker", "Supabase call ledger", "Tool-call contracts", "Nx monorepo"],
    stack: ["TypeScript", "Next.js", "Supabase", "OpenAI Realtime", "Nx"],
    links: {
      live: "https://www.tideflow.au/",
    },
    accent: "#ff5a3d",
    visual: "calls",
  },
  {
    name: "Policai",
    kind: "Legal tech",
    status: "Live",
    year: "2026",
    line: "Australian AI policy, agencies, courts, and timelines.",
    proof: ["Policy matrix", "Agency directory", "Australia map", "Court position tracking"],
    stack: ["TypeScript", "Next.js", "Supabase", "D3", "Vitest"],
    links: {
      repo: "https://github.com/l0cka/policai",
      live: "https://policai.vercel.app",
    },
    accent: "#b9ff66",
    visual: "policy",
  },
  {
    name: "OpenClaw",
    kind: "Open source",
    status: "Contributor",
    year: "2026",
    line: "Contributor work on a personal AI assistant.",
    proof: ["Public repo", "Agent commands", "Product surface", "Typed app code"],
    stack: ["TypeScript", "React", "AI agents", "Product UI"],
    links: {
      repo: "https://github.com/l0cka/openclaw",
      live: "https://openclaw.ai",
    },
    accent: "#8fd3ff",
    visual: "agent",
  },
  {
    name: "MatterOS",
    kind: "Legal tech",
    status: "Public",
    year: "2026",
    line: "A legal ops queue with contracts, requests, and deadlines.",
    proof: ["Privilege-aware access", "Auditable logs", "Self-hosted", "Python package"],
    stack: ["Python", "FastAPI", "Legal ops", "CLI"],
    links: {
      repo: "https://github.com/l0cka/matteros",
    },
    accent: "#ffd166",
    visual: "legalops",
  },
  {
    name: "Commodity",
    kind: "Product",
    status: "Public",
    year: "2026",
    line: "Australia/APAC oil and LNG tracker.",
    proof: ["Dual-mode map", "Market charts", "Vercel Cron", "Postgres data model"],
    stack: ["TypeScript", "Next.js", "Drizzle", "Postgres", "Charts"],
    links: {
      repo: "https://github.com/l0cka/commodity",
    },
    accent: "#d8b4fe",
    visual: "market",
  },
  {
    name: "GitLaw",
    kind: "Legal tech",
    status: "Public",
    year: "2026",
    line: "Legal documents with diffs, schemas, and history.",
    proof: ["Document model", "CLI", "Diff utilities", "Workspace packages"],
    stack: ["TypeScript", "Turbo", "CLI", "Next.js", "Document models"],
    links: {
      repo: "https://github.com/l0cka/gitlaw",
    },
    accent: "#6ee7b7",
    visual: "gitlaw",
  },
  {
    name: "Enrich Aged Care",
    kind: "Legal tech",
    status: "Live",
    year: "2026",
    line: "Aged-care legislation made searchable and inspectable.",
    proof: ["Ingestion pipeline", "Search UI", "Legislation explorer", "Unit and e2e tests"],
    stack: ["TypeScript", "Next.js", "Legislation", "Playwright", "Vitest"],
    links: {
      repo: "https://github.com/l0cka/enrich-aged-care",
      live: "https://enrich-aged-care.vercel.app",
    },
    accent: "#fca5a5",
    visual: "legislation",
  },
  {
    name: "WhisperPad",
    kind: "Native",
    status: "Private",
    year: "2026",
    line: "Speak once. Paste polished text anywhere.",
    proof: ["Menu bar capture", "Transcript cleanup", "Global shortcut", "Native macOS"],
    stack: ["Swift", "macOS", "Speech", "Menu bar app"],
    links: {},
    accent: "#f0abfc",
    visual: "dictation",
  },
  {
    name: "BlueThread",
    kind: "Open source",
    status: "Public",
    year: "2026",
    line: "iMessage group chat -> Slack channel.",
    proof: ["Local-first bridge", "Mapped channels", "Self-hosted", "Open connector"],
    stack: ["macOS", "Slack", "Local-first", "Open source"],
    links: {
      repo: "https://github.com/tideflowau/blue-thread",
    },
    accent: "#93c5fd",
    visual: "bridge",
  },
  {
    name: "Slack News Bot",
    kind: "Automation",
    status: "Public",
    year: "2026",
    line: "Feeds in. Ranked Slack digest out.",
    proof: ["RSS/JSON adapters", "Deduping", "Story ranking", "Webhook delivery"],
    stack: ["TypeScript", "RSS", "Slack", "Postgres", "Vitest"],
    links: {
      repo: "https://github.com/tideflowau/slack-news-bot",
    },
    accent: "#c4b5fd",
    visual: "news",
  },
];

export const archiveProjects: Project[] = [
  {
    name: "AusLex",
    kind: "Legal tech",
    status: "Live",
    year: "2026",
    line: "Australian legal AI assistant.",
    proof: ["Assistant UI", "Legal research", "Public demo"],
    stack: ["Python", "React", "Legal AI"],
    links: {
      repo: "https://github.com/l0cka/auslex",
      live: "https://auslex.vercel.app",
    },
    accent: "#facc15",
    visual: "archive",
  },
  {
    name: "Australian Law",
    kind: "Research",
    status: "Public",
    year: "2026",
    line: "Python legal research code.",
    proof: ["Research scripts", "Legal data"],
    stack: ["Python", "Legal research"],
    links: {
      repo: "https://github.com/l0cka/australian-law",
    },
    accent: "#67e8f9",
    visual: "archive",
  },
  {
    name: "Paralegal",
    kind: "Legal tech",
    status: "Public",
    year: "2026",
    line: "Agentic legal software sketch.",
    proof: ["Agent workflows", "Legal AI"],
    stack: ["Legal AI", "Agents"],
    links: {
      repo: "https://github.com/l0cka/paralegal",
    },
    accent: "#fb7185",
    visual: "archive",
  },
  {
    name: "sRGB Galahad II Trinity AIO Plugin",
    kind: "Open source",
    status: "Public",
    year: "2025",
    line: "Hardware lighting control plugin.",
    proof: ["Desktop utility", "Device control"],
    stack: ["JavaScript", "Hardware"],
    links: {
      repo: "https://github.com/l0cka/srgb-galahad-ii-trinity-aio-plugin",
    },
    accent: "#a7f3d0",
    visual: "archive",
  },
  {
    name: "SHGPR UCF Figures",
    kind: "Research",
    status: "Public",
    year: "2025",
    line: "Figure and visualisation work.",
    proof: ["Charts", "Research output"],
    stack: ["JavaScript", "Visualisation"],
    links: {
      repo: "https://github.com/l0cka/SHGPR_UCF_Figures",
    },
    accent: "#fdba74",
    visual: "archive",
  },
];

export const allProjects = [...featuredProjects, ...archiveProjects];
