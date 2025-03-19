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
  setRoundEnd,
}) => {
  const { influencerCards, sendMessage, room, setGameState } =
    useContext(GameContext);
  const gameCards = [...influencerCards];

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

  const handleFinishRound = () => {
    sendMessage({ type: "finish round", round });
    setRoundEnd(true);
    // handleUndo();
    // handleDeal();
  };

  const handleLeaveRoom = () => {
    sendMessage({ type: "leaveRoom", room });
    setGameState("lobby");
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
        {/* <Button display="next" onClick={handleDeal}>
          Deal
        </Button> */}
        <Button display="secondary" onClick={handleFinishRound}>
          Finish round
        </Button>
        <Button display="secondary" onClick={handleUndo}>
          Undo
        </Button>
        <Button display="secondary" onClick={handleLeaveRoom}>
          Leave room
        </Button>
      </div>
    </div>
  );
};

export default PlayersHand;
