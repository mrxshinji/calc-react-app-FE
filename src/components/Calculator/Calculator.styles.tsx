import styled from "styled-components";

export const CalculatorContainer = styled.div`
    height: 100vh;
    max-width: 100vw;
    background-color: ${props => props.theme.mainBg};
    display: flex;
    align-items: flex;
    align-content: flex-start;
    justify-content: flex;
    position: relative;
    flex-wrap: wrap;
    gap: 5%;

    @media (min-width: 450px) {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3%;
        align-content: center;
  }
`