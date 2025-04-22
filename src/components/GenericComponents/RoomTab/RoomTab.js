import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { GameContext } from "../../../context/GameContext";

const RoomTab = ({ room, type, onClick }) => {
  const { playerCount } = useContext(GameContext);
  const { playerName } = useContext(GlobalContext);

  return (
    <button className="room-tab" onClick={() => onClick(playerName, room)}>
      <h2 className="room-tab__title">{room}</h2>
      {playerCount?.roomData?.count > 0 && room === playerCount?.room && (
        <div className="player-avatars">
          {room === playerCount.room &&
            playerCount?.roomData?.players.map((player, index) => (
              <img
                src={`${process.env.PUBLIC_URL}/images/Avatars/${player.avatar}`}
                alt="players"
                key={index}
                style={{
                  width: "55px",
                  height: "55px",
                  zIndex: 1,
                  border: "1px solid #FFF",
                  borderRadius: "50%",
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
