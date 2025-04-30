import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../../context/GameContext";
import { GlobalContext } from "../../../context/GlobalContext";
import RoomTab from "../../GenericComponents/RoomTab/RoomTab";

const LobbyPage = () => {
  const { setGameState, sendMessage, rooms, webSocketReady, gameRoom } =
    useContext(GameContext);
  const { avatar, playerName } = useContext(GlobalContext);
  const [isConnected, setIsConnected] = useState(false);

  const navigate = useNavigate();

  const handleClick = (name, room, avatar) => {
    // console.log("handleClick", name, room);
    avatar = avatar.substring(avatar.lastIndexOf("/") + 1);
    if (room === "New game") {
      setGameState("newRoom");
    } else {
      sendMessage({
        type: "playerEnters",
        room,
        player: { name, avatar, room },
      });
      setGameState("game");
    }
  };

  useEffect(() => {
    if (webSocketReady && !isConnected) {
      const filteredRooms = rooms.find((room) => room !== "New game");
      const message = {
        type: "enteredLobby",
        room: filteredRooms,
        avatar: avatar.substring(avatar.lastIndexOf("/") + 1),
        name: playerName,
      };
      setIsConnected(true);
      sendMessage(message);
    }
  }, [rooms, sendMessage, webSocketReady, isConnected, avatar, playerName]);

  return (
    <>
      {webSocketReady && (
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
                  <RoomTab
                    room={room}
                    onClick={() => handleClick(playerName, room, avatar)}
                    key={room}
                  />
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LobbyPage;
