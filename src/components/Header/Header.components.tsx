import { HeaderContainer, SwitcherContainer, Switcher } from "./Header.styles";

type HeaderProps = {
  headerThemeState: number;
  setThemeState: (num: number) => void;
};

const Header = ({ headerThemeState, setThemeState }: HeaderProps) => {
  return (
    <HeaderContainer>
      <h1>CALC</h1>
      <SwitcherContainer>
        <div className='theme'>
          <h2>THEME</h2>
        </div>
        <div className='list'>
          <Switcher onClick={() => setThemeState(0)}>
            <h2>1</h2>
            <span
              className={`circle ${headerThemeState === 0 ? "active" : ""}`}
            ></span>
          </Switcher>
          <Switcher onClick={() => setThemeState(1)}>
            <h2>2</h2>
            <span
              className={`circle ${headerThemeState === 1 ? "active" : ""}`}
            ></span>
          </Switcher>
          <Switcher onClick={() => setThemeState(2)}>
            <h2>3</h2>
            <span
              className={`circle ${headerThemeState === 2 ? "active" : ""}`}
            ></span>
          </Switcher>
        </div>
      </SwitcherContainer>
    </HeaderContainer>
  );
};

export default Header;
