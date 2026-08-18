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
};

export type MinorProject = {
  name: string;
  line: string;
  href: string;
};

export const featuredProjects: Project[] = [
  {
    name: "Policai",
    tagline: "A public register of Australian AI policy and court guidance.",
    description:
      "A searchable, provenance-led register covering federal, state and territory developments. A daily collector finds changes from official sources; editorial review controls what enters the register.",
    stack: ["Next.js", "TypeScript", "React", "D3", "Claude"],
    year: "2026",
    status: "Live",
    links: [
      { label: "Live site", href: "https://policai.org/" },
      { label: "Source", href: "https://github.com/l0cka/policai" },
    ],
  },
  {
    name: "Legal Skills",
    tagline: "Open-source legal workflows for AI agents.",
    description:
      "A portable marketplace of Australian legal-workflow plugins for Claude Cowork and ChatGPT Work. The skills state their jurisdiction, sources, assumptions and human-review boundaries.",
    stack: ["Python", "Claude", "Codex", "Legal research"],
    year: "2026",
    status: "Open source",
    links: [{ label: "Source", href: "https://github.com/l0cka/legal-skills" }],
  },
  {
    name: "CaseLaw Guard",
    tagline: "Fail-closed case-law citation verification for drafting workflows.",
    description:
      "A Python package and MCP server that extracts case citations and verifies their existence through configured sources. Its guarantee is deliberately narrow: citation existence, not proposition support or good-law status.",
    stack: ["Python", "MCP", "PyPI", "Australian case law"],
    year: "2026",
    status: "Released · archived",
    links: [
      { label: "Package", href: "https://pypi.org/project/caselaw-guard/" },
      { label: "Source", href: "https://github.com/l0cka/caselaw-guard" },
    ],
  },
  {
    name: "Kitroom",
    tagline: "A native macOS control centre for coding-agent extensions.",
    description:
      "An open-source Swift app for inspecting and managing skills, plugins and MCP servers across local and SSH-connected hosts. Changes use explicit plans, backups and post-change verification.",
    stack: ["Swift 6", "SwiftUI", "macOS", "OpenSSH"],
    year: "2026",
    status: "Early development",
    links: [{ label: "Source", href: "https://github.com/l0cka/kitroom" }],
  },
  {
    name: "Harvey LAB",
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
