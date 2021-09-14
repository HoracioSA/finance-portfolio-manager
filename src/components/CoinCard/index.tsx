import { Plus, ShoppingBag } from '@styled-icons/fa-solid';
import { ArrowDown, ArrowRight, Lock } from '@styled-icons/feather';
import Button from 'components/Button';
import Modal from 'components/Modal';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

interface CoinProps {
  name?: string;
  holding?: number;
  netcost?: number;
  marketvalue?: number;
  profit?: number;
  percentage?: number;
  content?: React.ReactNode;
}
import {
  Container,
  LeftSide,
  MidleSide,
  RightSide,
  Text,
  Wrapper,
  TextAndIconContainer,
  Text24,
  Label2,
  Text24Label,
  WrapperRight,
  RightGroup,
  CostIcon,
  MarketIcon,
  ProfitIcon,
  IconProfit,
  TextHolding,
  CoinCardWrapper,
  TogleContent,
} from './styles';

export default function CoinCard(props: CoinProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const [showModal, setShowModal] = useState(false);

  return (
    <AnimateSharedLayout>
      <Modal onClose={() => setShowModal(false)} show={showModal} />
      <Container>
        <CoinCardWrapper>
          <LeftSide>
            <motion.div layout onClick={toggleOpen} initial={{}}>
              <ArrowRight height={24} width={24} color="#212121" />
            </motion.div>
            <Text>{props.name}</Text>
          </LeftSide>
          <MidleSide>
            <Wrapper>
              <TextAndIconContainer>
                <Text>HOLDING</Text>
                <ShoppingBag height={14} width={14} color="#FFD130" />
              </TextAndIconContainer>
              <TextHolding>{props.holding}</TextHolding>
            </Wrapper>
            <Wrapper>
              <TextAndIconContainer>
                <Text>Net Cost</Text>
                <CostIcon>
                  <Lock height={14} width={14} color="#FFFF" />
                </CostIcon>
              </TextAndIconContainer>
              <Text>{props.netcost}</Text>
            </Wrapper>
            <Wrapper>
              <TextAndIconContainer>
                <Text>MARKET VALUE</Text>
                <MarketIcon>
                  <Plus height={14} width={14} color="#FFFF" />
                </MarketIcon>
              </TextAndIconContainer>
              <Text>{props.marketvalue}</Text>
            </Wrapper>
            <Wrapper>
              <TextAndIconContainer>
                <Text>PROFIT</Text>
                <ProfitIcon>
                  <IconProfit>$==</IconProfit>
                </ProfitIcon>
              </TextAndIconContainer>
              <Text>{props.profit}</Text>
            </Wrapper>
          </MidleSide>
          <RightSide>
            <WrapperRight>
              <Text24Label>
                <Text24>24H</Text24>
                <Label2>{props.percentage} %</Label2>
              </Text24Label>
              <RightGroup>
                <Text>{props.holding}</Text>
                <ArrowDown height={18} width={18} color="#F00" />
              </RightGroup>
            </WrapperRight>
          </RightSide>
        </CoinCardWrapper>
        <AnimatePresence>
          {isOpen && (
            <TogleContent>
              <Text>
                No transactions. Add a new transaction to update your protfolio
              </Text>
              <Button
                onClick={() => {
                  setShowModal(true);
                }}
                title="Add Trasaction"
              />
            </TogleContent>
          )}
        </AnimatePresence>
      </Container>
    </AnimateSharedLayout>
  );
}
