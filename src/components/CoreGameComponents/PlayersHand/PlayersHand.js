import React, { useContext } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import Button from "../../GenericComponents/Button/Button";
import SortableCard from "../../GenericComponents/SortableCard/SortableCard";
import { GameContext } from "../../../context/GameContext";

const PlayersHand = ({
  items,
  setPlayersHandItems,
  originalItems,
  mainTableItems,
  setMainTableItems,
  round,
  setRound,
  setCurrentInfluencer,
  currentInfluencer,
}) => {
  const { influencerCards, sendMessage, playerId } = useContext(GameContext);
  const gameCards = [...influencerCards];

  const handleUndo = () => {
    // Send a message to the server to undo the last action

    setPlayersHandItems(originalItems);
    console.log(mainTableItems, "items before undo");
    const filteredItems = mainTableItems.filter(
      (item) => item.collection !== "category_cards"
    );

    const count = mainTableItems.filter(
      (item) => item.collection === "category_cards"
    ).length;
    console.log(count, "count");
    console.log(filteredItems, "updatedMainTableItems");
    // sendMessage({ action: "remove_cards", count: originalItems.length }, "update_clients");
    setMainTableItems(filteredItems);
    sendMessage({ count, type: "undo" });
    console.log(filteredItems, "items after undo");
  };

  const handleDeal = () => {
    if (gameCards.length > round) {
      setRound(round + 1);
      setCurrentInfluencer(gameCards[round]);
      const messageRdyInfluencer = {
        type: "influencer",
        villain: currentInfluencer?.villain,
        tactic: currentInfluencer?.tacticUsed,
      };
      sendMessage(messageRdyInfluencer);
    }
  };

  const handleFinishRound = () => {
    handleUndo();
    sendMessage({ type: "finish round" });
    handleDeal();
  };

  return (
    <div className="players-area">
      <div className="players-hand">
        {items.map((card) => {
          return (
            <SortableCard key={card?.id} id={card?.id}>
              <CategoryCard
                key={card?.id}
                name={card?.name}
                text={card?.description}
                image={card?.imageUrl}
                id={card?.id}
              />
            </SortableCard>
          );
        })}
      </div>

      <div className="players-area__buttons">
        <Button display="next" onClick={handleDeal}>
          Deal
        </Button>
        <Button display="secondary" onClick={handleUndo}>
          Undo
        </Button>
        <Button display="secondary" onClick={handleFinishRound}>
          Finish Round
        </Button>
      </div>
    </div>
  );
};

export default PlayersHand;
