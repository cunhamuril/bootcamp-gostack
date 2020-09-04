import React from 'react';

import { IToastContainerProps } from './interfaces';

import Toast from './Toast';

import { Container } from './styles';

const ToastContainer: React.FC<IToastContainerProps> = ({ messages }) => (
  <Container>
    {messages.map((message) => (
      <Toast
        key={message.id}
        hasDescription={!!message.description}
        message={message}
      />
    ))}
  </Container>
);

export default ToastContainer;
