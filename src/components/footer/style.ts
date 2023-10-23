import { styled } from "styled-components";
import { SharedComponentProps } from "../shared-props";

export const Foot = styled.footer<SharedComponentProps>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.font};
  padding: ${(props) => props.theme.sizes.sm};
`;