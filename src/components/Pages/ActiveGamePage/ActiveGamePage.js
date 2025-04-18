import React, { useState, useContext, useEffect } from "react";
import { GameContext } from "../../../context/GameContext";
import MainTable from "../../CoreGameComponents/MainTable/MainTable";
import PlayersHand from "../../CoreGameComponents/PlayersHand/PlayersHand";
import { Droppable } from "../../GenericComponents/Droppable/Droppable";
import { DndContext } from "@dnd-kit/core";

const ActiveGamePage = ({ setRoundEnd }) => {
  const {
    categoryCards,
    sendMessage,
    gameRound,
    cardMessage,
    setCardMessage,
    currentInfluencer,
    setCurrentInfluencer,
  } = useContext(GameContext);
  const playersHand = categoryCards?.filter((card) => card.imageUrl);

  const [mainTableItems, setMainTableItems] = useState([]);
  const [finishRound, setFinishRound] = useState(false);

  const [playersHandItems, setPlayersHandItems] = useState(playersHand);

  const handleDrop = (event) => {
    const { active, over } = event;
    if (over?.id == null) {
      return;
    }

    if (active.id !== over.id) {
      const activeCard = playersHandItems.find((item) => item.id === active.id);
      setPlayersHandItems((items) =>
        items.filter((item) => item.id !== active.id)
      );
      const removeStartingText = mainTableItems.filter((card) => card.id !== 1);

      setMainTableItems([...removeStartingText, activeCard]);
      sendCardToServer(activeCard.category);
    }
  };

  const sendCardToServer = (card) => {
    sendMessage({ card, type: "tactic" });
  };

  useEffect(() => {
    if (mainTableItems.length > 0) {
      setFinishRound(true);
    } else {
      setFinishRound(false);
    }
  }, [mainTableItems]);

  useEffect(() => {
    if (cardMessage && typeof cardMessage !== "number") {
      setMainTableItems([...mainTableItems, cardMessage]);
    } else {
      let updatedMainTableItems = [...mainTableItems];
      for (let i = 0; i < cardMessage; i++) {
        const index = updatedMainTableItems.findIndex(
          (item) => item.imageUrl === "back.png"
        );
        if (index !== -1) {
          updatedMainTableItems.splice(index, 1);
        } else {
          break;
        }
      }
      setMainTableItems(updatedMainTableItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardMessage, setCardMessage]);

  return (
    <DndContext
      onDragEnd={(e) => {
        handleDrop(e);
      }}
    >
      <div>
        <Droppable>
          <MainTable
            items={mainTableItems}
            round={gameRound}
            currentInfluencer={currentInfluencer}
            setCurrentInfluencer={setCurrentInfluencer}
            finishRound={finishRound}
            setRoundEnd={setRoundEnd}
            setPlayersHandItems={setPlayersHandItems}
            mainTableItems={mainTableItems}
            setMainTableItems={setMainTableItems}
            originalItems={playersHand}
          />
        </Droppable>
        <PlayersHand items={playersHandItems} />
      </div>
    </DndContext>
  );
};

export default ActiveGamePage;
