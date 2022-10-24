import { KeypadContainer } from "./Keypad.styles";
import { Button } from "../Button/Button.components";
import { BUTTON_TYPE_CLASSES } from "../Button/Button.components";
import { buttonList, ButtonType } from "../../utils/buttonList";
import { useContext, Dispatch, SetStateAction } from "react";
import { DisplayContext } from "../../context/display.context";
import { MemoryContext } from "../../context/memory.context";

import {
  symbolCheck,
  zeroValueWithSymbol,
  noValueGotSymbolGotDisplay,
  noValueNoSymbolGotDisplay,
  gotValueAndGotSymbol,
} from "../../utils/calcHelper.utils";

type KeypadProps = {
  symbol: string;
  setSymbol: Dispatch<SetStateAction<string>>;
};

const Keypad = ({ symbol, setSymbol }: KeypadProps) => {
  const {
    addNum,
    deleteNum,
    resetNum,
    currentDisplayValue,
    setCurrentDisplayValue,
  } = useContext(DisplayContext);

  const {
    currentValue,
    setCurrentValue,
    multiply,
    add,
    minus,
    divide,
    resetMemory,
    wasCalculated,
    setWasCalculated,
  } = useContext(MemoryContext);

  // check condition for calculator work flow
  const calcHelper = (
    symbol: string,
    value: string,
    currentValue: number,
    currentDisplayValue: string,
    callback: (input: number) => number
  ): void => {
    // if no symbol add symbol
    if (symbolCheck(symbol)) {
      setSymbol(value);
    }
    // if value === 0 and got + symbol
    if (zeroValueWithSymbol(symbol, currentValue)) {
      setWasCalculated(true);
      setCurrentValue(parseFloat(currentDisplayValue));
    }
    // if no value no symbol got display
    if (noValueNoSymbolGotDisplay(currentValue, symbol, currentDisplayValue)) {
      setWasCalculated(true);
      setCurrentValue(parseFloat(currentDisplayValue));
    }

    // if currentvalue === 0 and got symbol , display value more then 0
    if (noValueGotSymbolGotDisplay(currentValue, symbol, currentDisplayValue)) {
      const returnValue = callback(parseFloat(currentDisplayValue));
      setCurrentDisplayValue(
        (Math.round(returnValue * 1000) / 1000).toString()
      );
    }
    // if value > 0 and was calculated and symbol is similar
    if (gotValueAndGotSymbol(currentValue, symbol) && !wasCalculated) {
      const returnValue = callback(parseFloat(currentDisplayValue));
      setCurrentDisplayValue(
        (Math.round(returnValue * 1000) / 1000).toString()
      );
    }

    if (symbol !== value) {
      setSymbol(value);
    }
  };

  // Keypad return
  return (
    <KeypadContainer>
      {buttonList.map(
        ({ value, buttonFunction, buttonType }: ButtonType, idx) => {
          return (
            <Button
              key={idx}
              value={value}
              buttonType={buttonType}
              onClick={() => {
                switch (buttonFunction) {
                  case "del":
                    deleteNum();
                    break;
                  // ====================== ADD CASE ======================
                  case "add":
                    calcHelper(
                      symbol,
                      value,
                      currentValue,
                      currentDisplayValue,
                      add
                    );
                    break;
                  // ====================== Minus CASE ======================
                  case "minus":
                    calcHelper(
                      symbol,
                      value,
                      currentValue,
                      currentDisplayValue,
                      minus
                    );
                    break;
                  // ====================== Multiply CASE ======================
                  case "mutiply":
                    calcHelper(
                      symbol,
                      value,
                      currentValue,
                      currentDisplayValue,
                      multiply
                    );
                    break;
                  // ====================== Divide CASE ======================
                  case "divide":
                    calcHelper(
                      symbol,
                      value,
                      currentValue,
                      currentDisplayValue,
                      divide
                    );
                    break;
                  // ====================== Default CASE ======================
                  default:
                    if (wasCalculated) {
                      resetNum();
                      setWasCalculated(false);
                    }
                    addNum(value);
                }
              }}
            />
          );
        }
      )}
      <Button
        // buttonFunction={}
        value={"CE"}
        buttonType={BUTTON_TYPE_CLASSES.secondary}
        style={{ width: "85%", gridColumn: "1/2" }}
        onClick={() => {
          resetMemory();
          setSymbol("");
          setWasCalculated(false);
        }}
      />
      <Button
        // buttonFunction={}
        value={"C"}
        buttonType={BUTTON_TYPE_CLASSES.secondary}
        style={{ width: "85%", gridColumn: "2/3" }}
        onClick={() => {
          resetNum();
          setSymbol("");
          setWasCalculated(false);
        }}
      />
      <Button
        // buttonFunction={}
        value={"="}
        buttonType={BUTTON_TYPE_CLASSES.enter}
        style={{ width: "85%", gridColumn: "3/5" }}
        onClick={() => {
          let returnValue = 0;
          switch (symbol) {
            case "+":
              returnValue = add(parseFloat(currentDisplayValue));
              setCurrentDisplayValue(returnValue.toString())
              break;
            case "-":
              returnValue = minus(parseFloat(currentDisplayValue));
              setCurrentDisplayValue((Math.round(returnValue * 1000) / 1000).toString())
              break;
            case "/":
              returnValue = divide(parseFloat(currentDisplayValue));
              setCurrentDisplayValue((Math.round(returnValue * 1000) / 1000).toString())
              break;
            case "*":
              returnValue = multiply(parseFloat(currentDisplayValue));
              setCurrentDisplayValue((Math.round(returnValue * 1000) / 1000).toString())
              break;
            default:
              return;
          }
        }}
      />
    </KeypadContainer>
  );
};

export default Keypad;
