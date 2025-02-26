import React from "react";
// import { useSortable } from "@dnd-kit/sortable";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const SortableCard = ({ id, children }) => {
  //   console.log(id, "sortable card id");

  const { attributes, listeners, setNodeRef, transform, transition } =
    useDraggable({
      id: id,
    });

  const adjustedTransform = {
    ...transform,
    scaleX: 1,
    scaleY: 1,
  };

  const style = {
    transform: CSS?.Transform?.toString(adjustedTransform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="sortable-item"
    >
      {children}
    </div>
  );
};

export default SortableCard;
