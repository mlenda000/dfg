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
          src={`${process.env.PUBLIC_URL}/images/back-arrow.png`}
          alt="back"
        />
      </button>
      <h1 className="create-room__title">Create Room</h1>
      <form>
        <div className="create-room__input">
          <Input
            placeholder="Room name"
            onChange={(e) => handleInput(e.target.value)}
          />
        </div>
        <div className="create-room__button">
          <Button type="submit" display="primary" onClick={handleSubmit}>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};
export default CreateRoomPage;
