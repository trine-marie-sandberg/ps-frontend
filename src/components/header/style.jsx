import styled from "styled-components";

export const Head = styled.header`
  padding: ${(props) => props.theme.sizes.sm};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.color.primary};
`;

export const LogInOutIcon = styled.div`
  font-size: ${(props) => props.theme.sizes.med};
  padding: 5px;
`;

export const IconWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.font};
`;