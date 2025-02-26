import React, { useState, useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import { ThemeContext } from "../../../context/ThemeContext";
import Button from "../../GenericComponents/Button/Button";
import Input from "../../GenericComponents/Input/Input";
import AvatarImage from "../../GenericComponents/AvatarImage/AvatarImage";

const LandingPage = () => {
  const { setGameState, sendMessage } = useContext(GameContext);
  const { themeStyle } = useContext(ThemeContext);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    sendMessage(input, "player");
    setInput("");
    setGameState("game");
  };

  const avatars = [
    `${process.env.PUBLIC_URL}/images/avatars/avatar.png`,
    `${process.env.PUBLIC_URL}/images/avatars/avatar.png`,
    `${process.env.PUBLIC_URL}/images/avatars/avatar.png`,
    `${process.env.PUBLIC_URL}/images/avatars/avatar.png`,
    `${process.env.PUBLIC_URL}/images/avatars/avatar.png`,
  ];

  return (
    <div className="player-selection">
      <div className="player-selection__title">
        Enter Name and choose an Avatar
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="player-selection__input">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your name"
            themeStyle={themeStyle}
          />
        </div>
        <div className="player-selection__avatar-container">
          {avatars.map((avatar) => (
            <AvatarImage src={avatar} />
          ))}
        </div>
        <div className="player-selection__button">
          <Button onSubmit="submit" themeStyle={themeStyle} display="next">
            Join a table
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LandingPage;
