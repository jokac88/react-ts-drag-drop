import {ReactNode, useContext, DragEvent} from "react";
import {DragContext} from "./DragContext.tsx";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  zip: number;
  birthdate: string;
  city: string;
};

type DragAreaProps = {
  items: User[];
  onChange: (items: User[]) => void;
  children: ReactNode;
};

export const DragArea = ({items, onChange, children}: DragAreaProps) => {
  const {draggedItemIndex, setDraggedItemIndex} = useContext(DragContext);
  // console.log(draggedItemIndex)
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => event.preventDefault();

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    // const draggedIndex = Number(event.dataTransfer.getData("text"));
    const droppedItemIndex = Array.from(event.currentTarget.children)
      .findIndex(child => child.contains(event.target as Node));

    if (droppedItemIndex !== -1 && draggedItemIndex !== undefined && droppedItemIndex !== draggedItemIndex) {
      const updatedItems = [...items];
      updatedItems.splice(droppedItemIndex, 0, updatedItems.splice(draggedItemIndex, 1)[0]);
      onChange(updatedItems);
    }

    setDraggedItemIndex(undefined);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="drag-area"
    >
      {children}
    </div>
  );
};