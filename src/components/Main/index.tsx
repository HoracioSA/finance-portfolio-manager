import React, { ReactNode } from 'react';

import { Container, Wrapper } from './styles';

interface Props {
  children?: ReactNode;
}
export default function Main({ children }: Props) {
  return <Container>{children}</Container>;
}
