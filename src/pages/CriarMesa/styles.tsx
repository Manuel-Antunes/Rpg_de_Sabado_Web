import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 1rem;

  align-items: center;
`;

export const Form = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;

  width: 35rem;
  height: 45rem;
  border-radius: 0.2rem;

  margin-top: 5rem;
  padding: 4rem 2rem 1rem 2rem;

  background-color: #141419;

  img {
    width: 11rem;
    position: absolute;
    top: -3rem;
    left: 12.5rem;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    justify-content: center;

    label {
      font-family: cursive;
      font-style: italic;
      color: #e65100;
      font-size: 1.25rem;
      margin-bottom: 0.25rem;
    }

    textarea {
      padding: 0.5rem;
      height: 12.5rem;
    }

    button {
      width: 11rem;
      height: 3.25rem;
      font-size: 1.5rem;
      position: absolute;
      justify-self: center;
      left: 12.5rem;
      bottom: -1.5rem;
    }
  }

  div + img {
    position: unset;
    width: 2rem;
    border-radius: unset;
    align-self: flex-end;
    margin-top: 0.5rem;
  }
`;
