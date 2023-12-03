import "./IntegrationCircle.css";

export function IntegrationCircle({ product }) {
  return (
    <img
      className="integration-circle"
      src={`/integration-${product}.svg`}
      alt={`This workflow includes ${product} integration`}
    />
  );
}
