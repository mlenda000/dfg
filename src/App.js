import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { GameProvider } from "./context/GameContext";
import { GlobalProvider } from "./context/GlobalContext";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider>
        <GameProvider>
          <Main />
        </GameProvider>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
