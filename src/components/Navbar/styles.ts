import styled, { css } from 'styled-components';

import { Search } from '../../icons';
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  width: 100%;
  background-color: var(--white);
  padding: 0 2rem;
`;
export const Price = styled.span`
  color: var(--black-light);
  font-size: 1.5em;
  font-family: Arial bold;
`;
export const Logo = styled.a`
  cursor: pointer;
  font-size: 1.5em;
  font-family: Arial bold;
`;
export const SeachButton = styled.button`
  cursor: pointer;
  border-radius: 0 0.5rem 0.5rem 0;
  &:hover {
    opacity: 0.8;
    transition: 0.2s;
  }
`;
const iconCss = css`
  width: 2rem;
  color: var(--black-light);
`;

export const SearchIcon = styled(Search)`
  ${iconCss}
`;
