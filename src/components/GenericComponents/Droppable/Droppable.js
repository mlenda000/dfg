import React from "react";
import { useDroppable } from "@dnd-kit/core";

const CustomStyle = {
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px",
};

export function Droppable({ children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={{ ...style, ...CustomStyle }}>
      {children}
    </div>
  );
}
