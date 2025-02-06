import React from "react";
import { DndContext, useDraggable } from "@dnd-kit/core";

const PlayersHand = ({ cards }) => {
  return (
    <div className="player-hand">
      {cards.map((card, index) => (
        <DraggableCard key={index} id={card.id} card={card} />
      ))}
    </div>
  );
};

const DraggableCard = ({ id, card }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = {
    transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {card.name}
    </div>
  );
};

export default PlayersHand;
