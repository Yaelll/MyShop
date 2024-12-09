import { createContext, useEffect, useState } from "react";

export interface DarkModeContextType {
  darkMode: boolean;
  toggle: () => void;
}

const DarkModeContext = createContext<DarkModeContextType>(null);

function DarkModeProvider({ children }) {
  //state variables:
  useEffect(() => {
    const mode = localStorage.getItem("darkMode");
    if (mode === "dark") {
      setDarkMode(true);
      document.body.classList.toggle("dark");
    }
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  //functions:

  function toggle() {
    //calculate the new state as a string: "dark" or "light":
    const newMode = !darkMode ? "dark" : "light";

    //save the new state to local storage:
    localStorage.setItem("darkMode", newMode);

    setDarkMode((prev) => !prev);

    document.body.classList.toggle("dark");
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export { DarkModeProvider, DarkModeContext };
