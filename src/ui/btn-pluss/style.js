import { styled } from "styled-components";

export const BtnPluss = styled.div`
  font-size: ${(props) => props.theme.sizes.xl};
  color: ${(props) => props.theme.color.font};
  background-color: ${(props) => props.theme.color.dark};
  border: none;
  margin: ${(props) => props.theme.sizes.xs};
  cursor: pointer;
`;