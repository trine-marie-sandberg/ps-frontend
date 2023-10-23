import React, { ReactNode } from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import { Main, Wrapper } from "./style";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </Wrapper>
  );
}
