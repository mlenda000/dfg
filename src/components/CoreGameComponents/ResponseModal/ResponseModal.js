import React, { useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import { useEffect } from "react";

const ResponseModal = ({ setShowResponseModal }) => {
  const { gameRound, responseMsg, setShowScoreCard } = useContext(GameContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScoreCard(true);
      setShowResponseModal(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [setShowResponseModal, setShowScoreCard]);

  return (
    <div className="round-modal__overlay">
      <div className="round-modal__content ">
        <h1 className="round-modal__title">
          {responseMsg ? "Correct!" : "Sorry, that wasn't right"}
        </h1>
        {responseMsg?.streak && (
          <h2 className="round-modal__subtitle">
            {`You got a streak! ${responseMsg.streak} correct`}
          </h2>
        )}
      </div>
    </div>
  );
};
export default ResponseModal;
