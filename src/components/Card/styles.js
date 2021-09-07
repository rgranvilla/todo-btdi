import styled from 'styled-components';

export const Container = styled.div`
  min-height: 4rem;
  border-radius: 0.25rem;

  margin: 0.5rem;

  background: var(--bg-card);

  div {
    header {
      display: flex;
      justify-content: space-between;
      padding-top: 0.5rem;

      svg {
        cursor: pointer;
      }
    }

    main {
      padding: 0.5rem;
      text-align: justify;
      text-justify: inter-word;

      font-size: 0.75rem;
      font-weight: 400;

      color: var(--txt-content);
    }
  }
`;
