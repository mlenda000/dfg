import { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";
import LandingPage from "../LandingPage/LandingPage";
import GamePage from "../GamePage/GamePage";
import GameEndPage from "../GameEndPage/GameEndPage";

const Main = () => {
  const { gameState } = useContext(GameContext);
  return (
    <div className="main">
      {gameState === "Lobby" ||
        gameState === "game" ||
        (gameState === "end" && (
          <>
            <h1>Welcome to the Game</h1>
            <div>
              <div>
                {gameState === "lobby" && <LandingPage />}
                {gameState === "game" && <GamePage />}
                {gameState === "end" && <GameEndPage />}
              </div>
            </div>{" "}
          </>
        ))}
      {informationState && <InformationPage />}
    </div>
  );
};

export default Main;
