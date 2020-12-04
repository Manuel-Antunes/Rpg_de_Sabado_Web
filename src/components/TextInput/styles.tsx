import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  label {
    font-family: cursive;
    font-style: italic;
    color: #e65100;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  input {
    height: 5rem;
  }
`;
