import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import { GlobalContext } from "../../../context/GlobalContext";
import AvatarImage from "../../GenericComponents/AvatarImage/AvatarImage";

const Scoreboard = () => {
  const { playerName, avatar } = useContext(GlobalContext);
  const { playerScore, gameRound } = useContext(GameContext);
  return (
    <div className="scoreboard">
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h1 className="scoreboard__round">
          Round <span className="scoreboard__score-numeric">1</span>
        </h1>
      </div>
      <div className="scoreboard__avatar">
        <AvatarImage src={avatar} display="mini" /> {playerName}
      </div>
      <h1 className="scoreboard__score">
        <span className="scoreboard__score-numeric">{playerScore}</span>{" "}
        Followers
      </h1>
    </div>
  );
};
export default Scoreboard;
