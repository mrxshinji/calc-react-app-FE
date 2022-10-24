import styled from "styled-components";

export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 90%;
  height: 15vh;
  background-color: ${(props) => props.theme.bg2};
  border-radius: 20px;
  align-items: flex-end;
  justify-content: center;
  gap: 5%;
  margin: 0% auto;
  overflow: hidden;

  .memory {
    margin-right: 5%;
    display: flex;
    gap: 5px;
  }

  p {
    color: ${(props) => props.theme.white};
    filter: brightness(0.5);
    letter-spacing: 1px;
  }

  .display {
    margin-right: 5%;
  }

  h4 {
    color: ${(props) => props.theme.text1};
    font-size: 50px;
    letter-spacing: 1px;
  }

  @media (min-width: 450px) {
    width: 500px;
    height: 120px;

    .memory {
    margin-right: 10%;
  }

  p {
    font-size: 20px;
  }

    .display {
    margin-right: 10%;
  }

    h4 {
      font-size: 70px;
    }
  }
`;
