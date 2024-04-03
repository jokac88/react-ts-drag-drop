import {ReactNode, useContext, DragEvent} from "react";
import {DragContext} from "./DragContext.tsx";
import '../style.scss';

type DragItemProps = {
  id: number;
  children: ReactNode;
};

export const DragItem = ({id, children}: DragItemProps) => {
  const {setDraggedItemIndex} = useContext(DragContext);

  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    const draggedIndex: number = Number(event.currentTarget.dataset.index);

    setDraggedItemIndex(draggedIndex);
    event.dataTransfer.setData("text", draggedIndex.toString());
  };

  const handleDragEnd = () => setDraggedItemIndex(undefined);

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      data-index={id}
      className="drag-item"
    >
      {children}
    </div>
  );
};