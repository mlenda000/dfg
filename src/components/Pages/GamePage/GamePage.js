import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../../context/GameContext";
// import { GlobalContext } from "../../../context/GlobalContext";
import Scoreboard from "../../CoreGameComponents/ScoreBoard/ScoreBoard";
import ActiveGamePage from "../ActiveGamePage/ActiveGamePage";
import GameEndPage from "../GameEndPage/GameEndPage";
import LobbyPage from "../LobbyPage/LobbyPage";
import CreateRoomPage from "../CreateRoomPage/CreateRoomPage";
import ResultModal from "../../CoreGameComponents/ResultModal/ResultModal";
import RoundModal from "../../CoreGameComponents/RoundModal/RoundModal";
import ResponseModal from "../../CoreGameComponents/ResponseModal/ResponseModal";
import ScoreModal from "../../CoreGameComponents/ScoreModal/ScoreModal";
import WaitingModal from "../../CoreGameComponents/WaitingModal/WaitingModal";

const GamePage = () => {
  const {
    gameState,
    roundEnd,
    setRoundEnd,
    roundStart,
    setRoundStart,
    showResponseModal,
    showScoreCard,
    setShowResponseModal,
    setShowScoreCard,
    gameRoom,
    waitingForPlayers,
    setWaitingForPlayers,
  } = useContext(GameContext);
  //   const { playerName, avatar } = useContext(GlobalContext);
  const [roundHasEnded, setRoundHasEnded] = useState(false);

  useEffect(() => {
    if (gameRoom?.count === 5) {
      setWaitingForPlayers(false);
      setRoundStart(true);
    }
  }, [gameRoom?.count, setRoundStart, setWaitingForPlayers]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRoundStart(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [roundStart, setRoundStart]);

  return (
    <div className="game-page">
      <>
        {gameState === "lobby" && <LobbyPage />}
        {gameState === "newRoom" && <CreateRoomPage />}
        {gameState === "game" && (
          <>
            <Scoreboard
              roundHasEnded={roundHasEnded}
              setRoundHasEnded={setRoundHasEnded}
            />
            <ActiveGamePage
              setRoundEnd={setRoundEnd}
              roundHasEnded={roundHasEnded}
              setRoundHasEnded={setRoundHasEnded}
            />
            {/* {waitingForPlayers && (
              <WaitingModal setWaitingForPlayers={setWaitingForPlayers} />
            )} */}
            {roundStart && <RoundModal setRoundStart={setRoundStart} />}
            {roundEnd && <ResultModal setRoundEnd={setRoundEnd} />}
            {showResponseModal && (
              <ResponseModal setShowResponseModal={setShowResponseModal} />
            )}
            {showScoreCard && <ScoreModal setScoreCard={setShowScoreCard} />}
          </>
        )}
        {gameState === "end" && <GameEndPage />}
      </>
    </div>
  );
};

export default GamePage;
