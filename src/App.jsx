import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
  return (
    <div className="app-shell">
      <ScrollToTopOnRouteChange />
      <header className="site-header">
        <h1>James Lytle</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/other-things">Other Things</Link>
        </nav>
      </header>

      <main className="site-main">
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
