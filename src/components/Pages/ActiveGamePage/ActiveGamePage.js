import React, { useState, useContext} from "react";
import { GameContext } from "../../../context/GameContext";
import MainTable from "../../CoreGameComponents/MainTable/MainTable";
import PlayersHand from "../../CoreGameComponents/PlayersHand/PlayersHand";
import { Droppable } from "../../GenericComponents/Droppable/Droppable";
import { DndContext } from "@dnd-kit/core";

const ActiveGamePage = () => {
  const { categoryCards, sendMessage } = useContext(GameContext);
  const playersHand = categoryCards.filter((card) => card.imageUrl);

  const [mainTableItems, setMainTableItems] = useState([
    { id: 1, text: "Play Cards here" },
  ]);

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
      sendCardToServer(activeCard);
    }
  };

  const sendCardToServer = (card) => {
    sendMessage(card);
    console.log("send card to server", card);
  };

  return (
    <DndContext
      onDragEnd={(e) => {
        handleDrop(e);
      }}
    >
      <div>
        <Droppable>
          <MainTable items={mainTableItems} handleDrop={handleDrop} />
        </Droppable>
        <PlayersHand items={playersHandItems} handleDrop={handleDrop} />
      </div>
    </DndContext>
  );
};

export default ActiveGamePage;
