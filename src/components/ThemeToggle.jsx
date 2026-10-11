
import { useContext } from "react";
import { AppContext } from "./AppContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button className="btn btn-primary" onClick={toggleTheme}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

export default ThemeToggle;
