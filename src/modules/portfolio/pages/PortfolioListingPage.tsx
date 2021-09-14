import styled from 'styled-components';
const PortfolioListingPage = () => (
  <Container>
    <Title>
      Welcome to crypto portfolio manager Use search on the right to add coins
      to your porfolio
    </Title>
  </Container>
);

export default PortfolioListingPage;
const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 50%;
  width: 100%;
`;

const Title = styled.p`
  width: 413px;
  height: 42px;
  margin-top: 20px;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
`;
