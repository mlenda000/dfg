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
      <div
        className="main-page"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            `/images/backgrounds/${themeBackgrounds[themeStyle]}`
          })`,
        }}
      >
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
      <button onClick={() => navigate(-1)} className="back-button">
        <img
          src={`${process.env.PUBLIC_URL}/images/back-button.png`}
          alt="Go back"
        />
      </button>

      <div className="player-selection">
        <h2 className="player-selection__header">Select your Debunker</h2>

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
        <button onClick={handleSubmit} className="next-button">
          <img
            src={
              process.env.PUBLIC_URL +
              `/images/${
                avatar ? "pink-next-button.png" : "gray-next-button.png"
              }`
            }
            alt="Logo"
            style={{ cursor: "pointer", width: "50%", height: "auto" }}
          />
        </button>
      </div>
    </>
  );
};

export default PlayerSelectionPage;
