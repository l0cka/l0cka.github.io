import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  Mail,
  Monitor,
} from "lucide-react";
import {
  archiveProjects,
  featuredProjects,
  type Project,
  type ProjectKind,
} from "./data/projects";

const filters: Array<"All" | ProjectKind> = [
  "All",
  "Product",
  "Legal tech",
  "Open source",
  "Automation",
  "Native",
  "Research",
];

function App() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return featuredProjects;
    return featuredProjects.filter((project) => project.kind === activeFilter);
  }, [activeFilter]);

  const publicCount = featuredProjects.filter((project) => project.links.repo).length;
  const liveLinkCount = featuredProjects.filter((project) => project.links.live).length;

  return (
    <>
      <header className="site-header" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="l0cka portfolio home">
          l0cka
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#archive">Archive</a>
          <a href="https://github.com/l0cka" target="_blank" rel="noreferrer">
            <Github size={17} aria-hidden="true" />
            GitHub
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-backdrop" aria-hidden="true">
            <div className="hero-panel hero-panel-call">
              <span>+61 412 558 901</span>
              <strong>Booked</strong>
              <p>blocked drain / 8:00 AM / $280</p>
            </div>
            <div className="hero-panel hero-panel-policy">
              <span>AI usage policy</span>
              <strong>63 sources</strong>
              <p>federal / state / courts / agencies</p>
            </div>
            <div className="hero-panel hero-panel-code">
              <span>main</span>
              <strong>npm run build</strong>
              <p>2,100 modules transformed</p>
            </div>
          </div>
          <div className="hero-content">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              Work samples / 2026
            </motion.p>
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              Calls booked. Policies mapped. Tools shipped.
            </motion.h1>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              <a className="primary-action" href="#work">
                <Monitor size={19} aria-hidden="true" />
                View work
              </a>
              <a className="secondary-action" href="https://github.com/l0cka" target="_blank" rel="noreferrer">
                <Github size={19} aria-hidden="true" />
                GitHub profile
              </a>
            </motion.div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Portfolio summary">
          <div>
            <strong>{featuredProjects.length}</strong>
            <span>featured projects</span>
          </div>
          <div>
            <strong>{publicCount}</strong>
            <span>public repos linked</span>
          </div>
          <div>
            <strong>{liveLinkCount}</strong>
            <span>live links</span>
          </div>
          <div>
            <strong>2026</strong>
            <span>build log</span>
          </div>
        </section>

        <section className="section intro-band" aria-labelledby="intro-title">
          <div className="section-kicker">
            <Code2 size={19} aria-hidden="true" />
            Field notes
          </div>
          <div className="intro-grid">
            <h2 id="intro-title">
              Voice calls, legal data, policy maps, Slack feeds, menu bar apps, Git-native documents.
            </h2>
            <p>
              Repos are linked where public. Proprietary product work is shown through artifacts, not repository access.
            </p>
          </div>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="work-heading">
            <div>
              <div className="section-kicker">
                <Layers3 size={19} aria-hidden="true" />
                Selected work
              </div>
              <h2 id="work-title">Artifacts from the build bench.</h2>
            </div>
            <div className="filter-bar" aria-label="Filter projects">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={filter === activeFilter ? "active" : ""}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="project-list">
            {filteredProjects.map((project, index) => (
              <motion.article
                className="project-row"
                key={project.name}
                style={{ "--accent": project.accent } as React.CSSProperties}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.38, delay: Math.min(index * 0.04, 0.18) }}
              >
                <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="project-copy">
                  <div className="project-meta">
                    <span>{project.kind}</span>
                    <span>{project.status}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p className="project-summary">{project.line}</p>
                  <ul className="proof-list" aria-label={`${project.name} evidence`}>
                    {project.proof.map((item) => (
                      <li key={item}>
                        <Check size={15} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="stack-list" aria-label={`${project.name} stack`}>
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className="project-visual">
                  <ProjectArtifact project={project} />
                </div>
                <div className="project-links" aria-label={`${project.name} links`}>
                  {project.links.live ? (
                    <a href={project.links.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                      <ExternalLink size={18} aria-hidden="true" />
                    </a>
                  ) : null}
                  {project.links.repo ? (
                    <a href={project.links.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} repository`}>
                      <Github size={18} aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section archive-section" id="archive" aria-labelledby="archive-title">
          <div className="section-kicker">
            <Code2 size={19} aria-hidden="true" />
            GitHub archive
          </div>
          <div className="archive-heading">
            <h2 id="archive-title">Smaller public traces.</h2>
            <p>
              Earlier repos, research code, utility work, and prototypes.
            </p>
          </div>

          <div className="archive-list">
            {archiveProjects.map((project) => (
              <a
                className="archive-item"
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                key={project.name}
                style={{ "--accent": project.accent } as React.CSSProperties}
              >
                <span className="archive-dot" />
                <strong>{project.name}</strong>
                <span>{project.line}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section className="final-cta" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">GitHub Pages</p>
            <h2 id="contact-title">Full-stack lawyer.</h2>
          </div>
          <div className="cta-actions">
            <a className="primary-action" href="https://github.com/l0cka" target="_blank" rel="noreferrer">
              <Github size={19} aria-hidden="true" />
              Visit GitHub
            </a>
            <a className="secondary-action" href="mailto:hello@l0cka.dev">
              <Mail size={19} aria-hidden="true" />
              Contact
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

function ProjectArtifact({ project }: { project: Project }) {
  if (project.visual === "calls") {
    return (
      <div className="artifact artifact-calls" aria-label={`${project.name} call flow artifact`}>
        <div className="artifact-topline">
          <span>missed call</span>
          <strong>02:14 AM</strong>
        </div>
        <div className="call-card">
          <span>+61 412 558 901</span>
          <strong>Blocked laundry drain</strong>
          <p>"Can you do first thing tomorrow?"</p>
        </div>
        <div className="flow-steps">
          <span>transcript</span>
          <span>qualified</span>
          <span>booked</span>
        </div>
        <div className="booking-ticket">
          <span>Action taken</span>
          <strong>8:00 AM - HWS diagnostic - $280</strong>
        </div>
      </div>
    );
  }

  if (project.visual === "policy") {
    return (
      <div className="artifact artifact-policy" aria-label={`${project.name} policy matrix artifact`}>
        <div className="matrix-row matrix-head">
          <span>Jurisdiction</span>
          <span>Status</span>
          <span>Source</span>
        </div>
        {["Commonwealth", "NSW", "Victoria", "Queensland", "Courts"].map((label, index) => (
          <div className="matrix-row" key={label}>
            <span>{label}</span>
            <span>{index === 0 ? "Updated" : index === 4 ? "Mapped" : "Tracked"}</span>
            <span>{String(index + 18).padStart(2, "0")}</span>
          </div>
        ))}
        <div className="map-strip">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  if (project.visual === "agent") {
    return (
      <div className="artifact artifact-agent" aria-label={`${project.name} command surface artifact`}>
        <div className="terminal-line">$ openclaw run inbox</div>
        <div className="terminal-line muted">scan mail, calendar, tasks</div>
        <div className="agent-orbit">
          <span>mail</span>
          <span>files</span>
          <strong>agent</strong>
          <span>chat</span>
          <span>web</span>
        </div>
        <div className="terminal-line success">7 actions staged</div>
      </div>
    );
  }

  if (project.visual === "legalops") {
    return (
      <div className="artifact artifact-legalops" aria-label={`${project.name} legal queue artifact`}>
        {["MSA review", "DPA renewal", "Board approval", "Privacy request"].map((item, index) => (
          <div className="queue-item" key={item}>
            <span>{item}</span>
            <strong>{["P1", "P2", "P3", "P2"][index]}</strong>
          </div>
        ))}
        <div className="audit-line">audit log: 148 events</div>
      </div>
    );
  }

  if (project.visual === "market") {
    return (
      <div className="artifact artifact-market" aria-label={`${project.name} market chart artifact`}>
        <div className="chart-bars">
          {[42, 68, 51, 82, 73, 92, 65, 88].map((height, index) => (
            <span key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="market-map">
          <span>WA LNG</span>
          <strong>APAC</strong>
          <span>Japan/Korea</span>
        </div>
      </div>
    );
  }

  if (project.visual === "gitlaw") {
    return (
      <div className="artifact artifact-gitlaw" aria-label={`${project.name} diff artifact`}>
        <div className="diff-line add">+ clause.payment.terms = 14 days</div>
        <div className="diff-line keep">  schema.validate(contract)</div>
        <div className="diff-line remove">- approval = email thread</div>
        <div className="repo-tree">
          <span>@gitlaw/core</span>
          <span>@gitlaw/cli</span>
          <span>@gitlaw/web</span>
        </div>
      </div>
    );
  }

  if (project.visual === "legislation") {
    return (
      <div className="artifact artifact-legislation" aria-label={`${project.name} legislation artifact`}>
        <div className="doc-page">
          <span>AGED CARE ACT</span>
          <strong>Part 4.3</strong>
          <p>responsibilities / providers / standards / enforcement</p>
        </div>
        <div className="search-result">
          <span>Search</span>
          <strong>"approved provider"</strong>
        </div>
      </div>
    );
  }

  if (project.visual === "dictation") {
    return (
      <div className="artifact artifact-dictation" aria-label={`${project.name} dictation artifact`}>
        <div className="waveform">
          {[20, 54, 82, 38, 66, 92, 28, 74, 46, 84, 34, 60].map((height, index) => (
            <span key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="dictation-card">
          <span>00:47 captured</span>
          <strong>Clean paragraph ready</strong>
        </div>
      </div>
    );
  }

  if (project.visual === "bridge") {
    return (
      <div className="artifact artifact-bridge" aria-label={`${project.name} connector artifact`}>
        <div className="bridge-node">iMessage</div>
        <div className="bridge-line" />
        <div className="bridge-node center">macOS host</div>
        <div className="bridge-line" />
        <div className="bridge-node">Slack</div>
      </div>
    );
  }

  if (project.visual === "news") {
    return (
      <div className="artifact artifact-news" aria-label={`${project.name} digest artifact`}>
        {["Reuters energy", "Benzinga markets", "ASX filings"].map((source, index) => (
          <div className="news-row" key={source}>
            <span>{source}</span>
            <strong>{[92, 84, 78][index]}</strong>
          </div>
        ))}
        <div className="slack-digest">#market-news / 08:30 digest</div>
      </div>
    );
  }

  return (
    <div className="artifact artifact-archive" aria-label={`${project.name} archive artifact`}>
      <span>{project.kind}</span>
      <strong>{project.name}</strong>
      <p>{project.line}</p>
    </div>
  );
}

export default App;
