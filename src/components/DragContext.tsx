import {ReactNode, createContext, useState} from "react";

type DragContextType = {
  draggedItemIndex: number | undefined;
  setDraggedItemIndex: (index: number | undefined) => void;
};

export const DragContext = createContext<DragContextType>({
  draggedItemIndex: undefined,
  setDraggedItemIndex: () => {
  }
});

type DragContextProvider = {
  children: ReactNode;
};

export const DragContextProvider = ({children}: DragContextProvider) => {
  const [draggedItemIndex, setDraggedItemIndex] = useState<number | undefined>(undefined);

  return (
    <DragContext.Provider value={{draggedItemIndex, setDraggedItemIndex}}>
      {children}
    </DragContext.Provider>
  );
};