import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../GenericComponents/Button/Button";

const InformationPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/instructions");

  return (
    <>
      <div className="information-page">
        <button onClick={() => navigate(-1)} className="back-button">
          <img
            src={process.env.PUBLIC_URL + "/images/back-button.png"}
            alt="Go back"
            style={{ cursor: "pointer" }}
          />
        </button>
        <img
          src={process.env.PUBLIC_URL + "/images/about.png"}
          alt="Super Debunkers"
          height="90px"
          style={{ marginBottom: "-40px" }}
        />
        <div className="information-page__content">
          <div className="information-page__title">
            ONLINE ACTIONS HAVE
            <br /> OFFLINE CONSEQUENCES
          </div>
          <div className="information-page__description">
            Spotting fake news is super important because it helps us make smart
            decisions based on the truth! Fake news can spread false
            information, make people believe things that aren't true, and cause
            confusion or panic. By spotting fake news, we can make sure we’re
            not tricked into believing or sharing lies. Plus, it helps keep
            everyone well-informed, so we can all stay safe and make good
            choices!
          </div>
        </div>

        <img
          src={process.env.PUBLIC_URL + "/images/login-button.png"}
          alt="Logo"
          className="main-login"
          style={{ cursor: "pointer" }}
        />
      </div>
      <button onClick={handleClick} className="next-button">
        <img
          src={process.env.PUBLIC_URL + "/images/next-button.png"}
          alt="Logo"
          style={{ cursor: "pointer", width: "50%", height: "auto" }}
        />
      </button>
    </>
  );
};

export default InformationPage;
