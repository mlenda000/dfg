import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { GlobalProvider } from "./context/GlobalContext";
import { GameProvider } from "./context/GameContext";
import Main from "./components/Pages/MainPage/Main";
import GamePage from "./components/Pages/GamePage/GamePage";
import IntroPage from "./components/Pages/IntroPage/IntroPage";
import InformationPage from "./components/Pages/InformationPage/InformationPage";
import CreditsPage from "./components/Pages/CreditsPage/CreditsPage";
import UserPage from "./components/Pages/UserPage/UserPage";
import InstructionsPage from "./components/Pages/InstructionsPage/InstructionsPage";
import PlayerSelectionPage from "./components/Pages/PlayerSelectionPage/PlayerSelectionPage";
import NameSelectionPage from "./components/Pages/NameSelectionPage/NameSelectionPage";
import ScrollToTop from "./components/GenericComponents/ScrollToTop/ScrollToTop";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/intro" element={<IntroPage />} />
            <Route path="/information" element={<InformationPage />} />
            <Route path="/instructions" element={<InstructionsPage />} />
            <Route path="/player-selection" element={<PlayerSelectionPage />} />
            <Route path="/name-selection" element={<NameSelectionPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/credits" element={<CreditsPage />} />
            <Route
              path="/game"
              element={
                <GameProvider>
                  <GamePage />
                </GameProvider>
              }
            />
            {/*TODO:  when credits is added reenable this*/}
            {/* <Route path="/credits" element={<CreditsPage />} /> */}
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
