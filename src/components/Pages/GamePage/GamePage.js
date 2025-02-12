import React, { useState, useContext } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import { GameContext } from "../../../context/GameContext";
import MainTable from "../../CoreGameComponents/MainTable/MainTable";
import PlayersHand from "../../CoreGameComponents/PlayersHand/PlayersHand";

const GamePage = () => {
  const { categoryCards } = useContext(GameContext);
  const playersHand = categoryCards.filter((card) => card.imageUrl);

  const [mainTableItems, setMainTableItems] = useState([
    { id: 1, text: "Play Cards here" },
  ]);

  const [playersHandItems, setPlayersHandItems] = useState(playersHand);

  const handleDrag = (event) => {
    const { active, over } = event;
    if (over?.id == null) {
      return;
    }

    if (active?.id !== over?.id) {
      if (mainTableItems.includes(active.id)) {
        setMainTableItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          const newOrder = arrayMove(items, oldIndex, newIndex);
          return newOrder;
        });
      } else {
        setPlayersHandItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          const newOrder = arrayMove(items, oldIndex, newIndex);
          return newOrder;
        });
      }
    }
  };

  const handleDrop = (event) => {
    const { active, over } = event;
    if (over?.id == null) {
      return;
    }

    if (active.id !== over.id) {
      if (mainTableItems.includes(active.id)) {
        const activeItem = mainTableItems.find((item) => item.id === active.id);

        setMainTableItems((items) =>
          items.filter((item) => item.id !== active.id)
        );
        setPlayersHandItems((items) => [...items, activeItem]);
      } else {
        const activeCard = playersHandItems.find(
          (item) => item.id === active.id
        );
        setPlayersHandItems((items) =>
          items.filter((item) => item.id !== active.id)
        );
        const removeStartingText = mainTableItems.filter(
          (card) => card.id !== 1
        );
        console.log(removeStartingText);
        setMainTableItems([...removeStartingText, activeCard]);
      }
    }
  };

  return (
    <div>
      <MainTable
        items={mainTableItems}
        handleDrag={handleDrag}
        handleDrop={handleDrop}
      />
      <PlayersHand
        items={playersHandItems}
        handleDrag={handleDrag}
        handleDrop={handleDrop}
      />
    </div>
  );
};

export default GamePage;
