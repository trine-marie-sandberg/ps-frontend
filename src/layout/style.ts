import { styled } from "styled-components";
import { SharedComponentProps } from "../components/shared-props";

export const Main = styled.main<SharedComponentProps>`
  all: unset;
  display: block;
  color: ${(props) => props.theme.color.font};
`;

export const Wrapper = styled.div<SharedComponentProps>`
  background-color: ${(props) => props.theme.color.primary};
  display: grid;
  grid-template-rows: 1fr 7fr 1fr;
  height: 100vh;
  overflow: scroll;
`;