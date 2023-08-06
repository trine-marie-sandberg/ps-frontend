import { styled } from "styled-components";

export const TabSmall = styled.button`
  font-size: ${(props) => props.theme.sizes.sm};
  color: ${(props) => props.theme.color.tertiary};
  margin: 0 ${(props) => props.theme.sizes.xs};
  padding: ${(props) => props.theme.sizes.xs} ${(props) => props.theme.sizes.sm};
  border-radius: ${(props) => props.theme.sizes.borderRadius} 0;
  border: 1px solid ${(props) => props.theme.color.darker};
  background-color: ${(props) => props.theme.color.primary};
  cursor: pointer;
`;