import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../../context/GameContext";
import RoomTab from "../../GenericComponents/RoomTab/RoomTab";

const LobbyPage = () => {
  const { setGameState, sendMessage, rooms } = useContext(GameContext);
  const navigate = useNavigate();

  const handleClick = (name, room) => {
    console.log("handleClick", name, room);
    if (room === "New game") {
      setGameState("newRoom");
    } else {
      sendMessage({ name, type: "player", avatar: "avatar1", room });
      setGameState("game");
    }
  };

  return (
    <>
      <button onClick={() => navigate(-1)} className="back-button">
        <img
          src={`${process.env.PUBLIC_URL}/images/Back-arrow.png`}
          alt="back"
        />
      </button>
      <div className="lobby">
        <h1 className="lobby__title">JOIN GAME</h1>
        <div className="lobby__rooms">
          {rooms &&
            rooms.map((room) => (
              <RoomTab room={room} onClick={handleClick} key={room} />
            ))}
        </div>
      </div>
    </>
  );
};

export default LobbyPage;
