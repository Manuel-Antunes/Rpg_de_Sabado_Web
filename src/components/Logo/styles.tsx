import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    form {
        transform: rotate(-43deg);
    }

    to {
        transform: rotate(-10deg);
    }
`;

const grow = keyframes`
    form {
        transform: scale(1);
    }

    to {
        transform: scale(1.02);
    }
`;

export const Container = styled.div`
  display: inline-block;
  @import url('https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap');

  position: relative;
  h1 {
    text-align: center;
    font-family: 'Henny Penny', cursive;
    font-size: 7rem;
    z-index: 1;
    color: #e65100;
    line-height: 120%;
    &:hover {
      cursor: default;
    }
  }
  #dice {
    max-width: 10rem;
    max-height: 16rem;
    position: absolute;
    z-index: -1;
    left: -5rem;
    animation: ${grow} 1s linear infinite;
    bottom: -1.5rem;
  }
  #jack {
    z-index: -1;
    max-width: 10rem;
    max-height: 16rem;
    position: absolute;
    right: -5rem;
    bottom: -1.5rem;
    width: auto;
    height: auto;
    animation: ${grow} 1s linear infinite;
  }
  h3 {
    font-size: 1.5rem;
    right: -10rem;
    bottom: -5rem;
    transform: rotate(-20deg);
    animation: ${rotate} 1s linear alternate infinite;
    color: #e65100;
    font-family: 'Comic Sans MS', cursive, sans-serif;
    position: absolute;
    &:hover {
      cursor: default;
    }
  }
`;
