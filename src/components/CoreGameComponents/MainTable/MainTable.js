import React from "react";

import InfluencerCard from "../InfluencerCard/InfluencerCard";
import SortableCard from "../../SortableCard/SortableCard";
import TacticsCard from "../TacticsCard/TacticsCard";
import { SortableContext } from "@dnd-kit/sortable";
import { DndContext } from "@dnd-kit/core";

const MainTable = ({ items, handleDrag, handleDrop }) => {
  return (
    <div className="main-table">
      <div className="main-table__influencer">
        <InfluencerCard />
      </div>
      <DndContext
        onDragEnd={(e) => {
          handleDrag(e);
          handleDrop(e);
        }}
      >
        <div className="main-table__tactics">
          <SortableContext items={items}>
            {items.map((card) => (
              <SortableCard key={card?.id} id={card?.id} text={card?.text}>
                <TacticsCard
                  name={card?.name}
                  image={card?.imageUrl}
                  text={card?.text}
                />
              </SortableCard>
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
};

export default MainTable;
