import { styled } from "styled-components";

export const TabSmall = styled.button`
  font-size: ${(props) => props.theme.sizes.sm};
  color: ${(props) => props.theme.color.font};
  margin: 0 ${(props) => props.theme.sizes.xs};
  padding: ${(props) => props.theme.sizes.xs} ${(props) => props.theme.sizes.sm};
  border-radius: ${(props) => props.theme.sizes.borderRadius} 0;
  border: 1px solid ${(props) => props.theme.color.light};
  background-color: ${(props) => props.theme.color.darker};
  cursor: pointer;
  & :hover {
    box-shadow: ${(props) => props.theme.color.font} 0px 1px 4px;
  }
`;