import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../../context/GameContext";
import { ThemeContext } from "../../../context/ThemeContext";
import { GlobalContext } from "../../../context/GlobalContext";
import RoomTab from "../../GenericComponents/RoomTab/RoomTab";

const LobbyPage = () => {
  const { setGameState, sendMessage, rooms, webSocketReady } =
    useContext(GameContext);
  const { avatar, playerName } = useContext(GlobalContext);
  const { themeStyle, themeBackgrounds } = useContext(ThemeContext);
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
          <div className="main-login">
            <img
              src={process.env.PUBLIC_URL + "/images/login-button.png"}
              alt="Logo"
              className="main-login__image"
              style={{ cursor: "pointer", zIndex: 2 }}
            />
          </div>
          <div
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL +
                `/images/backgrounds/${themeBackgrounds[themeStyle]}`
              })`,
              backgroundSize: "cover",
              margin: "0",
              padding: "0",
              position: "absolute",
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
            <div className="lobby">
              <img
                src={process.env.PUBLIC_URL + "/images/join-game.png"}
                alt="Join game"
                style={{ zIndex: 2, marginBottom: "20px" }}
                className="instructions-title"
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
          </div>
        </>
      )}
    </>
  );
};

export default LobbyPage;
