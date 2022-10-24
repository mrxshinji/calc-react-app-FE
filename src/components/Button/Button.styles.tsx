import styled from "styled-components";

export const PrimaryButton = styled.button`
    width: 60px;
    height: 60px;
    background-color: ${props => props.theme.keyBg2};
    color: ${props => props.theme.text2};
    margin: auto;
    box-shadow: inset 0 -3px ${props => props.theme.keyShadow2};
    border-radius: 10px;
    font-size: 42px;
    border: none;

    &:hover {
        filter: brightness(1.5);
    }

    @media (min-width: 450px) {
    width: 90px;
    height: 80px;
  }
`

export const SecondaryButton = styled(PrimaryButton)`
    background-color: ${props => props.theme.keyBg};
    box-shadow: 0 3px ${props => props.theme.keyShadow};
    color: ${props => props.theme.white};
    font-size: 20px
`

export const EnterButton = styled(PrimaryButton)`
    background-color: ${props => props.theme.keyBgToggler};
    box-shadow: 0 3px ${props => props.theme.keyShadowToggler};
    color: ${props => props.theme.white};
    
`