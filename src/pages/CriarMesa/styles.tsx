import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  align-items: center;
`;

export const Form = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;

  width: 70rem;
  height: 90rem;
  border-radius: 4px;

  padding: 15rem 4rem 2rem 4rem;
  margin-top: 15rem;

  background-color: #141419;

  img {
    width: 22rem;
    position: absolute;
    top: -12rem;
    left: 25rem;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;

    label {
      font-family: cursive;
      font-style: italic;
      color: #e65100;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    textarea {
      padding: 1rem;
      height: 25rem;
    }

    button {
      width: 22rem;
      height: 6.5rem;
      font-size: 3rem;
      position: absolute;
      justify-self: center;
      left: 25rem;
      bottom: -3rem;
    }
  }

  div + img {
    position: unset;
    width: 4rem;
    border-radius: unset;
    align-self: flex-end;
    margin-top: 1rem;
  }
`;
