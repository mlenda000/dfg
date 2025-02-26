import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {  } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import { GlobalProvider } from "./context/GlobalContext";
import { GameProvider } from "./context/GameContext";
import Main from "./components/Pages/MainPage/Main";
import GamePage from "./components/Pages/GamePage/GamePage";
import InformationPage from "./components/Pages/InformationPage/InformationPage";
import CreditsPage from "./components/Pages/CreditsPage/CreditsPage";
import UserPage from "./components/Pages/UserPage/UserPage";
import "./App.css";
import InstructionsPage from "./components/Pages/InstructionsPage/InstructionsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <ThemeProvider>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/instructions" element={<InstructionsPage />} />
              <Route
                path="/information/:categoryId"
                element={<InformationPage />}
              />
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
