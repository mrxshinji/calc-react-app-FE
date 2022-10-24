import { createContext, useState, ReactNode } from "react";

export type displayContext = {
  currentDisplayValue: string;
  addNum: (input: string) => void;
  deleteNum: () => void;
  resetNum: () => void;
  setCurrentDisplayValue: (input: string) => void;
};

export const DisplayContext = createContext<displayContext>({
  currentDisplayValue: "",
  addNum: () => null,
  deleteNum: () => null,
  resetNum: () => null,
  setCurrentDisplayValue: () => null,
});

type DisplayProps = {
  children?: ReactNode;
};

export const DisplayProvider = ({ children }: DisplayProps) => {
  const [currentDisplayValue, setCurrentDisplayValue] = useState("");

  const addNum = (input: string) => {
    setCurrentDisplayValue(num => num + input)
  }

  const deleteNum = () => {
    setCurrentDisplayValue(num => num.substring(0,(num.length-1)))
  }

  const resetNum = () => {
    setCurrentDisplayValue('')
  }

  const value = { currentDisplayValue, setCurrentDisplayValue, addNum, deleteNum, resetNum};

  return (
    <DisplayContext.Provider value={value}>{children}</DisplayContext.Provider>
  );
};
