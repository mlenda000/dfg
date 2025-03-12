import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import AvatarImage from "../../GenericComponents/AvatarImage/AvatarImage";

const Scoreboard = () => {
  const { playerName, playerScore, gameRound } = useContext(GameContext);
  return (
    <div className="scoreboard">
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <AvatarImage
          display="mini"
          src="/images/avatars/avatar.png"
          alt="Avatar"
        />
        <h1 className="scoreboard__playerName">Player: {playerName}</h1>
      </div>
      <h1>Score: {playerScore}</h1>

      <h1>Round: {gameRound}</h1>
    </div>
  );
};
export default Scoreboard;
