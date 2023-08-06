import { styled } from "styled-components";

export const CardsWrapp = styled.div`
  display: grid;
  grid-template-columns:  repeat( auto-fill, minmax(250px, 1fr));
  gap: 20px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  & a {
    color: ${(props) => props.theme.color.font};
    text-decoration: none;
  }
`;