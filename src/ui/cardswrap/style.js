import { styled } from "styled-components";

export const CardsWrapp = styled.div`
  display: grid;
  grid-template-columns:  repeat( auto-fill, minmax(250px, 1fr) );
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  padding:  ${(props) => props.theme.sizes.sm};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  /* background-color: ${(props) => props.theme.color.darker}; */
`;