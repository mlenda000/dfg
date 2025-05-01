import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../../context/GameContext";
// import { GlobalContext } from "../../../context/GlobalContext";
import AvatarImage from "../../GenericComponents/AvatarImage/AvatarImage";
import GameTimer from "../GameTimer/GameTimer";

const Scoreboard = ({ roundHasEnded, setRoundHasEnded }) => {
  //   const { playerName, avatar } = useContext(GlobalContext);
  const { gameRound, showGameTimer, gameRoom, roundTimer } =
    useContext(GameContext);
  const navigate = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {}, [JSON.stringify(gameRoom?.roomData)]);
  //   console.log(gameRoom, "gameRoom in scoreboard");

  return (
    <div className="scoreboard">
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
      <img
        src={`${process.env.PUBLIC_URL}/images/home-button.png`}
        alt="home"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer", zIndex: 2 }}
      />

      <div className="scoreboard__avatar">
        {gameRoom?.roomData?.length > 0 &&
          gameRoom?.roomData?.map((avatar, ready) => {
            return (
              <React.Fragment key={avatar?.id}>
                {avatar?.status ? (
                  <img
                    src={process.env.PUBLIC_URL + "/icons/player-ready.png"}
                    alt="Player ready"
                    width="60px"
                    style={{ zIndex: 2 }}
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
                  style={{ marginLeft: "8px", zIndex: 2 }}
                >
                  {avatar?.name}
                </span>
              </React.Fragment>
            );
          })}
      </div>
      <div style={{ width: "200px", zIndex: 2 }}>
        {showGameTimer ? (
          <div className="scoreboard__timer" style={{ zIndex: 2 }}>
            <GameTimer
              initialMinutes={0}
              initialSeconds={roundTimer}
              initialMilliseconds={0}
              roundHasEnded={roundHasEnded}
              setRoundHasEnded={setRoundHasEnded}
            />
          </div>
        ) : (
          <h1 className="scoreboard__timer" style={{ zIndex: 2 }}>
            <span className="scoreboard__score-numeric" style={{ zIndex: 2 }}>
              Round {gameRound}
            </span>
          </h1>
        )}
      </div>
    </div>
  );
};
export default Scoreboard;
