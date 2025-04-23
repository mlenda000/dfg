import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../../context/GameContext";
import { GlobalContext } from "../../../context/GlobalContext";
import AvatarImage from "../../GenericComponents/AvatarImage/AvatarImage";
import GameTimer from "../GameTimer/GameTimer";

const Scoreboard = () => {
  const { playerName, avatar } = useContext(GlobalContext);
  const {
    gameRound,
    showGameTimer,
    setShowGameTimer,
    roundStart,
    gameRoom,
    playerReady,
    playerId,
  } = useContext(GameContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowGameTimer(true);
    }, 5000);
  }, [roundStart, setShowGameTimer]);
  useEffect(() => {}, [
    playerName,
    avatar,
    gameRound,
    gameRoom?.roomData?.players,
  ]);

  //   console.log(avatar, playerId, "gameRoom in scoreboard");
  // TODO: other player icons with the ability to show a check/tick on them when they have played their cards
  return (
    <div className="scoreboard">
      <img
        src={`${process.env.PUBLIC_URL}/images/home-button.png`}
        alt="home"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />

      <div className="scoreboard__avatar">
        {/* <AvatarImage src={avatar} display="mini" playerName={playerName} />
        <span className="scoreboard__names" style={{ marginLeft: "8px" }}>
          {playerName}
        </span> */}
        {gameRoom?.roomData?.length > 0 &&
          gameRoom?.roomData?.map((avatar, ready) => {
            console.log(avatar, "avatar in scoreboard");

            return (
              <>
                {avatar?.status ? (
                  <img
                    src={process.env.PUBLIC_URL + "/icons/player-ready.png"}
                    alt="Player ready"
                    width="60px"
                  />
                ) : (
                  <AvatarImage
                    src={avatar?.avatar}
                    display="mini"
                    playerReady={ready}
                  />
                )}
                <span
                  className="scoreboard__names"
                  style={{ marginLeft: "8px" }}
                >
                  {avatar?.name}
                </span>
              </>
            );
          })}
      </div>
      <div style={{ width: "200px" }}>
        {showGameTimer ? (
          <div className="scoreboard__timer">
            <GameTimer
              initialMinutes={0}
              initialSeconds={30}
              initialMilliseconds={0}
            />
          </div>
        ) : (
          <h1 className="scoreboard__timer">
            <span className="scoreboard__score-numeric">Round {gameRound}</span>
          </h1>
        )}
      </div>
    </div>
  );
};
export default Scoreboard;
