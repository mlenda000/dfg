import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import Button from "../../GenericComponents/Button/Button";
import SortableCard from "../../GenericComponents/SortableCard/SortableCard";

const PlayersHand = ({ items }) => {
  //   console.log(items, "items");

  return (
    <div className="players-area">
      <div className="players-hand">
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
      </div>

      <div className="players-area__buttons">
        <Button display="next">Deal</Button>
        <Button display="secondary">Finish Round</Button>
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
