import styled from "styled-components";

export const KeypadContainer = styled.div`
  display: grid;
  height: 55vh;
  width: 85%;
  background-color: ${(props) => props.theme.bg2};
  border-radius: 20px;
  grid-template-columns: repeat(4, 1fr);
  padding: 5% 2.5%;
  margin: 0% auto;

  @media (min-width: 450px) {
    width: 460px;
    height: 500px;
    padding: 2rem 1.5rem;
  }
`;
