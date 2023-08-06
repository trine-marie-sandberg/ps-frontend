import { styled } from "styled-components";

export const Card = styled.div`
  border: solid 2px ${(props) => props.theme.color.darker};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  background-color: ${(props) => props.theme.color.primary};
  margin: ${(props) => props.theme.sizes.xs};
  padding:  ${(props) => props.theme.sizes.sm};
  margin: 5px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.562) 0px 5px 15px;
  }
`;