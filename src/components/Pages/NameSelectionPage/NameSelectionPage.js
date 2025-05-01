import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import { ThemeContext } from "../../../context/ThemeContext";

import Input from "../../GenericComponents/Input/Input";
import AvatarImage from "../../GenericComponents/AvatarImage/AvatarImage";

const NameSelectionPage = () => {
  const navigate = useNavigate();
  const { playerName, setPlayerName, avatar } = useContext(GlobalContext);
  const { themeStyle, themeBackgrounds } = useContext(ThemeContext);
  const handleSubmit = () => {
    if (playerName === "") {
      alert("Please enter a name");
      return;
    } else {
      navigate("/game");
    }
  };
  return (
    <div
      className="name-selection "
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL +
          `/images/backgrounds/${themeBackgrounds[themeStyle]}`
        })`,
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        position: "relative",
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
          zIndex: 1,
        }}
      />
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
        style={{ cursor: "pointer", zIndex: 2 }}
      />
      <button onClick={handleSubmit} className="next-button">
        <img
          src={process.env.PUBLIC_URL + "/images/next-button.png"}
          alt="Logo"
          style={{ cursor: "pointer", width: "50%", height: "auto", zIndex: 2 }}
        />
      </button>

      <img
        src={process.env.PUBLIC_URL + "/images/name-profile.png"}
        alt="Logo"
        style={{ width: "25%", height: "auto", zIndex: 2 }}
        className="name-selection__title"
      />

      <form
        className="name-selection__input"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        style={{ zIndex: 2 }}
      >
        {avatar && (
          <div className="name-selection__avatar" style={{ zIndex: 2 }}>
            <AvatarImage src={avatar} display="chosen-avatar" />
          </div>
        )}
        <Input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter your name"
          themeStyle={themeStyle}
        />
      </form>
    </div>
  );
};
export default NameSelectionPage;
