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

  //TODO: update icons to Avis versions

  const avatars = [
    `${process.env.PUBLIC_URL}/images/Avatars/avatar1.png`,
    `${process.env.PUBLIC_URL}/images/Avatars/avatar2.png`,
    `${process.env.PUBLIC_URL}/images/Avatars/avatar3.png`,
    `${process.env.PUBLIC_URL}/images/Avatars/avatar4.png`,
    `${process.env.PUBLIC_URL}/images/Avatars/avatar5.png`,
    `${process.env.PUBLIC_URL}/images/Avatars/avatar6.png`,
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
          src={`${process.env.PUBLIC_URL}/images/back-button.png`}
          alt="Go back"
        />
      </button>
      <img
        src={process.env.PUBLIC_URL + "/images/login-button.png"}
        alt="Logo"
        className="main-login"
        style={{ cursor: "pointer" }}
      />
      <button onClick={handleSubmit} className="next-button">
        <img
          src={process.env.PUBLIC_URL + "/images/next-button.png"}
          alt="Logo"
          style={{ cursor: "pointer", width: "50%", height: "auto" }}
        />
      </button>

      <img
        src={process.env.PUBLIC_URL + "/images/select-profile.png"}
        alt="Select profile"
        style={{ width: "30%", height: "auto", marginTop: "80px" }}
      />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="player-selection__avatar-container">
          {avatars.map((img, index) => (
            <AvatarImage
              src={img}
              avatar={avatar}
              setAvatar={setAvatar}
              key={`${avatar}-${index}`}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default PlayerSelectionPage;
