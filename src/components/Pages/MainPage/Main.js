import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../GenericComponents/Button/Button";

const Main = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/instructions");

  return (
    <div className="main">
      <div className="main-title">
        <span>Debunker Sensei</span>
      </div>
      <div className="main-description">
        <p>
          Fake news is everywhere! Do you have what it takes to spot the lies
          and uncover the truth? Sharpen your detective skills, bust fake
          content, and become the ultimate debunker — while gaining tons of
          followers along the way!
        </p>
      </div>
      <div>
        <Button display="primary" onClick={handleClick}>
          Play
        </Button>
      </div>
    </div>
  );
};

export default Main;
