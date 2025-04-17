import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/information");

  return (
    <div className="main-page">
      <div className="main">
        <img
          src={process.env.PUBLIC_URL + "/images/SuperDebunkers.png"}
          alt="Super Debunkers"
          width="50%"
          height="auto"
        />

        <img
          src={process.env.PUBLIC_URL + "/images/play-button.png"}
          alt="Play"
          onClick={handleClick}
          style={{ cursor: "pointer", marginTop: "-60px" }}
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
