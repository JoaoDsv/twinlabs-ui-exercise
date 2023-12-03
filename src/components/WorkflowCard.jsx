import { IntegrationCircle } from "./IntegrationCircle";
import "./WorkflowCard.css";

export function WorkflowCard() {
  return (
    <div className="workflow-card">
      <div className="workflow-card-header">
        <div className="workflow-card-header-left">
          <div className="workflow-card-header-integrations">
            <IntegrationCircle product={integrations[0]} />
            <IntegrationCircle product={integrations[1]} />
            <IntegrationCircle product={integrations[2]} />
            <IntegrationCircle product={integrations[3]} />
          </div>
          <p className="tiny-2">⏳ Saves 8h/week</p>
        </div>
        <button className="workflow-card-header-button" type="button">
          <img
            src="/icon-eye.svg"
            alt="Eye icon, click to show the current workflow"
          />
        </button>
      </div>
      <h3 className="workflow-card-title title-3">
        Send me the most relevant pieces of news every day
      </h3>
      <p className="text-2">
        Related to my company, my activity, a topic or other companies.
      </p>
    </div>
  );
}
