import { useContext, useEffect, useCallback } from "react";
import { GameContext } from "../../../context/GameContext";
import { ThemeContext } from "../../../context/ThemeContext";

const ScoreModal = ({ setIsEndGame }) => {
  const {
    gameRound,
    setGameRound,
    setCurrentInfluencer,
    sendMessage,
    setRoundStart,
    setShowGameTimer,
    currentInfluencer,
    influencerCards,
    setShowScoreCard,
    showResponseModal,
    setShowResponseModal,
    gameRoom,
    endGame,
  } = useContext(GameContext);
  const { setThemeStyle } = useContext(ThemeContext);

  const handleDeal = useCallback(() => {
    const gameCards = [...influencerCards];

    if (gameCards.length > gameRound) {
      setCurrentInfluencer(gameCards[gameRound]);
      setGameRound(gameRound + 1);
      const messageRdyInfluencer = {
        type: "influencer",
        villain: currentInfluencer?.villain,
        tactic: currentInfluencer?.tacticUsed,
      };

      sendMessage(messageRdyInfluencer);
      setThemeStyle(currentInfluencer?.villain);
      setShowScoreCard(false);
      setShowGameTimer(false);
      if (!endGame) {
        setRoundStart(true);
      } else {
        setIsEndGame(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentInfluencer?.tacticUsed,
    currentInfluencer?.villain,
    gameRound,
    influencerCards,
    sendMessage,
    setCurrentInfluencer,
    setGameRound,
    setIsEndGame,
    setRoundStart,
    setShowGameTimer,
    setShowScoreCard,
    setThemeStyle,
  ]);

  useEffect(() => {
    setTimeout(() => {
      handleDeal();
    }, 5000);
  }, [handleDeal, setShowResponseModal, showResponseModal]);

  return (
    <div className="round-modal__overlay" style={{ zIndex: 100 }}>
      <div className="score-modal__content ">
        <div className="score-modal__scores">
          <img
            src={process.env.PUBLIC_URL + "/images/scoreboard.png"}
            alt="Scoreboard"
            width={"32%"}
          />
          <h1 className="score-modal__title">
            <div>Rank</div>
            <div>Followers</div>
          </h1>
          {gameRoom?.roomData
            ?.sort((a, b) => b.score - a.score) // Sort players by score in descending order
            .map((player, index) => (
              <div className="score-modal__players" key={player.name}>
                <div className="score-modal__player-left">
                  <div style={{ marginRight: "12px" }}>{index + 1} .</div>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/images/Avatars/${player.avatar}`
                    }
                    alt={player.name}
                    width={"50px"}
                    height={"50px"}
                  />
                  <div>{player.name}</div>
                </div>
                <div>{player?.score}</div>
              </div>
            ))}
        </div>
      </div>
      {/* <div className="round-modal__button">
        <img
          src={process.env.PUBLIC_URL + "/images/next-button.png"}
          alt="Ready for next round"
          width={"50%"}
          height={"auto"}
          style={{ cursor: "pointer" }}
          onClick={handleDeal}
        />
      </div> */}
    </div>
  );
};
export default ScoreModal;
