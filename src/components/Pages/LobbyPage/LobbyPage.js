import React, { useContext, useEffect } from "react";
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

  useEffect(() => {
    const filteredRooms = rooms.filter((room) => room !== "New game");
    console.log("filteredRooms", filteredRooms);
    const message = {
      type: "enteredLobby",
      room: filteredRooms,
    };
    sendMessage(message);
  }, []);

  return (
    <>
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
      <div className="lobby">
        <img
          src={process.env.PUBLIC_URL + "/images/join-game.png"}
          alt="Join game"
        />
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
