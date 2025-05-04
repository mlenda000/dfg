import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import { ThemeContext } from "../../../context/ThemeContext";
import AvatarImage from "../../GenericComponents/AvatarImage/AvatarImage";

const PlayerSelectionPage = () => {
  const navigate = useNavigate();
  const { avatar, setAvatar } = useContext(GlobalContext);
  const { themeStyle, themeBackgrounds } = useContext(ThemeContext);

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
        className="player-selection"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            `/images/backgrounds/${themeBackgrounds[themeStyle]}`
          })`,
          backgroundSize: "cover",
          margin: "0",
          padding: "0",
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100vh",
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
        <button onClick={() => navigate(-1)} className="back-button">
          <img
            src={`${process.env.PUBLIC_URL}/images/back-button.png`}
            alt="Go back"
          />
        </button>

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
          className="player-selection__title"
        />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="player-selection__avatar-container">
            {avatars.map((img, index) => (
              <div className="player-selection__avatar" key={index}>
                <AvatarImage
                  src={img}
                  avatar={avatar}
                  setAvatar={setAvatar}
                  key={`${avatar}-${index}`}
                />
              </div>
            ))}
          </div>
        </form>
      </div>
    </>
  );
};

export default PlayerSelectionPage;
