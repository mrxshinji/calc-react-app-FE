import { createContext, useState, ReactNode } from "react";

export type memoryContext = {
  currentValue: number;
  setCurrentValue: (num: number) => void;
  multiply: (input: number) => number;
  add: (input: number) => number;
  minus: (input: number) => number;
  divide: (input: number) => number;
  resetMemory: () => void;
  wasCalculated: boolean;
  setWasCalculated: (num: boolean) => void;
};

export const MemoryContext = createContext<memoryContext>({
  currentValue: 0,
  setCurrentValue: () => null,
  multiply: (input: number) => 0,
  add: (input: number) => 0,
  minus: (input: number) => 0,
  divide: (input: number) => 0,
  resetMemory: () => null,
  wasCalculated: false,
  setWasCalculated: (input: boolean) => null
});

type MemoryProps = {
  children?: ReactNode;
};

export const MemoryProvider = ({ children }: MemoryProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [wasCalculated, setWasCalculated ] = useState(false);

  const multiply = (input: number): number => {
    setWasCalculated(true)
    const returnValue = currentValue * input
    setCurrentValue(num => num * input)
    return returnValue
  }

  const add = (input: number): number => {
    setWasCalculated(true)
    const returnValue = currentValue + input
    setCurrentValue(num => num + input)
    return returnValue
  }

  const minus = (input: number): number => {
    setWasCalculated(true)
    const returnValue = currentValue - input
    setCurrentValue(num => num - input)
    return returnValue
  }

  const divide = (input: number): number => {
    setWasCalculated(true)
    const returnValue = currentValue / input
    setCurrentValue(num => num / input)
    return returnValue
  }

  const resetMemory = (): void => {
    setWasCalculated(true)
    setCurrentValue(0)
  }

  const value = { currentValue, setCurrentValue, multiply, add, minus, divide, resetMemory, wasCalculated, setWasCalculated };

  return (
    <MemoryContext.Provider value={value}>{children}</MemoryContext.Provider>
  );
};
