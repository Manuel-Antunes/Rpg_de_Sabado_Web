import React, { InputHTMLAttributes } from 'react';
import { Input } from '@rocketseat/unform';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelContent: string;
  type: string;
  name: string;
}

const FormGroup: React.FC<InputProps> = ({
  labelContent,
  type,
  name,
}: InputProps) => {
  return (
    <Container>
      <label htmlFor={name}>{labelContent}</label>
      <Input name={name} type={type} id={name} />
    </Container>
  );
};

export default FormGroup;
