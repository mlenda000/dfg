import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../../context/GameContext";
import { ThemeContext } from "../../../context/ThemeContext";
import AvatarImage from "../../GenericComponents/AvatarImage/AvatarImage";
import GameTimer from "../GameTimer/GameTimer";

const Scoreboard = ({
  roundHasEnded,
  setRoundHasEnded,
  isInfoModalOpen,
  setIsInfoModalOpen,
}) => {
  const { gameRound, showGameTimer, gameRoom, roundTimer } =
    useContext(GameContext);
  const { setThemeStyle, setCurrentTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {}, [JSON.stringify(gameRoom?.roomData)]);
  const goHome = () => {
    setThemeStyle("all");
    setCurrentTheme("all");
    navigate("/");
  };

  return (
    <div className="scoreboard">
      <img
        src={`${process.env.PUBLIC_URL}/images/home-button.png`}
        alt="home"
        onClick={goHome}
        style={{ cursor: "pointer", zIndex: 2 }}
        className="scoreboard__home-button"
      />
      <img
        src={`${process.env.PUBLIC_URL}/images/home-button-small.png`}
        alt="home"
        onClick={goHome}
        style={{ cursor: "pointer", zIndex: 2 }}
        className="scoreboard__home-button-small"
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
      <div style={{ zIndex: 2 }} className="scoreboard-right__container ">
        <div className="scoreboard-timer">
          {showGameTimer ? (
            <GameTimer
              initialMinutes={0}
              initialSeconds={roundTimer}
              initialMilliseconds={0}
              roundHasEnded={roundHasEnded}
              setRoundHasEnded={setRoundHasEnded}
            />
          ) : (
            <h1>
              <span className="scoreboard__score-numeric" style={{ zIndex: 2 }}>
                Round {gameRound}
              </span>
            </h1>
          )}
        </div>
        <button
          className="scoreboard-info__image"
          onClick={() => setIsInfoModalOpen(!isInfoModalOpen)}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/info-button.png`}
            alt="Scoreboard"
            width={"100%"}
            style={{ zIndex: 2 }}
          />
        </button>
      </div>
    </div>
  );
};
export default Scoreboard;
