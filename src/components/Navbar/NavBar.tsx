import Link from 'next/link';
import React, { ReactNode } from 'react';

import { Container, Price, Logo, SeachButton, SearchIcon } from './styles';
export default function NavBar() {
  return (
    <Container>
      <Price>$ 50</Price>
      <Link href="/">
        <Logo>FlyToMoon 🚀</Logo>
      </Link>
      <Link href="/coins">
        <SeachButton>
          <SearchIcon />
        </SeachButton>
      </Link>
    </Container>
  );
}
