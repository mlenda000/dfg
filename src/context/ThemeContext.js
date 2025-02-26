import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("");
  const [themeStyle, setThemeStyle] = useState("oligs");

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        themeStyle,
        setThemeStyle,
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
