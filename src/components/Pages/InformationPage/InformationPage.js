import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../GenericComponents/Button/Button";

const InformationPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/instructions");

  return (
    <div className="information-page">
      <button onClick={() => navigate(-1)} className="back-button">
        <img
          src={`${process.env.PUBLIC_URL}/images/back-arrow.png`}
          alt="back"
        />
      </button>
      <div className="information-page__content">
        <div className="information-page__title">
          ONLINE ACTIONS HAVE
          <br /> OFFLINE CONSEQUENCES
        </div>
        <div className="information-page__description">
          Spotting fake news is super important because it helps us make smart
          decisions based on the truth! Fake news can spread false information,
          make people believe things that aren't true, and cause confusion or
          panic. By spotting fake news, we can make sure we’re not tricked into
          believing or sharing lies. Plus, it helps keep everyone well-informed,
          so we can all stay safe and make good choices!
        </div>
      </div>
      <div className="information-page__button">
        <Button display="primary" onClick={handleClick}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default InformationPage;
