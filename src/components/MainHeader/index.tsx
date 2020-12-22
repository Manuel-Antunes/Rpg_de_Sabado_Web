import React, { BaseHTMLAttributes } from 'react';

import { Container } from './styles';

interface MainHeaderProps extends BaseHTMLAttributes<HTMLDivElement> {
  resize?: boolean;
}

const MainHeader: React.FC<MainHeaderProps> = ({ children, resize }) => {
  return <Container resize={resize}>{children}</Container>;
};

export default MainHeader;
