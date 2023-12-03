import "./Home.css";
import { WorkflowCard } from "../components/WorkflowCard";
import { SettingsButton } from "../components/SettingsButton";

export function Home() {
  return (
    <div className="home-page-wrapper">
      <div className="home-page-header">
        <SettingsButton />
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
      </div>
    </div>
  );
}
