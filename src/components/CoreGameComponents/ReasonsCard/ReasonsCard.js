import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";

const ReasonsCard = ({ reasons, onClick }) => {
  const { gameRound, influencerCards } = useContext(GameContext);

  console.log(influencerCards, "influencer cards");
  console.log(gameRound, "game round");
  const currentInfluencerCard = influencerCards[gameRound - 1];
  console.log(currentInfluencerCard, "current influencer card");
  return (
    <div className="reasons-card">
      <div className="reasons-card__tactics">
        <h2>Tactics used: </h2>
        {currentInfluencerCard?.tacticUsed.map((tactic) => (
          <h3>{tactic}</h3>
        ))}
      </div>
      <h3 style={{ marginBottom: "0", paddingBottom: "0" }}>
        How to spot this type of misinformation
      </h3>
      <ul className="reasons-card__list">
        {currentInfluencerCard?.howToSpotIt.map((reason) => (
          <li key={reason}>{reason?.trim()}</li>
        ))}
      </ul>
      <h3 style={{ marginBottom: "0", paddingBottom: "0" }}>Harm</h3>
      <ul className="reasons-card__list">
        {currentInfluencerCard?.harm.map((reason) => (
          <li key={reason}>{reason?.trim()}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReasonsCard;
