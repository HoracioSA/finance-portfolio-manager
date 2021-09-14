import React, { BaseHTMLAttributes } from 'react';
import styled from 'styled-components';
interface ButtonProps extends BaseHTMLAttributes<HTMLButtonElement> {
  title: string;
}
export default function Button({ title, ...rest }: ButtonProps) {
  return <Container {...rest}>{title}</Container>;
}

const Container = styled.button`
  width: 174px;
  height: 35px;
  background-color: var(--yellow);
  border-radius: 5px;
  font-family: Arial;
  font-weight: bold;
  font-size: 16px;
`;
