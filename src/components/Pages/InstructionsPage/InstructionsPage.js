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
      </div>
      <div className="instructions-page" zIndex={2}>
        <button
          onClick={() => navigate(-1)}
          className="back-button"
          style={{ zIndex: 2 }}
          type="button"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/back-button.png"}
            alt="Go back"
            style={{ cursor: "pointer" }}
          />
        </button>

        <div className="instruction-page__content" style={{ zIndex: 2 }}>
          <div className="information-page__description" style={{ zIndex: 2 }}>
            <h2 className="instruction-page__image-header">How to Play</h2>
            <ol>
              <li>
                <p>
                  You'll see a news card and need to decide if it's real or
                  fake.
                </p>
                <img
                  src={process.env.PUBLIC_URL + "/images/news-card.png"}
                  alt="News Card"
                  className="instruction-page__image"
                />
              </li>
              <li>
                <p>
                  If it's fake, you'll have to figure out which trick the
                  villains are using!
                </p>
                <img
                  src={process.env.PUBLIC_URL + "/images/tactic-cards.png"}
                  alt="tactic cards"
                  className="instruction-page__image"
                />
              </li>
              <li>
                <p>
                  If you think the news card is telling the truth, use the
                  “Facts” card.
                </p>
                <img
                  src={process.env.PUBLIC_URL + "/images/new-cards/true.png"}
                  alt="Facts Card"
                  height={200}
                />
              </li>
              <li>
                <p>
                  The little eye symbols at the bottom right of each news card
                  shows how many tricks are being used.
                </p>
                <img
                  src={process.env.PUBLIC_URL + "/images/eye-symbol.png"}
                  alt="Eye Symbol"
                  className="instruction-page__image"
                />
              </li>
              <li>
                <p>
                  If you make the wrong guesses, you will lose followers, but if
                  you guess correctly, you will gain more.
                </p>
                <p>The player with the most followers at the end wins!</p>
              </li>
            </ol>
          </div>
        </div>
        <button onClick={handleClick} className="next-button" type="button">
          <img
            src={process.env.PUBLIC_URL + "/images/lets-go-button.png"}
            alt="Logo"
            style={{
              cursor: "pointer",
              width: "50%",
              height: "auto",
              marginBottom: "30px",
            }}
          />
        </button>
      </div>
    </>
  );
};

export default InstructionsPage;
