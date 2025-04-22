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
  finishRound,
  setRoundEnd,
  setPlayersHandItems,
  originalItems,
  mainTableItems,
  setMainTableItems,
}) => {
  const { influencerCards, sendMessage } = useContext(GameContext);

  const gameCards = [...influencerCards];

  const handleFinishRound = () => {
    sendMessage({ type: "finish round", round });
    setRoundEnd(true);
    handleUndo();
  };

  const handleReturnCard = (cardId) => {
    const cardToReturn = mainTableItems.find((item) => item.id === cardId);
    if (cardToReturn) {
      setMainTableItems((items) => items.filter((item) => item.id !== cardId));
      setPlayersHandItems((items) => [...items, cardToReturn]);
      sendMessage({ type: "return card", cardId });
    }
  };

  const handleUndo = () => {
    // Send a message to the server to undo the last action

    setPlayersHandItems(originalItems);
    const filteredItems = mainTableItems.filter(
      (item) => item.collection !== "category_cards"
    );

    const count = mainTableItems.filter(
      (item) => item.collection === "category_cards"
    ).length;

    // sendMessage({ action: "remove_cards", count: originalItems.length }, "update_clients");
    setMainTableItems(filteredItems);
    sendMessage({ count, type: "undo" });
  };

  useEffect(() => {
    if (influencerCards.length > 0 && gameCards.length > round) {
      setCurrentInfluencer(gameCards[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const messageRdyInfluencer = {
      type: "influencer",
      villain: currentInfluencer?.villain,
      tactic: currentInfluencer?.tacticUsed,
    };
    sendMessage(messageRdyInfluencer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          image={
            currentInfluencer?.newsImage
              ? process.env.PUBLIC_URL +
                `/images/influencer/${currentInfluencer.newsImage}`
              : process.env.PUBLIC_URL + `/images/influencer/scientist.png`
          }
          tacticUsed={currentInfluencer?.tacticUsed}
        />
      </div>
      <div className="main-table__tactics">
        {items.map((card) => (
          <TacticsCard
            name={card?.name}
            image={card?.imageUrl}
            text={card?.description}
            id={card?.id}
            key={card?.id}
            onUndo={handleReturnCard}
          />
        ))}
      </div>
      {finishRound && (
        <div onClick={handleFinishRound} className="main-table__finish-round">
          <img
            src={`${process.env.PUBLIC_URL}/images/next-button.png`}
            alt="Ready"
            width={"100%"}
            height={"100%"}
            style={{ cursor: "pointer" }}
          />
        </div>
      )}
      <div
        className="main-table__background"
        style={finishRound ? { display: "none" } : { display: "block" }}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/place-cards.png"}
          alt="Place cards"
        />
      </div>
    </div>
  );
};

export default MainTable;
