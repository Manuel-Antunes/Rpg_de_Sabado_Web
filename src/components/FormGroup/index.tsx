import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";
import { Input } from "@rocketseat/unform";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelContent: string;
  type: string;
  name: string;
}

const FormGroup: React.FC<InputProps> = ({ labelContent, type, name }) => {
  return (
    <Container>
      <label htmlFor={name}>{labelContent}</label>
      <Input name={name} type={type} id={name} />
    </Container>
  );
};

export default FormGroup;
