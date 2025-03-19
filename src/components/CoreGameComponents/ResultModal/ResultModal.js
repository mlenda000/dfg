import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import InfluencerCard from "../InfluencerCard/InfluencerCard";
import ReasonsCard from "../ReasonsCard/ReasonsCard";
import Button from "../../GenericComponents/Button/Button";

const ResultModal = ({ setRoundEnd }) => {
  const {
    currentInfluencer,
    influencerCards,
    gameRound,
    setGameRound,
    setCurrentInfluencer,
    sendMessage,
  } = useContext(GameContext);
  const [showComponents, setShowComponents] = useState(false);
  const [resultMessage, setResultMessage] = useState("0");
  const gameCards = [...influencerCards];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponents(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
      setRoundEnd(false);
    }
  };

  return (
    <div className="result-modal__overlay">
      <div className="result-modal__content ">
        {showComponents ? (
          <>
            <InfluencerCard
              name={currentInfluencer?.caption}
              description={currentInfluencer?.bodyCopy}
              example="Influencer Example"
              category={currentInfluencer?.tacticUsed}
              villain={currentInfluencer?.villain}
              image={
                process.env.PUBLIC_URL + `/images/influencer/scientist.png`
              }
            />
            <ReasonsCard />
            <div className="result-modal__button">
              <Button onClick={handleDeal} display="primary">
                Next
              </Button>
            </div>
          </>
        ) : (
          <h1>{Number(resultMessage) > 0 ? "Correct" : "Sorry, try again"}</h1>
        )}
      </div>
    </div>
  );
};
export default ResultModal;
