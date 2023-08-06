import { styled } from "styled-components";

export const CardsWrapp = styled.div`
  display: grid;
  grid-template-columns:  repeat( auto-fill, minmax(250px, 1fr) );
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  & a {
    color: ${(props) => props.theme.color.font};
    text-decoration: none;
  }
`;