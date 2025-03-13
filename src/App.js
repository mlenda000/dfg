import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { GlobalProvider } from "./context/GlobalContext";
import { GameProvider } from "./context/GameContext";
import Main from "./components/Pages/MainPage/Main";
import GamePage from "./components/Pages/GamePage/GamePage";
import InformationPage from "./components/Pages/InformationPage/InformationPage";
import CreditsPage from "./components/Pages/CreditsPage/CreditsPage";
import UserPage from "./components/Pages/UserPage/UserPage";
import InstructionsPage from "./components/Pages/InstructionsPage/InstructionsPage";
import PlayerSelectionPage from "./components/Pages/PlayerSelectionPage/PlayerSelectionPage";
import NameSelectionPage from "./components/Pages/NameSelectionPage/NameSelectionPage";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <ThemeProvider>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/information" element={<InformationPage />} />
              <Route path="/instructions" element={<InstructionsPage />} />
              <Route
                path="/player-selection"
                element={<PlayerSelectionPage />}
              />
              <Route path="/name-selection" element={<NameSelectionPage />} />
              <Route
                path="/game"
                element={
                  <GameProvider>
                    <GamePage />
                  </GameProvider>
                }
              />
              <Route path="/credits" element={<CreditsPage />} />
              <Route path="/user" element={<UserPage />} />
            </Routes>
          </ThemeProvider>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
