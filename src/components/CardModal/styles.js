import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 20rem;
  min-height: 15rem;
  box-shadow: 0 5px 16px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1000;
  padding: 0.25rem;
  border-radius: 10px;
  background: var(--bg-list);
  > div {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  z-index: 1000;
  overflow: 'visible';
  min-height: 11rem;
  width: 100%;
  padding: 0.25rem 0.5rem;
  display: flex;
  flex-direction: column;

  p {
    width: 100%;
    min-height: 5rem;
    border-radius: 0.25rem;
    background: var(--bg-button-card);
    color: var(--txt-input);
    font-size: 0.75rem;
    padding: 0.5rem;
  }

  .textarea-input {
    background: var(--bg-card);
    margin-top: 0.5rem;
    padding: 0.25rem;
    width: 100%;
    resize: none;
    min-height: 10rem;
    overflow: hidden;
    outline: none;
    border: none;
    border-radius: 0.25rem;
    font-size: 0.75rem;
  }
`;

export const ControlContainer = styled.div`
  z-index: 1000;

  width: 100%;
  height: fit-content;

  cursor: 'pointer';
  border-radius: 0.25rem;
  padding-left: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;

    svg {
      cursor: pointer;
    }
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: -2rem;
  right: 0;
  width: 2rem;
  height: 2rem;
  padding: 0;
  color: var(--txt-white);
  z-index: 10;
`;
