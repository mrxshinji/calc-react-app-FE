import { useContext } from "react";
import { DisplayContext } from "../../context/display.context";
import { MemoryContext } from "../../context/memory.context";
import { DisplayContainer } from "./Display.styles";

type DisplayProps = {
  symbol: string;
};

const Display = ({ symbol }: DisplayProps) => {
  const { currentValue } = useContext(MemoryContext);
  const { currentDisplayValue } = useContext(DisplayContext);

  return (
    <DisplayContainer>
      <div className='memory'>
        <p>{Math.round(currentValue * 1000) / 1000}</p>
        <p>{symbol && symbol}</p>
      </div>
      <div className='display'>
        <h4>{currentDisplayValue ? currentDisplayValue : "0"}</h4>
      </div>
    </DisplayContainer>
  );
};

export default Display;
