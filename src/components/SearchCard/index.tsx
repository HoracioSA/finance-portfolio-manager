import React, { useState } from 'react';

interface CoinProps {
  name?: string;
}
import { Container, LeftSide, Text, CoinCardWrapper } from './styles';

export default function SearchCard(props: CoinProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <CoinCardWrapper>
        <LeftSide>
          <Text>{props.name}</Text>
        </LeftSide>
      </CoinCardWrapper>
    </Container>
  );
}
