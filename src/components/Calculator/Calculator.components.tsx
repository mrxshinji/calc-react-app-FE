import { CalculatorContainer } from "./Calculator.styles";
import { ThemeProvider } from "styled-components";
import { themes } from "../../utils/themes.utils";
import Header from "../Header/Header.components";
import { useState } from "react";
import Display from "../Display/Display.components";
import Keypad from "../Keypad/Keypad.components";

const Calculator = () => {
  const [themeState, setThemeState] = useState(0);
  const [symbol, setSymbol] = useState('');

  return (
    <ThemeProvider theme={themes[themeState]}>
      <CalculatorContainer>
        <Header headerThemeState={themeState} setThemeState={setThemeState} />
        <Display symbol={symbol} />
        <Keypad symbol={symbol} setSymbol={setSymbol} />
      </CalculatorContainer>
    </ThemeProvider>
  );
};

export default Calculator;
