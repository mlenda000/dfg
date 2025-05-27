import { all } from "axios";
import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("");
  const [themeStyle, setThemeStyle] = useState("all");
  const themeBackgrounds = {
    all: "all.png",
    The_Biost: "biost.png",
    The_Olig: "olig.png",
    The_Bots: "bots.png",
    The_Celeb: "celeb.png",
  };
  const themeImages = {
    all: "all.png",
    The_Biost: "biost.png",
    The_Olig: "olig.png",
    The_Bots: "bots.png",
    The_Celeb: "celeb.png",
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        themeStyle,
        themeBackgrounds,
        themeImages,
        setThemeStyle,
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
