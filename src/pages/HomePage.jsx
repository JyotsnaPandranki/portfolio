import { Link } from "react-router-dom";
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "../components/Icons";
import { portfolioData } from "../data/portfolio";

function DetailCard({ label, value, href }) {
  return (
    <article className="detail-card">
      <p className="detail-label">{label}</p>
      {href ? (
        <a
          className="detail-value detail-link"
          href={href}
          rel="noreferrer"
          target={href.startsWith("mailto:") ? undefined : "_blank"}
        >
          {value}
        </a>
      ) : (
        <p className="detail-value">{value}</p>
      )}
    </article>
  );
}

function SocialLink({ href, label, icon: Icon }) {
  return (
    <a
      aria-label={label}
      className="social-link"
      href={href}
      rel="noreferrer"
      target={href.startsWith("mailto:") ? undefined : "_blank"}
    >
      <Icon className="social-icon" />
    </a>
  );
}

export function HomePage() {
  const featuredProjects = portfolioData.projects.slice(0, 2);
  const socialLinks = [
    {
      label: "GitHub",
      href: portfolioData.githubProfile,
      icon: GithubIcon,
    },
    {
      label: "LinkedIn",
      href: portfolioData.linkedinProfile,
      icon: LinkedinIcon,
    },
    {
      label: "Email",
      href: `mailto:${portfolioData.personalEmail}`,
      icon: MailIcon,
    },
  ];

  return (
    <div className="page-stack">
      <section className="page-panel hero-panel">
        <div className="hero-copy">
          <div className="social-strip">
            {socialLinks.map((item) => (
              <SocialLink key={item.label} {...item} />
            ))}
          </div>

          <p className="section-kicker">{portfolioData.heroEyebrow}</p>
          <h2 className="hero-display">{portfolioData.fullName}</h2>
          <p className="hero-role">{portfolioData.role}</p>
          <p className="hero-summary">{portfolioData.summary}</p>

          <div className="hero-actions">
            <a
              className="primary-button"
              href={`mailto:${portfolioData.personalEmail}`}
            >
              Contact Me
              <ArrowUpRightIcon className="action-icon" />
            </a>
            <Link className="secondary-button" to="/projects">
              Explore Projects
            </Link>
          </div>

          <div className="metric-grid">
            {portfolioData.highlights.map((item) => (
              <article className="metric-card" key={item.label}>
                <p className="metric-label">{item.label}</p>
                <p className="metric-value">{item.value}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="portrait-stage">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <article className="portrait-card">
            <p className="card-caption">Profile Picture</p>

            <div className="portrait-frame">
              <img
                alt={`${portfolioData.fullName} profile placeholder`}
                className="portrait-image"
                src={portfolioData.profileImage}
              />
            </div>

            <div className="portrait-meta">
              <p className="portrait-name">{portfolioData.fullName}</p>
              <p className="portrait-location">{portfolioData.location}</p>
            </div>
          </article>
        </aside>
      </section>

      <section className="content-grid">
        <article className="page-panel content-card">
          <p className="section-kicker">About Me</p>
          <p className="panel-copy">{portfolioData.about}</p>
          <div className="callout-block">
            <p className="callout-label">Why this helps for jobs and internships</p>
            <p className="callout-copy">{portfolioData.studentPitch}</p>
          </div>

        </article>

        <article className="page-panel content-card">
          <p className="section-kicker">Research Interests</p>
          
          <div className="interest-cloud">
            {portfolioData.researchInterests.map((interest) => (
              <span className="neon-chip" key={interest}>
                {interest}
              </span>
            ))}
          </div>

        </article>
      </section>

      <section className="content-grid content-grid-tight">
        <article className="page-panel content-card">
          <p className="section-kicker">Personal Details</p>

          <div className="detail-grid">
            <DetailCard label="Name" value={portfolioData.fullName} />
            <DetailCard label="Phone Number" value={portfolioData.phone} />
            <DetailCard
              label="Personal Email"
              href={`mailto:${portfolioData.personalEmail}`}
              value={portfolioData.personalEmail}
            />
            <DetailCard
              label="College Email"
              href={`mailto:${portfolioData.collegeEmail}`}
              value={portfolioData.collegeEmail}
            />
          </div>
        </article>

        <article className="page-panel content-card">
          <p className="section-kicker">Skills</p>

          <div className="skills-cloud">
            {portfolioData.skills.map((skill) => (
              <span className="neon-chip neon-chip-teal" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="page-panel project-preview-section">
        <div className="section-head">
          <div>
            <p className="section-kicker">Projects</p>
          </div>

          <Link className="secondary-button" to="/projects">
            Projects
          </Link>
        </div>

        <div className="preview-grid">
          {featuredProjects.map((project, index) => (
            <article className="preview-card" key={project.title}>
              <p className="preview-index">{`0${index + 1}`}</p>
              <h4 className="preview-title">{project.title}</h4>
              <p className="preview-subtitle">{project.subtitle}</p>
              <p className="preview-copy">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-panel opportunity-banner">
        <div>
          <p className="section-kicker">Opportunity Ready</p>
          <h3 className="opportunity-title">
            Built to support internships, jobs, and future applications.
          </h3>
        </div>

        <a
          className="primary-button"
          href={`mailto:${portfolioData.personalEmail}`}
        >
          Let&apos;s Connect
          <ArrowUpRightIcon className="action-icon" />
        </a>
      </section>
    </div>
  );
}
