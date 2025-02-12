import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import Button from "../../Button/Button";
import { SortableContext } from "@dnd-kit/sortable";
import SortableCard from "../../SortableCard/SortableCard";
import { DndContext } from "@dnd-kit/core";

const PlayersHand = ({ items, handleDrag, handleDrop }) => {
  //   console.log(items, "items");

  return (
    <div className="players-area">
      <DndContext
        onDragEnd={(e) => {
          handleDrag(e);
          handleDrop(e);
        }}
      >
        <div className="players-hand">
          <SortableContext items={items}>
            {items.map((card) => {
              return (
                <SortableCard key={card?.id} id={card?.id}>
                  <CategoryCard
                    key={card?.id}
                    name={card?.name}
                    image={card?.imageUrl}
                    id={card?.id}
                  />
                </SortableCard>
              );
            })}
          </SortableContext>
        </div>
      </DndContext>
      <div className="players-area__buttons">
        <Button>Deal</Button>
        <Button>Finish Round</Button>
      </div>
    </div>
  );
};

export default PlayersHand;

// import React from 'react';
// import { DndContext, closestCenter } from '@dnd-kit/core';
// import { SortableContext, useSortable, arrayMove } from '@dnd-kit/sortable';
// import { CSS } from '@dnd-kit/utilities';

// const PlayersHand = ({ items, setItems, onDrop }) => {
//   return (

//   );
// };

// export default PlayersHand;
