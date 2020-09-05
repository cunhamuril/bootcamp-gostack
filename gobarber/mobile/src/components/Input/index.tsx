import React from 'react';

import { IInputProps } from './interfaces';

import { Container, TextInput, Icon } from './styles';

const Input: React.FC<IInputProps> = ({ name, icon, ...props }) => {
  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />

      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        {...props}
      />
    </Container>
  );
};

export default Input;
