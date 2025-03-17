import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import { GlobalContext } from "../../../context/GlobalContext";
import Scoreboard from "../../CoreGameComponents/ScoreBoard/ScoreBoard";
import ActiveGamePage from "../ActiveGamePage/ActiveGamePage";
import GameEndPage from "../GameEndPage/GameEndPage";
import LobbyPage from "../LobbyPage/LobbyPage";
import CreateRoomPage from "../CreateRoomPage/CreateRoomPage";

const GamePage = () => {
  const { gameState } = useContext(GameContext);
  const { playerName, avatar } = useContext(GlobalContext);
  console.log("global context", playerName, avatar);

  return (
    <div className="game-page">
      <>
        {gameState === "lobby" && <LobbyPage />}
        {gameState === "newRoom" && <CreateRoomPage />}
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
