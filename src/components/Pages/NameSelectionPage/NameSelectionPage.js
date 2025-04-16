import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import { ThemeContext } from "../../../context/ThemeContext";

import Input from "../../GenericComponents/Input/Input";
import Button from "../../GenericComponents/Button/Button";
import AvatarImage from "../../GenericComponents/AvatarImage/AvatarImage";

const NameSelectionPage = () => {
  const navigate = useNavigate();
  const { playerName, setPlayerName, avatar } = useContext(GlobalContext);
  const { themeStyle } = useContext(ThemeContext);
  const handleSubmit = () => {
    if (playerName === "") {
      alert("Please enter a name");
      return;
    } else {
      navigate("/game");
    }
  };
  return (
    <div className="name-selection">
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
        src={process.env.PUBLIC_URL + "/images/name-profile.png"}
        alt="Logo"
        style={{ width: "25%", height: "auto" }}
        className="name-selection__title"
      />

      <form
        className="name-selection__input"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {avatar && (
          <div className="name-selection__avatar">
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
