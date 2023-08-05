import { styled } from "styled-components";

export const Main = styled.main`
  all: unset;
  display: block;
  color: ${(props) => props.theme.color.font};
`;

export const Wrapper = styled.div`
  background-color: var(--color-primary);
  display: grid;
  grid-template-rows: 1fr 7fr 1fr;
  height: 100vh;
  overflow: scroll;
`;