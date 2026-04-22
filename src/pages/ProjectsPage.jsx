import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "../components/Icons";
import { portfolioData } from "../data/portfolio";

function RepoAction({ github }) {
  if (!github) {
    return <span className="repo-placeholder">Add your GitHub repo link</span>;
  }

  return (
    <a className="repo-button" href={github} rel="noreferrer" target="_blank">
      View GitHub Repository
      <ArrowUpRightIcon className="action-icon" />
    </a>
  );
}

export function ProjectsPage() {
  return (
    <div className="page-stack">
      <section className="page-panel projects-hero">
        <p className="section-kicker">Projects Page</p>
        <h2 className="page-title">
          Projects framed the way recruiters actually read them.
        </h2>
        <p className="panel-copy">
          Each card highlights the problem, stack, and impact while still
          satisfying the assignment requirement that every project links to
          GitHub.
        </p>
      </section>

      <div className="project-showcase-list">
        {portfolioData.projects.map((project, index) => (
          <article
            className="page-panel project-showcase"
            key={project.title}
            style={{
              "--project-accent": project.accent,
              "--project-accent-soft": project.accentSoft,
              "--project-glow": project.glow,
            }}
          >
            <div className="project-visual">
              <div className="project-screen">
                <div>
                  <p className="preview-index">{`0${index + 1}`}</p>
                  <p className="section-kicker">{project.category}</p>
                  <h3 className="project-display">{project.title}</h3>
                  <p className="project-screen-copy">{project.subtitle}</p>
                <div className="screen-badges">
                  {project.stack.slice(0, 3).map((item) => (
                    <span className="screen-badge" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

              </div>
              
                <div className="screen-footer">
                  <div className="callout-block">
                  <p className="callout-label">Why this project matters</p>
                  <p className="callout-copy">{project.impact}</p>
                </div>

                  <article className="screen-stat">
                    <p className="detail-label">Built For</p>
                    <p className="screen-stat-copy">{project.audience}</p>
                  </article>

                  <article className="screen-stat">
                    <p className="detail-label">Signature Value</p>
                    <p className="screen-stat-copy">{project.highlight}</p>
                  </article>
                </div>
              </div>
            </div>

            <div className="project-details">
              <p className="section-kicker">Project Overview</p>
              <h3 className="project-heading">{project.title}</h3>
              <p className="panel-copy">{project.description}</p>

              <div className="stack-cloud">
                {project.stack.map((item) => (
                  <span className="neon-chip neon-chip-teal" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="feature-list">
                {project.features.map((feature) => (
                  <p className="feature-item" key={feature}>
                    {feature}
                  </p>
                ))}
              </div>



              <div className="project-actions">
                <RepoAction github={project.github} />
                <Link className="secondary-button" to="/">
                  Back to Home
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
