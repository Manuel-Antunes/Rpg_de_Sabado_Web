import styled, { css } from 'styled-components';

interface ContainerProps {
  resize?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #e65100;
    ${(props) =>
      props.resize
        ? css`
            font-size: 3rem;
          `
        : css`
            font-size: 7rem;
          `}
    z-index: -1;
  }
  img {
    position: absolute;
    height: 100%;
    z-index: -2;
  }
`;
