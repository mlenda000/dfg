import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../GenericComponents/Button/Button";

const Main = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/information");

  return (
    <div className="main-page">
      <div className="main">
        <div className="main-title">
          SUPER
          <br />
          DEBUNKERS
        </div>
        <div className="main-description">
          <p>
            Fake news is everywhere! Do you have what it takes to spot the lies
            and uncover the truth? Sharpen your detective skills, bust fake
            content, and become the ultimate debunker — while gaining tons of
            followers along the way!
          </p>
        </div>
      </div>
      <div className="main-button">
        <Button display="primary" onClick={handleClick}>
          Play
        </Button>
      </div>
    </div>
  );
};

export default Main;
