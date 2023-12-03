import "./Notifications.css";
import { SettingsButton } from "../components/SettingsButton";
import { LogOutButton } from "../components/LogOutButton";
import { NotificationItem } from "../components/NotificationItem";

export function Notifications() {
  return (
    <>
      <div className="notifications-page-header">
        <h1 className="title-1">Notifications page</h1>
        <div className="notifications-page-header-right">
          <SettingsButton />
          <LogOutButton />
        </div>
      </div>
      <div className="notifications-page-body">
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </div>
    </>
  );
}
