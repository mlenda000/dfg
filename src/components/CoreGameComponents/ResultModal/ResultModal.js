import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../../../context/GameContext";

import Tool from "../Tool/Tool"; // Assuming Tool is a component you want to show in the modal

const ResultModal = ({ setRoundEnd }) => {
  const { setShowResponseModal } = useContext(GameContext);

  const [showComponents, setShowComponents] = useState(false);
  const [resultMessage, setResultMessage] = useState("0");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponents(true);
    }, 4300);

    return () => clearTimeout(timer);
  }, []);

  // TODO: add a scoring modal that the next button takes you to let you know what you got

  return (
    <div className="result-modal__overlay">
      <div className="result-modal__content ">
        <Tool showResults={showComponents} />

        {showComponents && (
          <div className="result-modal__button">
            <img
              src={process.env.PUBLIC_URL + "/images/next-button.png"}
              alt="Ready for next round"
              width={"50%"}
              height={"auto"}
              style={{ cursor: "pointer" }}
              onClick={() => {
                return setRoundEnd(false), setShowResponseModal(true);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default ResultModal;
