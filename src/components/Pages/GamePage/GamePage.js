import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import Scoreboard from "../../CoreGameComponents/ScoreBoard/ScoreBoard";
import ActiveGamePage from "../ActiveGamePage/ActiveGamePage";
import GameEndPage from "../GameEndPage/GameEndPage";
import PlayerSelectionPage from "../PlayerSelectionPage/PlayerSelectionPage";

const GamePage = () => {
  const { gameState } = useContext(GameContext);

  return (
    <div className="game-page">
      <>
        {gameState === "lobby" && <PlayerSelectionPage />}
        {gameState === "game" && (
          <>
            <Scoreboard />
            <ActiveGamePage />
          </>
        )}
        {gameState === "end" && <GameEndPage />}
      </>
    </div>
  );
};

export default GamePage;
