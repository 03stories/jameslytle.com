import { NavLink } from 'react-router-dom';
import './LabNavLink.css';

export default function LabNavLink() {
  return (
    <NavLink to="/other-things" className="lab-nav-link">
      <span className="lab-nav-label">
        Lab
        <span className="lab-nav-atmosphere" aria-hidden="true">
          <span className="lab-nav-cloud" />
          <span className="lab-nav-cloud" />
          <span className="lab-nav-bubble" />
          <span className="lab-nav-bubble" />
          <span className="lab-nav-bubble" />
          <span className="lab-nav-bubble" />
          <span className="lab-nav-bubble" />
        </span>
      </span>
    </NavLink>
  );
}
