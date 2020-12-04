import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  align-items: center;

  div {
    div {
      h1 {
        font-weight: normal;
      }
    }
  }

  
`;

export const Form = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  width: 70rem;
  height: 90rem;
  padding: 15rem 2rem 2rem 2rem;

  margin-top: 15rem;

  img {
    width: 22rem;
    position: absolute;
    top: -15rem;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%
  }
`;
