import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;

  background: var(--primary);

  display: flex;
  align-items: center;

  h1 {
    color: var(--txt-white);
    padding-left: 2rem;
  }
`;
