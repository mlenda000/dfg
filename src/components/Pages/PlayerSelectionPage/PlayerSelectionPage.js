import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import { ThemeContext } from "../../../context/ThemeContext";
import Button from "../../GenericComponents/Button/Button";
import Input from "../../GenericComponents/Input/Input";
import AvatarImage from "../../GenericComponents/AvatarImage/AvatarImage";

const PlayerSelectionPage = () => {
  const navigate = useNavigate();
  const { playerName, setPlayerName, avatar, setAvatar } =
    useContext(GlobalContext);
  const { themeStyle } = useContext(ThemeContext);

  const avatars = [
    `${process.env.PUBLIC_URL}/images/avatars/avatar.png`,
    `${process.env.PUBLIC_URL}/images/avatars/avatar.png`,
    `${process.env.PUBLIC_URL}/images/avatars/avatar.png`,
    `${process.env.PUBLIC_URL}/images/avatars/avatar.png`,
    `${process.env.PUBLIC_URL}/images/avatars/avatar.png`,
  ];

  const handleSubmit = () => {
    if (avatar === "") {
      alert("Please select an avatar");
      return;
    } else {
      navigate("/name-selection");
    }
  };

  return (
    <div className="player-selection">
      <button onClick={() => navigate(-1)} className="back-button">
        <img
          src={`${process.env.PUBLIC_URL}/images/Back-arrow.png`}
          alt="back"
        />
      </button>
      <div className="player-selection__title">SELECT PROFILE</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="player-selection__avatar-container">
          {avatars.map((avatar) => (
            <AvatarImage src={avatar} setAvatar={setAvatar} />
          ))}
        </div>
        <div className="player-selection__button">
          <Button onSubmit="submit" themeStyle={themeStyle} display="primary">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PlayerSelectionPage;
