import styled from "styled-components";

// Define the props interfaces for your styled components

interface NavProps {
  // Define your props here
}

interface HeadProps {
  // Define your props here
}

interface IProps {
  // Define your props here
}

// Define your styled components using the defined props interfaces

export const Nav = styled.nav<NavProps>`
  color: ${(props) => props.theme.color.font};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Head = styled.header<HeadProps>`
  padding: ${(props) => props.theme.sizes.sm};
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.color.primary};
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 5px;
`;

export const Li = styled.li`
  padding: 5px;

  & :hover p {
    display: block;
  }

  & a {
    color: white;
  }
`;

export const I = styled.i<IProps>`
  font-size: ${(props) => props.theme.sizes.med};
  padding: 5px;
  color: ${(props) => props.theme.color.secondary};
`;

export const Logo = styled.i`
  font-size: ${(props) => props.theme.sizes.xl};
  color: ${(props) => props.theme.color.secondary};
  padding: 5px;
`;

export const LogoText = styled.p`
  font-size: ${(props) => props.theme.sizes.sm};
  color: ${(props) => props.theme.color.secondary};
  display: inline;
`;

export const CartWrapper = styled.div`
  display: flex;
`;

export const CartItemsIndikator = styled.p`
  align-self: center;
  margin: 0 auto;
  color: ${(props) => props.theme.color.font};
`;

export const HoverText = styled.p`
  display: none;
  position: absolute;
`;

// Export your styled components and props interfaces

export default {
  Nav,
  Head,
  Ul,
  Li,
  I,
  Logo,
  LogoText,
  CartWrapper,
  CartItemsIndikator,
  HoverText,
};
