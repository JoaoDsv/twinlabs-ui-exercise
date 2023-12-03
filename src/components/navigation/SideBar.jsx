import { Link } from "react-router-dom";

import { IntegrationCircle } from "../IntegrationCircle";
import "./SideBar.css";

export function SideBar() {
  return (
    <nav className="sidebar-wrapper">
      <div className="sidebar-top">
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
              <span className="sidebar-workflow-link--light">
                News tracker |
              </span>
              Gekko
              <div className="sidebar-workflow-integrations">
                <IntegrationCircle product="tc" />
                <IntegrationCircle product="p" />
                <IntegrationCircle product="gmail" />
              </div>
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
              <div className="sidebar-workflow-integrations">
                <IntegrationCircle product="tc" />
                <IntegrationCircle product="p" />
                <IntegrationCircle product="gmail" />
              </div>
            </Link>
            <div className="sidebar-workflow-time tiny-1 color-white">
              12h ago
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-footer">
        <button className="button-dark">Set a new workflow</button>
        <p className="sidebar-footer-version">Alpha v0.1.0</p>
      </div>
    </nav>
  );
}
