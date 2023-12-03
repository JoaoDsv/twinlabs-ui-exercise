import "./Home.css";
import { WorkflowCard } from "../components/WorkflowCard";
import { SettingsButton } from "../components/SettingsButton";
import { LogOutButton } from "../components/LogOutButton";

export function Home() {
  return (
    <div className="home-page-wrapper">
      <div className="home-page-header">
        <SettingsButton />
        <LogOutButton />
      </div>

      <div className="home-page-body">
        <h1 className="home-page-body-title title-1">Welcome, Hugo 👋</h1>
        <p className="title-2">
          Select a workflow you want to automate, then answer a few questions to
          customise it, and let it run in the background for you.
        </p>
        <div className="home-page-section-wrapper">
          <WorkflowCard />
          <WorkflowCard />
          <WorkflowCard />
          <WorkflowCard />
          <WorkflowCard />
          <WorkflowCard />
        </div>
        <div className="home-page-section-wrapper">
          <button
            className="button-light home-page-button-proposal"
            type="button"
          >
            <img src="/icon-send.svg" alt="Send icon" />
            Propose a workflow
          </button>
        </div>
      </div>
    </div>
  );
}
