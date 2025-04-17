import { useContext, useEffect } from "react";
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
    otherPlayers,
    roundStart,
  } = useContext(GameContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowGameTimer(true);
    }, 5000);
  }, [roundStart, setShowGameTimer]);

  // TODO: other player icons with the ability to show a check/tick on them when they have played their cards
  return (
    <div className="scoreboard">
      <img
        src={`${process.env.PUBLIC_URL}/images/home-button.png`}
        alt="home"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
      {otherPlayers?.length > 0 &&
        otherPlayers.map((avatar, ready) => (
          <AvatarImage
            src={avatar}
            display="mini"
            playerName={playerName}
            playerReady={ready}
          />
        ))}
      <div className="scoreboard__avatar">
        <AvatarImage src={avatar} display="mini" playerName={playerName} />
        <span className="scoreboard__names">{playerName}</span>
        {otherPlayers?.length > 0 &&
          otherPlayers.map((avatar, ready) => (
            <>
              <AvatarImage
                src={avatar}
                display="mini"
                playerName={playerName}
                playerReady={ready}
              />
              <span className="scoreboard__names">{playerName}</span>
            </>
          ))}
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
