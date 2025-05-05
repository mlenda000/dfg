import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const InstructionsPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/player-selection");
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
        <div className="information-page" zIndex={2}>
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
            src={process.env.PUBLIC_URL + "/images/instructions.png"}
            alt="Instructions"
            style={{ zIndex: 2, marginBottom: "-40px" }}
            className="instructions-title"
          />
          <div className="information-page__content" style={{ zIndex: 2 }}>
            <div
              className="information-page__description"
              style={{ zIndex: 2 }}
            >
              <ol>
                <li>
                  You will be shown online articles which you must examine
                  carefully and determine if its real or fake.
                </li>
                <li>Take your time to read the Article Carefully.</li>
                <li>
                  Think about whether the article seems true or if something
                  feels off. Does it sound believable?
                </li>
                <li>
                  Pick a Debunker Card: If you think the article is fake, choose
                  the debunker card that shows what’s wrong with it.
                </li>
              </ol>
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

export default InstructionsPage;
