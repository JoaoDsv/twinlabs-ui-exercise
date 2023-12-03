import "./SettingsButton.css";

export function SettingsButton() {
  return (
    <button className="settings-button" type="button">
      <img
        className="settings-button-image"
        src="/user-profile-picture.jpg"
        alt="User profile picture, click to open settings"
      />
      hugo@twinlabs.co
    </button>
  );
}
