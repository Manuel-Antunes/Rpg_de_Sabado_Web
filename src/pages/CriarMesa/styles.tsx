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

  width: 45rem;
  height: 55rem;
  border-radius: 0.2rem;

  margin-top: 5rem;
  padding: 4rem 2rem 1rem 2rem;

  background-color: #141419;

  @media (orientation: portrait) {
    width: 60rem;
    height: 70rem;
  }

  img {
    width: 11rem;
    position: absolute;
    top: -3rem;
    left: 17rem;
    border-radius: 50%;

    @media (orientation: portrait) {
      width: 15rem;
      left: 22rem;
    }
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
      font-size: 2rem;
      margin-bottom: 0.25rem;

      @media (orientation: portrait) {
        font-size: 2.5rem;
      }
    }

    textarea {
      padding: 0.5rem;
      height: 12.5rem;
    }

    button {
      width: 16rem;
      height: 4.25rem;
      font-size: 2.5rem;
      position: absolute;
      justify-self: center;
      left: 14rem;
      bottom: -2rem;

      @media (orientation: portrait) {
        width: 25rem;
        height: 6rem;
        font-size: 3.5rem;
        left: 17.5rem;
        bottom: -2.5rem;
      }
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
