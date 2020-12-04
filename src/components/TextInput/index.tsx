import React from 'react';

import { Container } from './styles';

const TextInput: React.FC = ({ children }) => {
  return (
    <Container>
      <label>{children}</label>
      <input type="text" />
    </Container>
  );
};

export default TextInput;
