import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import SortableCard from "../../GenericComponents/SortableCard/SortableCard";

const PlayersHand = ({ items }) => {
  return (
    <div className="players-area">
      <div className="players-hand" style={{ maxHeight: "185px" }}>
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
    </div>
  );
};

export default PlayersHand;
