import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import LandingPage from "../LandingPage/LandingPage";
import GamePage from "../GamePage/GamePage";
import GameEndPage from "../GameEndPage/GameEndPage";

const Main = () => {
  const { gameState } = useContext(GameContext);
  console.log(gameState);
  return (
    <div className="main">
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
    </div>
  );
};

export default Main;
