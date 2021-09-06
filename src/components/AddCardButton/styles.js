import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
`;

export const CardContainer = styled.div`
  overflow: 'visible';
  min-height: 5rem;
  padding: 0.25rem 0.5rem;

  .textarea-input {
    background: var(--bg-card);
    margin-top: 0.5rem;
    padding: 0.25rem;
    width: 100%;
    resize: none;
    min-height: 5rem;
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

export const AddAnotherCardContainer = styled.div`
  width: 100%;
  padding: 0.25rem 0.5rem;
  cursor: pointer;

  display: flex;
  gap: 0.5rem;
`;
