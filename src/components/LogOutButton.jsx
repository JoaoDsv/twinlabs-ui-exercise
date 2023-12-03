import "./LogOutButton.css";

export function LogOutButton() {
  return (
    <button className="logout-button" type="button">
      <img
        className="logout-button-image"
        src="/icon-exit.svg"
        alt="Exit icon, click to log out"
      />
    </button>
  );
}
