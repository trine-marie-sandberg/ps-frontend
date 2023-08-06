import { styled } from "styled-components";

export const PrimaryBtn = styled.button`
  border: solid 1px ${(props) => props.theme.color.secondary};
  box-shadow: ${(props) => props.theme.color.secondary} 0px 1px 3px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.black};
  height: fit-content;
  padding:  ${(props) => props.theme.sizes.sm} ${(props) => props.theme.sizes.lg};
  margin: ${(props) => props.theme.sizes.xs};
  cursor: pointer;
  &:hover {
    box-shadow: ${(props) => props.theme.color.secondary} 0px 1px 3px;
    border: none;
  }
`;