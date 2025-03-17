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
        <AvatarImage display="mini" src={avatar} alt="Avatar" />
        <h1 className="scoreboard__playerName">{playerName}</h1>
      </div>
      <h1>Score: {playerScore}</h1>

      <h1>Round: {gameRound}</h1>
    </div>
  );
};
export default Scoreboard;
