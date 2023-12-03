import { Link } from "react-router-dom";

import "./SideBar.css";

export function SideBar() {
  return (
    <nav className="sidebar-wrapper">
      <div className="sidebar-header">
        <img
          className="sidebar-header-logo"
          src="/logo-twin.svg"
          alt="Twin's logo"
        />
        <Link to="/notifications" className="sidebar-header-notifications">
          <img
            src="/icon-bell.svg"
            alt="Bell icon, link to notifications page"
          />
        </Link>
      </div>
      <div>
        <h3 className="sidebar-section-title title-3">Active</h3>
        <div className="sidebar-workflow">
          <Link to="/" className="sidebar-workflow-link title-3 color-white">
            <span className="sidebar-workflow-link--light">News tracker |</span>
            Gekko
          </Link>
          <div className="sidebar-workflow-time tiny-1 color-white">
            12h ago
          </div>
        </div>
      </div>
      <div>
        <h3 className="sidebar-section-title title-3">Past</h3>
        <div className="sidebar-workflow">
          <Link to="/" className="sidebar-workflow-link title-3 color-white">
            <span className="sidebar-workflow-link--light">
              Company research |
            </span>
            OpenAI
          </Link>
          <div className="sidebar-workflow-time tiny-1 color-white">
            12h ago
          </div>
        </div>
      </div>
    </nav>
  );
}
