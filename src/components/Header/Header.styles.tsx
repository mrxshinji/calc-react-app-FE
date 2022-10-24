import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 6vh;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin: 0% auto;
  margin-top: 5%;
  h1 {
    color: ${(props) => props.theme.text1};
  }

  @media (min-width: 450px) {
    width: 500px;
    margin-top: 0%;
  }
`;

export const SwitcherContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  .theme {
    display: flex;
    height: 100%;
    padding-bottom: 5%;
    width: 50%;
    h2 {
      align-self: flex-end;
      color: ${(props) => props.theme.text1};
      width: 100%;
      text-align: center;
    }
  }

  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex: 4;
    position: relative;
    gap: 5px;

    &::before {
      content: "";
      position: absolute;
      width: 80px;
      height: 50%;
      bottom: 2%;
      background-color: ${(props) => props.theme.bg};
      z-index: 1;
      border-radius: 20px;
    }
  }

  @media (min-width: 450px) {
    height: 50px;
  }
`;

export const Switcher = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    color: ${(props) => props.theme.text1};
    font-size: 14px;
    text-align: center;
  }

  span {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.keyBgToggler};
    opacity: 0;
    z-index: 50;
  }

  span.active {
    opacity: 1;
  }
`;
