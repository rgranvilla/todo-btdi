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

export const GrabbingBar = styled.div`
  height: 1rem;
  border-radius: 0 0 0.25rem 0.25rem;
  transform: translateY(1px);

  display: flex;
  justify-content: center;

  cursor: grabbing;
  background: var(--bg-button-card);

  svg {
    width: 1.25rem;
    height: 1.25rem;

    color: var(--txt-white);
    transform: translateY(-0.125rem);
  }
`;
