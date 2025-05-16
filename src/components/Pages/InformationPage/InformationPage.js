import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const InformationPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/instructions");
  const { themeStyle, themeBackgrounds } = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            `/images/backgrounds/${themeBackgrounds[themeStyle]}`
          })`,
          zIndex: -1,
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
      </div>
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
        <div className="information-page__login ">
          <img
            src={process.env.PUBLIC_URL + "/images/login-button.png"}
            alt="Logo"
            className="main-login__image"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="information-page__content">
          <div className="information-page__text ">
            <div className="information-page__title">
              DEBUNKERS! Here's your mission.
            </div>
            <div className="information-page__description">
              <p>
                In a world of news and gossip, super villains spread fake news
                to create confusion. Outsmart them, expose their tricks and
                reveal the truth.
              </p>
              <p>
                The more fake news you debunk, the more followers you gain,
                bringing you one step closer to becoming a Super Debunker!
              </p>
            </div>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/images/villains.png"}
            alt="Logo"
            className="information-page__villains"
          />
          <button onClick={handleClick} className="next-button">
            <img
              src={process.env.PUBLIC_URL + "/images/pink-next-button.png"}
              alt="Logo"
              style={{ cursor: "pointer", width: "50%", height: "auto" }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default InformationPage;
