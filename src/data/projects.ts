export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  year: string;
  status: "Live" | "Public repo" | "Private build" | "Contributor";
  links: {
    repo?: string;
    live?: string;
  };
};

export type MinorProject = {
  name: string;
  line: string;
  href?: string;
};

export const featuredProjects: Project[] = [
  {
    name: "Tideflow",
    tagline: "An AI receptionist for trade businesses: missed call → qualified lead → booked job.",
    description:
      "A production voice product: realtime speech in and out, tool-call contracts so the model requests actions rather than acting, an auditable call ledger, and a booking flow at the end of it.",
    stack: ["TypeScript", "Next.js", "Supabase", "OpenAI Realtime"],
    year: "2026",
    status: "Private build",
    links: {
      live: "https://www.tideflow.au/",
    },
  },
  {
    name: "Commodity",
    tagline: "Australia / APAC oil and LNG market tracker.",
    description:
      "A dual-mode market map with charts over a Postgres data model, refreshed on a schedule. Built to make a fast-moving regional market readable at a glance.",
    stack: ["TypeScript", "Next.js", "Drizzle", "Postgres"],
    year: "2026",
    status: "Public repo",
    links: {
      repo: "https://github.com/l0cka/commodity",
    },
  },
  {
    name: "OpenClaw",
    tagline: "Contributor to an open-source personal AI assistant.",
    description:
      "Contributions across product surfaces and agent commands in a public TypeScript codebase — typed app code on top of an agent runtime.",
    stack: ["TypeScript", "React", "AI agents"],
    year: "2026",
    status: "Contributor",
    links: {
      repo: "https://github.com/l0cka/openclaw",
      live: "https://openclaw.ai",
    },
  },
  {
    name: "WhisperPad",
    tagline: "macOS menu-bar dictation — speak once, paste polished text anywhere.",
    description:
      "A native Swift utility: global shortcut, speech capture, transcript cleanup, straight to the clipboard. Small, fast, and used every day.",
    stack: ["Swift", "macOS", "Speech"],
    year: "2026",
    status: "Private build",
    links: {},
  },
];

export const moreProjects: MinorProject[] = [
  {
    name: "BlueThread",
    line: "Local-first bridge from iMessage groups to Slack.",
    href: "https://github.com/tideflowau/blue-thread",
  },
  {
    name: "Slack News Bot",
    line: "Ranked, de-duplicated news digests delivered to Slack.",
    href: "https://github.com/tideflowau/slack-news-bot",
  },
  {
    name: "sRGB Galahad II plugin",
    line: "Hardware lighting control plugin.",
    href: "https://github.com/l0cka/srgb-galahad-ii-trinity-aio-plugin",
  },
  {
    name: "SHGPR UCF Figures",
    line: "Research figures and visualisation.",
    href: "https://github.com/l0cka/SHGPR_UCF_Figures",
  },
];
