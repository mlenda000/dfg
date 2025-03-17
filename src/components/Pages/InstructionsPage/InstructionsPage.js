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
          src={`${process.env.PUBLIC_URL}/images/back-arrow.png`}
          alt="back"
        />
      </button>
      <div className="instruction-page">
        <div className="instruction-page__content">
          <div style={{ width: "75%" }}>
            <span className="instruction-page__title">HOW TO PLAY</span>

            <div className="instruction-page__description">
              <p>
                You will be shown online articles which you must examine
                carefully and determine if its real or fake.
              </p>
              <ol>
                <li>
                  Take your time to read the Article Carefully. Think about
                  whether the article seems true or if something feels off. Does
                  it sound believable
                </li>
                <li>
                  Pick a Debunker Card: If you think the article is fake, choose
                  the debunker card that shows what’s wrong with it.
                </li>
              </ol>
            </div>
          </div>
          <div className="instruction-page__image-container">
            <img
              className="instruction-page__image"
              src={`${process.env.PUBLIC_URL}/images/instructions.png`}
              alt="placeholder"
            />
          </div>
        </div>
        <div className="instruction-page__button">
          <Button display="primary" onClick={handleClick}>
            Skip
          </Button>
        </div>
      </div>
    </>
  );
};

export default InstructionsPage;
