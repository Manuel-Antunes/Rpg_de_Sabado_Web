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
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  }

  input {
    height: 2.5rem;
  }
`;
