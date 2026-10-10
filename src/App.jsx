import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MaterialIcon from './components/MaterialIcon';
import { hydrateThemeFromStorage } from './utils/themePalette';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import OtherThingsPage from './pages/OtherThingsPage';
import OtherThingsDetailPage from './pages/OtherThingsDetailPage';
import LoginPage from './pages/LoginPage';
import SandboxPage from './pages/SandboxPage';

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    hydrateThemeFromStorage();
  }, []);

  return (
    <div className={`app-shell${(location.pathname === '/' || location.pathname.startsWith('/projects') || ['/about', '/resume'].includes(location.pathname)) ? ' portfolio-shell' : ''}`}>
      <ScrollToTopOnRouteChange />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <h1><Link className="site-name-link" to="/">James Lytle</Link></h1>
        <nav aria-label="Primary navigation">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Projects
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            About
          </NavLink>
          <NavLink to="/other-things" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Lab
          </NavLink>
          <a className="header-resume-link" href={`${import.meta.env.BASE_URL}resume.pdf`}>
            <MaterialIcon name="description" />
            Resume
            <span className="header-resume-download" aria-hidden="true"><MaterialIcon name="download" /></span>
          </a>
        </nav>
      </header>

      <main id="main-content" className="site-main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/other-things" element={<OtherThingsPage />} />
          <Route path="/other-things/:slug" element={<OtherThingsDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sandbox" element={<SandboxPage />} />
        </Routes>
      </main>
    </div>
  );
}
