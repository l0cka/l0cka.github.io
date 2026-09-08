export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  year: string;
  status: "Live" | "Open source" | "Released · archived" | "Early development" | "Upstream contributions";
  links: ProjectLink[];
  hidden?: boolean;
};

export type MinorProject = {
  name: string;
  line: string;
  href: string;
};

const projects: Project[] = [
  {
    name: "Policai",
    tagline: "A public register of Australian AI policy and court guidance.",
    description:
      "Official sources, searchable records and editorial review. Tracks federal, state and territory developments with daily source checks.",
    stack: ["Next.js", "TypeScript", "React", "D3", "Claude"],
    year: "2026",
    status: "Live",
    links: [
      { label: "Visit site", href: "https://policai.org/" },
      { label: "Source", href: "https://github.com/l0cka/policai" },
    ],
  },
  {
    name: "Legal Skills",
    tagline: "Legal workflows for Claude Cowork and ChatGPT Work.",
    description:
      "Eleven plugins and sixty-one skills for Australian legal work, including research, governance and legal triage. Each workflow states its sources and where human review is required.",
    stack: ["Python", "Claude", "Codex", "Legal research"],
    year: "2026",
    status: "Open source",
    links: [{ label: "Source", href: "https://github.com/l0cka/legal-skills" }],
  },
  {
    name: "Kitroom",
    hidden: true,
    tagline: "A native macOS control centre for coding-agent extensions.",
    description:
      "Inspect and manage Claude Code and Codex extensions across local and SSH-connected hosts. Changes use reviewable plans and backups, then verify the result. Still in early development.",
    stack: ["Swift 6", "SwiftUI", "macOS", "OpenSSH"],
    year: "2026",
    status: "Early development",
    links: [{ label: "Source", href: "https://github.com/l0cka/kitroom" }],
  },
  {
    name: "CaseLaw Guard",
    hidden: true,
    tagline: "Check whether a case citation exists before relying on it.",
    description:
      "A Python package and MCP server for citation existence, not proposition support or good-law status. Released on PyPI; the repository is archived.",
    stack: ["Python", "MCP", "PyPI", "Australian case law"],
    year: "2026",
    status: "Released · archived",
    links: [
      { label: "Package", href: "https://pypi.org/project/caselaw-guard/" },
      { label: "Source", href: "https://github.com/l0cka/caselaw-guard" },
    ],
  },
  {
    name: "Harvey LAB",
    hidden: true,
    tagline: "Public contributions to an open legal-agent benchmark.",
    description:
      "Four upstream pull requests propose corrections to task evidence and stronger validation of shared document paths in Harvey's Legal Agent Benchmark. The contributions remain under upstream review.",
    stack: ["Legal AI", "Agent evaluation", "Python", "Benchmark design"],
    year: "2026",
    status: "Upstream contributions",
    links: [
      {
        label: "Pull requests",
        href: "https://github.com/harveyai/harvey-labs/pulls?q=is%3Apr+author%3Al0cka",
      },
      {
        label: "Project",
        href: "https://github.com/harveyai/harvey-labs",
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => !project.hidden);

export const moreProjects: MinorProject[] = [
  {
    name: "Commodity",
    line: "Public-source Australia and APAC oil and LNG market tracker.",
    href: "https://github.com/l0cka/commodity",
  },
  {
    name: "SHGPR UCF Figures",
    line: "Interactive risk-to-control relationship visualisation.",
    href: "https://l0cka.github.io/SHGPR_UCF_Figures/",
  },
];
