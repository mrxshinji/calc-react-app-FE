import { GlobalStyle } from "./global.styles";

import Calculator from "./components/Calculator/Calculator.components";

import { DisplayProvider } from "./context/display.context";
import { MemoryProvider } from "./context/memory.context";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <MemoryProvider>
        <DisplayProvider>
          <Calculator />
        </DisplayProvider>
      </MemoryProvider>
    </div>
  );
}

export default App;
