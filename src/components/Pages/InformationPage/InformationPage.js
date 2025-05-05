import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const InformationPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/instructions");
  const { themeStyle, themeBackgrounds } = useContext(ThemeContext);

  return (
    <>
      <div className="main-login">
        <img
          src={process.env.PUBLIC_URL + "/images/login-button.png"}
          alt="Logo"
          className="main-login__image"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            `/images/backgrounds/${themeBackgrounds[themeStyle]}`
          })`,
        }}
        className="main-page"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(190, 190, 190, 0.6)", // Adjust the color and transparency
            zIndex: 0,
          }}
        />
        <div className="information-page" style={{ zIndex: 1 }}>
          <button
            onClick={() => navigate(-1)}
            className="back-button"
            style={{ zIndex: 2 }}
          >
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
            style={{ marginBottom: "-40px", zIndex: 2 }}
          />
          <div className="information-page__content" style={{ zIndex: 2 }}>
            <div className="information-page__title">
              ONLINE ACTIONS HAVE
              <br /> OFFLINE CONSEQUENCES
            </div>
            <div className="information-page__description">
              Spotting fake news is super important because it helps us make
              smart decisions based on the truth! Fake news can spread false
              information, make people believe things that aren't true, and
              cause confusion or panic. By spotting fake news, we can make sure
              we’re not tricked into believing or sharing lies. Plus, it helps
              keep everyone well-informed, so we can all stay safe and make good
              choices!
            </div>
          </div>
        </div>
        <button onClick={handleClick} className="next-button">
          <img
            src={process.env.PUBLIC_URL + "/images/next-button.png"}
            alt="Logo"
            style={{ cursor: "pointer", width: "50%", height: "auto" }}
          />
        </button>
      </div>
    </>
  );
};

export default InformationPage;
