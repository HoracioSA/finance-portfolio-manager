import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--black-light);
`;
export const CoinCardWrapper = styled.div`
  display: flex;
  height: 3rem;
  width: 100%;

  padding: 2rem 2rem;
  justify-content: space-between;
  align-items: center;
`;
export const LeftSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.span`
  font-family: Arial;
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  margin-right: 1rem;
`;
