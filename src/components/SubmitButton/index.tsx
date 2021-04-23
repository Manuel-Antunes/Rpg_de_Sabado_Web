import React, { ButtonHTMLAttributes } from 'react';

import { Button } from './styles';

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const SubmitButton: React.FC<SubmitButtonProps> = ({ children }) => {
  return <Button type="submit">{children || 'Send...'}</Button>;
};

export default SubmitButton;
