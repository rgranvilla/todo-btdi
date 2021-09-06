import styled from 'styled-components';

export const Container = styled.div`
  background: var(--bg-list);
  width: 17rem;
  height: fit-content;

  border-radius: 0.25rem;
  padding: 0.5rem 0.25rem;

  header {
    padding: 0 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  }

  main {
    ul {
      display: flex;
      flex-direction: column;
    }
    min-height: 2rem;
  }

  footer {
    border-top: 1px solid var(--bg-button-card);
    padding-top: 0.5rem;
  }

  .counter {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.25rem;

    background: var(--secondary);

    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: var(--txt-white);
      font-size: 1rem;
      font-weight: 700;
    }
  }
`;
