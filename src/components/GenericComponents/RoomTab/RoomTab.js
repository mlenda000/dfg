import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { GameContext } from "../../../context/GameContext";

const RoomTab = ({ room, type, onClick }) => {
  const { gameRoom, gameRound } = useContext(GameContext);
  const { playerName } = useContext(GlobalContext);

  React.useEffect(() => {
    // Trigger a re-render or handle updates when players change
    if (gameRoom?.gameData) {
    }
  }, [gameRoom?.gameData]);

  console.log("gameRoom", gameRoom);
  return (
    <button
      className="room-tab"
      onClick={() => onClick(playerName, room)}
      style={{ zIndex: 2 }}
      disabled={gameRoom.count >= 5 || gameRound > 1}
    >
      <h2 className="room-tab__title">{room}</h2>
      {gameRoom?.roomData?.length > 0 && room === gameRoom?.room && (
        <div className="player-avatars">
          {gameRoom?.roomData?.map((player, index) => {
            return (
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
            );
          })}
        </div>
      )}
    </button>
  );
};

export default RoomTab;
