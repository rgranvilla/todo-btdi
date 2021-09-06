import styled from 'styled-components';

export const Container = styled.div`
  min-width: 17rem;
  height: fit-content;
  border-radius: 0.25rem;

  background: rgba(0, 0, 0, 0.15);
`;

export const CardContainer = styled.div`
  overflow: 'visible';
  padding: 0.25rem 0.5rem;

  input {
    background: var(--bg-card);
    margin-top: 0.5rem;
    padding: 0.25rem;
    width: 100%;
    resize: none;
    min-height: 2rem;
    overflow: hidden;
    outline: none;
    border: none;
    border-radius: 0.25rem;
    font-size: 0.75rem;
  }
`;

export const ControlContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 0.5rem;

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

export const AddAnotherListContainer = styled.div`
  width: 100%;
  height: 2rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
