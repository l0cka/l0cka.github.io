import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  Mail,
  Monitor,
  Sparkles,
} from "lucide-react";
import { archiveProjects, featuredProjects, type ProjectKind } from "./data/projects";

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
  const liveCount = featuredProjects.filter((project) => project.links.live).length;

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
            <img src="/assets/policai.png" alt="" />
            <img src="/assets/tideflow.png" alt="" />
            <img src="/assets/openclaw.png" alt="" />
          </div>
          <div className="hero-content">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              Software, legal tech, AI systems
            </motion.p>
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              l0cka builds practical AI products and sharp developer tools.
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
            <strong>{liveCount}</strong>
            <span>live products</span>
          </div>
          <div>
            <strong>2026</strong>
            <span>active build year</span>
          </div>
        </section>

        <section className="section intro-band" aria-labelledby="intro-title">
          <div className="section-kicker">
            <Sparkles size={19} aria-hidden="true" />
            Current direction
          </div>
          <div className="intro-grid">
            <h2 id="intro-title">
              Products that sit close to real workflows: calls, policy, legal operations, market data, and local AI utilities.
            </h2>
            <p>
              The work spans public experiments, production systems, open-source connectors, and private apps.
              Public repositories are linked directly; private product work is shown as portfolio context only.
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
              <h2 id="work-title">A compact index of the strongest projects.</h2>
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
                  <p className="project-summary">{project.summary}</p>
                  <p className="project-detail">{project.detail}</p>
                  <div className="stack-list" aria-label={`${project.name} stack`}>
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className="project-visual">
                  {project.image ? (
                    <img src={project.image} alt={`${project.name} project screenshot`} loading="lazy" />
                  ) : (
                    <div className="generated-surface" aria-hidden="true">
                      <span>{project.signal}</span>
                      <strong>{project.name}</strong>
                      <div />
                      <div />
                      <div />
                    </div>
                  )}
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
            <h2 id="archive-title">Earlier and smaller public repositories.</h2>
            <p>
              These round out the public GitHub profile without competing with the featured work.
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
                <span>{project.summary}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section className="final-cta" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Available surface</p>
            <h2 id="contact-title">Repos, product work, and local experiments in one place.</h2>
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

export default App;
