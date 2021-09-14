import { Close } from '@styled-icons/evaicons-solid';
import Button from 'components/Button';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import {
  Container,
  Main,
  Form,
  Fildset,
  Legend,
  Input,
  Label,
  CloseButton,
  InputBlock,
  ButtonContainer,
} from './styles';
interface ModalProps {
  show: boolean;
  onClose: () => void;
}
export default function Modal({ show, onClose }: ModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  function handleSave(e) {
    e.preventDefault();
  }
  function handleCloseModal(e) {
    e.preventDefault();
    onClose();
  }
  const ModalCont = show ? (
    <Container>
      <Main>
        <Form>
          <Fildset>
            <CloseButton onClick={handleCloseModal}>
              <Close width={24} height={24} color="#FFF" />
            </CloseButton>

            <InputBlock className="input-block ">
              <Label>Price ($)</Label>
              <Input type="text" />
            </InputBlock>
            <InputBlock className="input-block ">
              <Label>Quantity</Label>
              <Input type="email" />
            </InputBlock>
          </Fildset>
          <ButtonContainer>
            <Button title="Save Transaction" onClick={handleSave} />
          </ButtonContainer>
        </Form>
      </Main>
    </Container>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      ModalCont,
      document.getElementById('modal-root')
    );
  }

  return null;
}
