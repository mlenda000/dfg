import React, { useState } from "react";
import { DndContext, useDroppable } from "@dnd-kit/core";

const MainTable = ({ initialInfluencer }) => {
  const [cards, setCards] = useState([initialInfluencer]);
  const { setNodeRef } = useDroppable({
    id: "main-table",
  });

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && over.id === "main-table") {
      setCards((prevCards) => [
        ...prevCards,
        { id: active.id, name: active.data.current.name },
      ]);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div ref={setNodeRef} className="main-table">
        {cards.map((card, index) => (
          <div key={index}>{card.name}</div>
        ))}
      </div>
    </DndContext>
  );
};

export default MainTable;
