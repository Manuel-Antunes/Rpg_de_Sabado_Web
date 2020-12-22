import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: number;
}

const TextInput: React.FC<InputProps> = ({ children, width }) => {
  return (
    <Container width={width}>
      <label>{children}</label>
      <input type="text" />
    </Container>
  );
};

export default TextInput;
