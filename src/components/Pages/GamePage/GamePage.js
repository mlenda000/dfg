import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../../context/GameContext";
import { ThemeContext } from "../../../context/ThemeContext";
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
import EndGameModal from "../../CoreGameComponents/EndGameModal/EndGameModal";

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
    endGame,
    setEndGame,
  } = useContext(GameContext);
  //   const { playerName, avatar } = useContext(GlobalContext);
  const [roundHasEnded, setRoundHasEnded] = useState(false);
  const { themeStyle, themeBackgrounds } = useContext(ThemeContext);
  const [isEndGame, setIsEndGame] = useState(false);

  useEffect(() => {
    if (gameRoom?.count === 5) {
      setWaitingForPlayers(false);
      setRoundStart(true);
    }
  }, [gameRoom?.count, setRoundStart, setWaitingForPlayers]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRoundStart(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, [roundStart, setRoundStart]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            `/images/backgrounds/${themeBackgrounds[themeStyle]}`
          })`,
        }}
        className="main-page"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(190, 190, 190, 0.6)", // Adjust the color and transparency
            zIndex: 0,
          }}
        />
      </div>
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
          {showScoreCard && (
            <ScoreModal
              setScoreCard={setShowScoreCard}
              endGame={endGame}
              setIsEndGame={setIsEndGame}
            />
          )}
          {isEndGame && (
            <EndGameModal setEndGame={setEndGame} setIsEndGame={setIsEndGame} />
          )}
        </>
      )}
      {gameState === "end" && <GameEndPage />}
    </>
  );
};

export default GamePage;
