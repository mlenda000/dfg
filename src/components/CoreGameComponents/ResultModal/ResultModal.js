import React, { useState, useEffect } from "react";
import InfluencerCard from "../InfluencerCard/InfluencerCard";
import ReasonsCard from "../ReasonsCard/ReasonsCard";
import Button from "../../GenericComponents/Button/Button";

const ResultModal = ({ onClose }) => {
  const [showComponents, setShowComponents] = useState(false);
  const [resultMessage, setResultMessage] = useState("0");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponents(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="result-modal__overlay">
      <div className="result-modal__content ">
        {showComponents ? (
          <>
            <InfluencerCard />
            <ReasonsCard />
            <div className="result-modal__button">
              <Button onClick={onClose} display="primary">
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
