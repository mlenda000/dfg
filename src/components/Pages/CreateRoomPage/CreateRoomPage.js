import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../../context/GameContext";
import { ThemeContext } from "../../../context/ThemeContext";
import Input from "../../GenericComponents/Input/Input";

const CreateRoomPage = () => {
  const navigate = useNavigate();
  const { room, setRoom, setRooms, setGameState } = useContext(GameContext);
  const { themeStyle, themeBackgrounds } = useContext(ThemeContext);
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
        className="create-room main-page"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            `/images/backgrounds/${themeBackgrounds[themeStyle]}`
          })`,
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
        <div className="create-room__container">
          <img
            src={process.env.PUBLIC_URL + "/images/new-game.png"}
            alt="Logo"
            style={{ width: "35%", height: "auto" }}
            className="create-room__title"
          />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="create-room__input">
              <Input
                placeholder="Room name"
                onChange={(e) => handleInput(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default CreateRoomPage;
