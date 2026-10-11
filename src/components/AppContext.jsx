
import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [cohortName, setCohortName] = useState("Mentor Bridge Cohort-3 Front-End");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <AppContext.Provider
      value={{ theme, cohortName, toggleTheme }}
    >
      {children}
    </AppContext.Provider>
  );
}
