import React, { useEffect } from "react";
import InfluencerCard from "../InfluencerCard/InfluencerCard";
import TacticsCard from "../TacticsCard/TacticsCard";
import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";

const MainTable = ({
  items,
  round,
  currentInfluencer,
  setCurrentInfluencer,
}) => {
  const { influencerCards, sendMessage } = useContext(GameContext);

  const gameCards = [...influencerCards];

  useEffect(() => {
    if (influencerCards.length > 0 && gameCards.length > round) {
      setCurrentInfluencer(gameCards[0]);
    }
  }, []);

  useEffect(() => {
    const messageRdyInfluencer = {
      type: "influencer",
      villain: currentInfluencer?.villain,
      tactic: currentInfluencer?.tacticUsed,
    };
    sendMessage(messageRdyInfluencer);
  }, [currentInfluencer]);

  return (
    <div className="main-table">
      <div className="main-table__influencer">
        <InfluencerCard
          name={currentInfluencer?.caption}
          description={currentInfluencer?.bodyCopy}
          example="Influencer Example"
          category={currentInfluencer?.tacticUsed}
          villain={currentInfluencer?.villain}
          image={process.env.PUBLIC_URL + `/images/influencer/scientist.png`}
        />
      </div>

      <div className="main-table__tactics">
        {items.map((card) => (
          <TacticsCard
            name={card?.name}
            image={card?.imageUrl}
            text={card?.description}
            id={card?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MainTable;
