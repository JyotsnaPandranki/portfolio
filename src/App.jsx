import { NavLink, Route, Routes } from "react-router-dom";
import { FolderIcon, HomeIcon } from "./components/Icons";
import { ParticleField } from "./components/ParticleField";
import { portfolioData } from "./data/portfolio";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";

const navigationItems = [
  {
    label: "Home",
    to: "/",
    icon: HomeIcon,
  },
  {
    label: "Projects",
    to: "/projects",
    icon: FolderIcon,
  },
];

function getNavLinkClass({ isActive }) {
  return isActive ? "nav-link active" : "nav-link";
}

export default function App() {
  return (
    <div className="app-shell">
      <ParticleField />
      <div className="bg-orb bg-orb-one" />
      <div className="bg-orb bg-orb-two" />

      <div className="site-grid">
        <header className="top-bar">
          <div className="brand-lockup">
            <div className="brand-mark">{portfolioData.brandMark}</div>

            <div>
              <p className="brand-kicker">Internship-ready portfolio</p>
              <h1 className="brand-name">{portfolioData.fullName}</h1>
            </div>
          </div>

          <a
            className="top-link"
            href={portfolioData.githubProfile}
            rel="noreferrer"
            target="_blank"
          >
            GitHub Profile
          </a>
        </header>

        <nav className="floating-nav" aria-label="Primary">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                aria-label={item.label}
                className={getNavLinkClass}
                key={item.to}
                to={item.to}
              >
                <Icon className="nav-icon" />
                <span className="nav-tooltip">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <main className="route-shell">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

      </div>
    </div>
  );
}
