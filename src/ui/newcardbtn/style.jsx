import { styled } from "styled-components";

export const NewCardBtn = styled.button`
  border: solid 1px ${(props) => props.theme.color.black};
  border: none;
  box-shadow: rgba(0, 0, 0, 0.562) 0px 5px 15px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  background-color: ${(props) => props.theme.color.dark};
  color: ${(props) => props.theme.color.font};
  margin: ${(props) => props.theme.sizes.xs};
  padding:  ${(props) => props.theme.sizes.sm};
  cursor: pointer;
  &:hover {
    box-shadow: ${(props) => props.theme.color.light} 0px 5px 15px;
  }
`;