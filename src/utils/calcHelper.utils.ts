
// if no symbol add symbol
export const symbolCheck = (symbol: string): boolean => {
  return symbol === "";
};

// if value === 0 and got + symbol
export const zeroValueWithSymbol = (
  symbol: string,
  currentValue: number
): boolean => {
  return symbol.length > 0 && currentValue === 0;
};

// if currentvalue === 0 and no symbol , display value more then 0
export const noValueGotSymbolGotDisplay = (
  currentValue: number,
  inputSymbol: string,
  currentDisplayValue: string
): boolean => {
  return (
    currentValue === 0 && inputSymbol.length > 0 && currentDisplayValue.length > 0
  );
};

// if currentvalue === 0 and no symbol , display value more then 0
export const noValueNoSymbolGotDisplay = (
  currentValue: number,
  inputSymbol: string,
  currentDisplayValue: string
): boolean => {
  return (
    currentValue === 0 && inputSymbol === "" && currentDisplayValue.length > 0
  );
};

// if value > 0 and was calculated and symbol is similar
export const gotValueAndGotSymbol = (
  currentValue: number,
  inputSymbol: string
): boolean => {
  return currentValue !== 0 && inputSymbol.length > 0;
};


