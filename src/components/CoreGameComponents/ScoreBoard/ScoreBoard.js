import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../../context/GameContext";
import { GlobalContext } from "../../../context/GlobalContext";
import AvatarImage from "../../GenericComponents/AvatarImage/AvatarImage";
import GameTimer from "../GameTimer/GameTimer";

const Scoreboard = () => {
  const { playerName, avatar } = useContext(GlobalContext);
  const {
    playerScore,
    gameRound,
    showGameTimer,
    setShowGameTimer,
    otherPlayers,
  } = useContext(GameContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowGameTimer(true);
    }, 5000);
  }, []);

  // TODO: other player icons with the ability to show a check/tick on them when they have played their cards
  return (
    <div className="scoreboard">
      <div className="scoreboard__home">
        <img
          src={`${process.env.PUBLIC_URL}/icons/home.svg`}
          alt="home"
          onClick={() => navigate("/")}
          width={40}
          style={{ cursor: "pointer", color: "#e89aab" }}
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
      </div>
      {showGameTimer ? (
        <GameTimer
          initialMinutes={0}
          initialSeconds={30}
          initialMilliseconds={0}
        />
      ) : (
        <h1>
          Round <span className="scoreboard__score-numeric">{gameRound}</span>
        </h1>
      )}

      <div className="scoreboard__avatar">
        <AvatarImage src={avatar} display="mini" playerName={playerName} />
        {/* {<p className="scoreboard__player-name">{playerName}</p>} */}
        <h1 className="scoreboard__score">
          <span className="scoreboard__score-numeric">{playerScore}</span>{" "}
          Followers
        </h1>
      </div>
    </div>
  );
};
export default Scoreboard;
