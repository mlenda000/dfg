import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../GenericComponents/Button/Button";

const InstructionsPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/player-selection");
  return (
    <>
      <button onClick={() => navigate(-1)} className="back-button">
        <img
          src={`${process.env.PUBLIC_URL}/images/back-button.png`}
          alt="Go back"
        />
      </button>
      <img
        src={process.env.PUBLIC_URL + "/images/login-button.png"}
        alt="Logo"
        className="main-login"
        style={{ cursor: "pointer" }}
      />
      <button onClick={handleClick} className="next-button">
        <img
          src={process.env.PUBLIC_URL + "/images/next-button.png"}
          alt="Logo"
          style={{ cursor: "pointer", width: "50%", height: "auto" }}
        />
      </button>
      <div className="instructions-page">
        <img
          src={process.env.PUBLIC_URL + "/images/instructions.png"}
          alt="Instructions"
        />
        <div className="instruction-page__content">
          <ol>
            <li>
              You will be shown online articles which you must examine carefully
              and determine if its real or fake.
            </li>
            <li>Take your time to read the Article Carefully.</li>
            <li>
              Think about whether the article seems true or if something feels
              off. Does it sound believable?
            </li>
            <li>
              Pick a Debunker Card: If you think the article is fake, choose the
              debunker card that shows what’s wrong with it.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default InstructionsPage;
