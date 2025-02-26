import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../GenericComponents/Button/Button";

const InstructionsPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/game");
  return (
    <div className="main">
      <div className="main-title">
        <span>Instructions</span>
      </div>
      <div className="main-description">
        <p>
          You will travel through different worlds You'll see an online news
          article—can you tell if it's real or fake? If you think it's fake,
          choose one or more of the cards below on the article. Get ready to
          test your debunking skills!"
        </p>
      </div>
      <div>
        <Button display="primary" onClick={handleClick}>
          Skip
        </Button>
      </div>
    </div>
  );
};

export default InstructionsPage;
