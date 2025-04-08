import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import { ThemeContext } from "../../../context/ThemeContext";
import Button from "../../GenericComponents/Button/Button";
import AvatarImage from "../../GenericComponents/AvatarImage/AvatarImage";

const PlayerSelectionPage = () => {
  const navigate = useNavigate();
  const { avatar, setAvatar } = useContext(GlobalContext);
  const { themeStyle } = useContext(ThemeContext);

  const avatars = [
    `${process.env.PUBLIC_URL}/images/Avatars/avatar1.png`,
    `${process.env.PUBLIC_URL}/images/Avatars/avatar2.png`,
    `${process.env.PUBLIC_URL}/images/Avatars/avatar3.png`,
    `${process.env.PUBLIC_URL}/images/Avatars/avatar4.png`,
    `${process.env.PUBLIC_URL}/images/Avatars/avatar5.png`,
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
          src={`${process.env.PUBLIC_URL}/images/back-arrow.png`}
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
          {avatars.map((avatar, index) => (
            <AvatarImage
              src={avatar}
              setAvatar={setAvatar}
              key={`${avatar}-${index}`}
            />
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
