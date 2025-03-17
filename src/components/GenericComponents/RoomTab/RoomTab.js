import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

const RoomTab = ({ room, playerCount, type, onClick }) => {
  const { playerName } = useContext(GlobalContext);
  return (
    <button className="room-tab" onClick={() => onClick(playerName, room)}>
      <h2>{room}</h2>
      {playerCount > 0 && <playerAvatars type={type} />}
    </button>
  );
};

export default RoomTab;
