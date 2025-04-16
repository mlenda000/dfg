import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { GameContext } from "../../../context/GameContext";

const RoomTab = ({ room, type, onClick }) => {
  const { playerCount } = useContext(GameContext);
  const { playerName } = useContext(GlobalContext);

  console.log("RoomTab", playerCount.room, playerCount.count);
  console.log("RoomTab playerName", playerName);
  console.log("room", room);

  useEffect(() => {
    console.log("RoomTab useEffect", playerCount);
  }, [playerCount]);

  return (
    <button className="room-tab" onClick={() => onClick(playerName, room)}>
      <h2 className="room-tab__title">{room}</h2>

      {playerCount.count > 0 && room === playerCount.room && (
        <div className="player-avatars">
          {Array.from({ length: playerCount.count }).map((_, index) => (
            <img
              src={`${process.env.PUBLIC_URL}/images/Avatars/avatar.png`}
              alt="players"
              key={index}
              style={{
                width: "48px",
                height: "48px",
                zIndex: 100,
                borderRadius: "4px",
                border: "1px solid #FFF",
                marginLeft: index > 0 ? "-10px" : "0",
              }}
            />
          ))}
        </div>
      )}
    </button>
  );
};

export default RoomTab;
