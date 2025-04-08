import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import { GlobalContext } from "../../../context/GlobalContext";
import AvatarImage from "../../GenericComponents/AvatarImage/AvatarImage";

const Scoreboard = () => {
  const { playerName, avatar } = useContext(GlobalContext);
  const { playerScore, gameRound } = useContext(GameContext);
  return (
    <div className="scoreboard">
      <h1 className="scoreboard__round">
        Round <span className="scoreboard__score-numeric">{gameRound}</span>
      </h1>

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
