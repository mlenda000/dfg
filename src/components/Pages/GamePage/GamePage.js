import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import ActiveGamePage from "../ActiveGamePage/ActiveGamePage";
import GameEndPage from "../GameEndPage/GameEndPage";
import PlayerSelectionPage from "../PlayerSelectionPage/PlayerSelectionPage";

const GamePage = () => {
  const { gameState } = useContext(GameContext);

  return (
    <div className="game-page">
      <>
        {gameState === "lobby" && <PlayerSelectionPage />}
        {gameState === "game" && <ActiveGamePage />}
        {gameState === "end" && <GameEndPage />}
      </>
    </div>
  );
};

export default GamePage;
