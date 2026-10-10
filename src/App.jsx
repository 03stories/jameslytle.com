import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
import { defaults, readTokens, tokenStyles, loadGoogleFont } from './design/tokens';

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNavigation, setMobileNavigation] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(max-width: 720px)');
    const update = () => setMobileNavigation(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);
  const [layoutGuides, setLayoutGuides] = useState(false);
  useEffect(() => {
    try { setLayoutGuides(sessionStorage.getItem('portfolio-layout-guides') === 'true'); } catch {}
    const update = event => {
      setLayoutGuides(event.detail);
      try { sessionStorage.setItem('portfolio-layout-guides', String(event.detail)); } catch {}
    };
    window.addEventListener('portfolio-layout-guides', update);
    return () => window.removeEventListener('portfolio-layout-guides', update);
  }, []);
  const [designTokens, setDesignTokens] = useState(defaults);
  useEffect(() => {
    setDesignTokens(readTokens());
    const update = event => setDesignTokens(event.detail);
    window.addEventListener('portfolio-design-change', update);
    return () => window.removeEventListener('portfolio-design-change', update);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--portfolio-bg', designTokens.bg);
  }, [designTokens.bg]);

  useEffect(() => {
    Promise.all([loadGoogleFont(designTokens['heading-font']), loadGoogleFont(designTokens['body-font'])]).catch(() => {});
  }, [designTokens['heading-font'], designTokens['body-font']]);

  useEffect(() => {
    hydrateThemeFromStorage();
  }, []);

  return (
    <div data-layout-guides={layoutGuides} style={tokenStyles(designTokens)} className={`app-shell${(location.pathname === '/' || location.pathname.startsWith('/projects') || location.pathname.startsWith('/other-things') || ['/about', '/resume', '/design-system', '/sandbox'].includes(location.pathname)) ? ' portfolio-shell' : ''}`}>
      <ScrollToTopOnRouteChange />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <h1><Link className="site-name-link" to="/">James Lytle</Link></h1>
        <button className="mobile-menu-toggle" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(open => !open)}>
          {menuOpen ? 'Close' : 'Menu'}<span className="mobile-menu-icon" data-open={menuOpen} aria-hidden="true"><i /><i /></span>
        </button>
        <div className="mobile-navigation-panel" data-open={menuOpen} inert={mobileNavigation && !menuOpen ? '' : undefined}>
        <div className="mobile-navigation-clip">
        <nav id="primary-navigation" data-open={menuOpen} aria-label="Primary navigation" onKeyDown={event => { if (event.key === 'Escape') { setMenuOpen(false); document.querySelector('.mobile-menu-toggle')?.focus(); } }}>
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
        </div>
        </div>
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
          <Route path="/design-system" element={<SandboxPage />} />
          <Route path="/sandbox" element={<SandboxPage />} />
        </Routes>
      </main>
    </div>
  );
}
