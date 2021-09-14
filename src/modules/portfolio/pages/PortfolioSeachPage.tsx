import SearchCard from 'components/SearchCard';
import { NextPageContext } from 'next';
import { Coins } from 'services/coinMarketCap.service';
import styled from 'styled-components';

interface Props {
  coins: Coins;
}
export default function PortfolioSearchPage({ coins }: Props) {
  return (
    <Container>
      {coins.data.map((data) => (
        <SearchCard key={data.id} name={data.name} />
      ))}
    </Container>
  );
}

PortfolioSearchPage.getInitialProps = async (args: NextPageContext) => {
  //console.log('args:', args);
  try {
    const res = await fetch(`${process.env.API_URL}/api/coins`);
    const coins = await res.json();

    return { coins };
  } catch {
    return { coins: {} };
  }
};
const Container = styled.div`
  height: 50%;
  width: 100%;
`;
