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
          src={`${process.env.PUBLIC_URL}/images/back-arrow.png`}
          alt="back"
        />
      </button>
      <h1 className="name-selection__title">NAME PROFILE</h1>

      <form className="name-selection__input" onSubmit={handleSubmit}>
        <div className="name-selection__avatar">
          <AvatarImage src={avatar} display="chosen-avatar" />
        </div>
        <Input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter your name"
          themeStyle={themeStyle}
        />

        <div className="name-selection__button">
          <Button onSubmit="submit" themeStyle={themeStyle} display="primary">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};
export default NameSelectionPage;
