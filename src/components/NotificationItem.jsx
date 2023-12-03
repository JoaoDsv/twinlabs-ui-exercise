import "./NotificationItem.css";

export function NotificationItem() {
  return (
    <div className="notification">
      <div className="notification-red-dot"></div>
      <div className="notification-icon">
        <img
          src="/icon-notification-checked.svg"
          alt="Icon notification checked"
        />
      </div>
      <p className="text-1">
        <span className="bold">New workflow available! </span>
        You can now ask Twin to update your CRM automatically!
      </p>
    </div>
  );
}
