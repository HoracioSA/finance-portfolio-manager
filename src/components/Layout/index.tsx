import Main from 'components/Main';
import NavBar from 'components/Navbar/NavBar';
import React, { ReactNode } from 'react';

import { Container } from './styles';
interface Props {
  children?: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <Container>
      <NavBar />
      <Main>{children}</Main>
    </Container>
  );
}
