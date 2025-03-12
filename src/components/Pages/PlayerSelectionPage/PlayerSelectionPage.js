import React, { useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import { ThemeContext } from "../../../context/ThemeContext";
import Button from "../../GenericComponents/Button/Button";
import Input from "../../GenericComponents/Input/Input";
import AvatarImage from "../../GenericComponents/AvatarImage/AvatarImage";

const LandingPage = () => {
  const { setGameState, sendMessage, playerName, setPlayerName } =
    useContext(GameContext);
  const { themeStyle } = useContext(ThemeContext);

  const handleSubmit = () => {
    sendMessage({playerName, type:"player"});
    setGameState("game");
  };

  const avatars = [
    `/images/avatars/avatar.png`,
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
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
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
