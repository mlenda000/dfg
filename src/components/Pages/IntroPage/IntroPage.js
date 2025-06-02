import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const IntroPage = () => {
  const { themeStyle, themeBackgrounds } = useContext(ThemeContext);
  const navigate = useNavigate();
  const handleClick = () => navigate("/information");
  return (
    <>
      <div className="main-login">
        <img
          src={process.env.PUBLIC_URL + "/images/login-button.png"}
          alt="Logo"
          style={{ cursor: "pointer" }}
          className="main-login__image"
        />
      </div>

      <div
        className="main-page"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            `/images/backgrounds/${themeBackgrounds[themeStyle]}`
          })`,
          zIndex: 0,
        }}
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

        <div className="intro-page" style={{ zIndex: 100 }}>
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
          <div className="intro-page__content">
            <div className="intro-page__title">WELCOME DEBUNKERS!</div>
            <div className="intro-page__description">
              This is Base Camp, where you'll learn to spot lies and expose fake
              news on your journey to becoming a Super Debunker. Stay focused,
              check the facts and uncover what's real and what's fake!
            </div>
          </div>
          <button onClick={handleClick} className="next-button">
            <img
              src={process.env.PUBLIC_URL + "/images/pink-next-button.png"}
              alt="Logo"
              style={{ cursor: "pointer", width: "60%", height: "auto" }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default IntroPage;
