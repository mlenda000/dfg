import React, { useEffect, useState } from "react";
import InfluencerCard from "../InfluencerCard/InfluencerCard";
import TacticsCard from "../TacticsCard/TacticsCard";
import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";

const MainTable = ({ items }) => {
  const { influencerCards, sendMessage } = useContext(GameContext);
  const [currentInfluencer, setCurrentInfluencer] = useState(null);
  const [round, setRound] = useState(1);
  const gameCards = [...influencerCards];

  useEffect(() => {
    if (influencerCards.length > 0 && gameCards.length > round) {
      console.log(gameCards[0], "gameCards------useEffect");
      setCurrentInfluencer(gameCards[0]);
    }
  }, []);

  useEffect(() => {
    const messageRdyInfluencer = {
      villain: currentInfluencer?.villain,
      tactic: currentInfluencer?.tacticUsed,
    };
    sendMessage(messageRdyInfluencer, "influencer");
  }, [currentInfluencer]);

  const handleButtonClick = () => {
    if (gameCards.length > round) {
      setRound(round + 1);
      setCurrentInfluencer(gameCards[round]);
      const messageRdyInfluencer = {
        villain: currentInfluencer?.villain,
        tactic: currentInfluencer?.tacticUsed,
      };
      sendMessage(messageRdyInfluencer, "influencer");
    }
  };

  return (
    <div className="main-table">
      <div className="main-table__influencer">
        <InfluencerCard
          name={currentInfluencer?.caption}
          description={currentInfluencer?.bodyCopy}
          example="Influencer Example"
          category={currentInfluencer?.tacticUsed}
          villain={currentInfluencer?.villain}
          image={currentInfluencer?.newsImage}
        />
      </div>

      <div className="main-table__tactics">
        {items.map((card) => (
          <TacticsCard
            name={card?.name}
            image={card?.imageUrl}
            text={card?.text}
          />
        ))}
      </div>
    </div>
  );
};

export default MainTable;
