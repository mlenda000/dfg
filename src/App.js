import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { GameProvider } from "./context/GameContext";
import { GlobalProvider } from "./context/GlobalContext";
import Main from "./components/Pages/MainPage/Main";
import InformationPage from "./components/Pages/InformationPage/InformationPage";
import CreditsPage from "./components/Pages/CreditsPage/CreditsPage";
import UserPage from "./components/Pages/UserPage/UserPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <ThemeProvider>
          <GameProvider>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/information/:categoryId"
                element={<InformationPage />}
              />
              <Route path="/credits" element={<CreditsPage />} />
              <Route path="/user" element={<UserPage />} />
            </Routes>
          </GameProvider>
        </ThemeProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
