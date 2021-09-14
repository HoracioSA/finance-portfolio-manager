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
export const MidleSide = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const RightSide = styled.div``;
export const Text = styled.span`
  font-family: Arial;
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  margin-right: 1rem;
`;
export const TextHolding = styled.span`
  color: var(--yellow);
  font-family: Arial;
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
`;
export const CostIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.3rem;
  width: 1.3rem;
  background-color: var(--red);
  border-radius: 5px;
`;
export const MarketIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.3rem;
  width: 1.3rem;
  background-color: var(--green);
  border-radius: 5px;
`;
export const Wrapper = styled.div`
  margin-left: 24px;
`;
export const TextAndIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Text24 = styled.p`
  display: flex;
  width: 2.5rem;
  height: 1.4rem;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-family: Arial bold;
  background-color: var(--red-light);
  border-radius: 5px;
  z-index: 1;
`;
export const Label2 = styled.p`
  position: relative;
  display: flex;
  width: 3.5rem;
  left: -10px;
  top: 0;
  border-radius: 5px;
  height: 1.4rem;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-family: Arial bold;
  background-color: var(--red);
`;
export const Text24Label = styled.div`
  display: flex;
`;
export const WrapperRight = styled.div`
  display: flex;
  align-items: center;
  width: 8rem;
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfitIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.3rem;
  width: 3rem;
  background-color: var(--yellow);
  border-radius: 5px;
`;
export const IconProfit = styled.p`
  font-size: 14px;
  color: var(--white);
`;
export const TogleContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;
