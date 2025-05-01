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
    <div className="round-modal__overlay" style={{ zIndex: 100 }}>
      <div className="response-modal__content ">
        <h1 className="response-modal__title">
          {responseMsg?.hasStreak
            ? "WIN STREAK!"
            : responseMsg?.wasCorrect
            ? "DEBUNKED!"
            : "OOPS!"}
        </h1>
        <h3 className="response-modal__subtitle">
          {responseMsg?.hasStreak
            ? `YOU DEBUNKED ${responseMsg?.streak} IN A ROW`
            : responseMsg?.wasCorrect
            ? "YOU NAILED IT"
            : "YOU'LL GET THEM NEXT TIME"}
        </h3>
      </div>
    </div>
  );
};
export default ResponseModal;
