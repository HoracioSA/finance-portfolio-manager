import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 5.9rem 0;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const Main = styled.div`
  flex: 1;
  padding: 15px;
`;
export const Form = styled.form`
  width: 30%;
  margin: auto;
  background: var(--background);
  border-radius: 10px;
  padding: 14px 24px;
  overflow: hidden;
`;
export const Fildset = styled.fieldset`
  border: 0;
  > fieldset + fieldset {
  }
`;
export const Legend = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-size: 24px;
  line-height: 34px;
  color: var(--black);
  font-weight: 700;

  margin-bottom: 10px;
  padding-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  background: var(--gray);
  outline: none;
  border: 1px solid var(--border-gray);
  font-size: 18px;
  color: var(--black);
  height: 2.4rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0 16px;
  :focus {
    outline: none !important;
    border: 1px solid var(--yellow);
    box-shadow: 0 0 10px var(--yellow);
  }
`;

export const Label = styled.label`
  display: flex;
  color: var(--gray);

  line-height: 24px;
`;
export const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: background-color 0.5s;
  :hover {
    /* background: #36CF82; */
    //background: #36CF82;
    opacity: 0.8;
  }
`;
export const CloseButton = styled.button`
  position: relative;
  top: 0;
  left: 340px;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  border-radius: 8px;
  opacity: 0.7;
  background-color: var(--red);
  margin-bottom: 1rem;
`;
const CloseIconsStyle = css`
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  color: var(--white);
  box-shadow: 0 0 20px var(--green);
  border-radius: 1rem;
  opacity: 0.8;
  @media (max-width: 500px) {
    width: 30px;
  }
`;

export const InputBlock = styled.div``;
