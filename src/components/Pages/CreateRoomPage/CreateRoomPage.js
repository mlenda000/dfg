import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../../context/GameContext";
import Input from "../../GenericComponents/Input/Input";
import Button from "../../GenericComponents/Button/Button";

const CreateRoomPage = () => {
  const navigate = useNavigate();
  const { room, setRoom, setRooms, setGameState } = useContext(GameContext);
  const handleInput = (value) => {
    setRoom(value);
  };

  const handleSubmit = () => {
    if (room === "") {
      alert("Please enter a room name");
      return;
    } else {
      setRooms((prevRooms) => [...prevRooms, room]);
      setGameState("lobby");
    }
  };

  return (
    <div className="create-room">
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
        src={process.env.PUBLIC_URL + "/images/new-game.png"}
        alt="Logo"
        style={{ width: "25%", height: "auto" }}
        className="create-room__title"
      />
      <form>
        <div className="create-room__input">
          <Input
            placeholder="Room name"
            onChange={(e) => handleInput(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
export default CreateRoomPage;
