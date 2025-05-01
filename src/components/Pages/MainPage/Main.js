import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const { themeStyle, themeBackgrounds } = useContext(ThemeContext);
  const navigate = useNavigate();
  const handleClick = () => navigate("/information");
  return (
    <div
      className="main-page"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL +
          `/images/backgrounds/${themeBackgrounds[themeStyle]}`
        })`,
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
      <div className="main">
        <img
          src={process.env.PUBLIC_URL + "/images/SuperDebunkers.png"}
          alt="Super Debunkers"
          width="50%"
          height="auto"
          style={{ zIndex: 1 }}
        />

        <img
          src={process.env.PUBLIC_URL + "/images/play-button.png"}
          alt="Play"
          onClick={handleClick}
          style={{ cursor: "pointer", marginTop: "-60px", zIndex: 1 }}
        />
      </div>
      <img
        src={process.env.PUBLIC_URL + "/images/login-button.png"}
        alt="Logo"
        className="main-login"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Main;
