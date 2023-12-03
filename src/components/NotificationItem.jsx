import "./NotificationItem.css";

export function NotificationItem({ color }) {
  const mapColorWithIconPath = {
    red: "/icon-notification-warning.svg",
    pink: "/icon-notification-plus-plus.svg",
    grey: "/icon-notification-checked.svg",
  };

  return (
    <div className={`notification ${color}`}>
      <div className="notification-red-dot"></div>
      <div className={`notification-icon icon-${color}`}>
        <img
          src={mapColorWithIconPath[color]}
          alt="Icon notification checked"
        />
      </div>
      <p className="text-1">
        <span className={`bold color-${color}`}>New workflow available! </span>
        You can now ask Twin to update your CRM automatically!
      </p>
    </div>
  );
}
