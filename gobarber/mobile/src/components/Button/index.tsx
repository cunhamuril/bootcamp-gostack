import React from 'react';

import { IButtonProps } from './interfaces';

import { Container, ButtonText } from './styles';

const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
