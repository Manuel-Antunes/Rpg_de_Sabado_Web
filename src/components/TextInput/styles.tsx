import styled, { css } from 'styled-components';

interface ContainerProps {
  width?: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}%;
    `};

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

  input {
    height: 3.5rem;

    @media (orientation: portrait) {
      height: 4rem;
    }
  }
`;
