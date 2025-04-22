import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";

//TODO: style this properly with all content that needs to be displayed and is returned form the game

const ScoreModal = () => {
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
  } = useContext(GameContext);

  const gameCards = [...influencerCards];
  const score = 10;

  const handleDeal = () => {
    if (gameCards.length > gameRound) {
      setCurrentInfluencer(gameCards[gameRound]);
      setGameRound(gameRound + 1);
      const messageRdyInfluencer = {
        type: "influencer",
        villain: currentInfluencer?.villain,
        tactic: currentInfluencer?.tacticUsed,
      };

      sendMessage(messageRdyInfluencer);
      setShowScoreCard(false);
      setShowGameTimer(false);
      setRoundStart(true);
    }
  };

  return (
    <div className="round-modal__overlay">
      <div className="round-modal__content ">
        <h2>Score Card</h2>
        <p>Your Score: {score}</p>
      </div>
      <div className="result-modal__button">
        <img
          src={process.env.PUBLIC_URL + "/images/next-button.png"}
          alt="Ready for next round"
          width={"50%"}
          height={"auto"}
          style={{ cursor: "pointer" }}
          onClick={handleDeal}
        />
      </div>
    </div>
  );
};
export default ScoreModal;
