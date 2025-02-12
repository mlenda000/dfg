import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import LandingPage from "../LandingPage/LandingPage";
import GamePage from "../GamePage/GamePage";
import GameEndPage from "../GameEndPage/GameEndPage";

const Main = () => {
  const { gameState } = useContext(GameContext);

  return (
    <div className="main">
      <>
        <h1>Welcome to the Game</h1>
        {gameState === "lobby" && <LandingPage />}
        {gameState === "game" && <GamePage />}
        {gameState === "end" && <GameEndPage />}
      </>
    </div>
  );
};

export default Main;
