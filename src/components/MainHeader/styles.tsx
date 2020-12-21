import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #e65100;
    font-size: 7rem;
  }
  img {
    position: absolute;
    height: 100%;
    z-index: -1;
  }
`;
