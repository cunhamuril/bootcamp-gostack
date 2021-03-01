import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';

import Input from '../../components/Input';

jest.mock('@unform/core', () => ({
  useField: () => ({
    fieldName: 'email',
    defaultValue: '',
    error: '',
    registerField: jest.fn(),
  }),
}));

describe('Input component', () => {
  it('should be able to render an input', () => {
    const { getByTestId } = render(<Input name="email" />);

    const inputElement = getByTestId('email');

    expect(inputElement).toBeTruthy();
  });

  it('should render highlight on input focus', async () => {
    const { getByTestId } = render(<Input name="email" />);

    const inputElement = getByTestId('email');
    const containerElement = getByTestId('input-container');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyle('border-color: #ff9000');
      expect(containerElement).toHaveStyle('color: #ff9000');
    });
  });

  it('should not render highlight on input blur', async () => {
    const { getByTestId } = render(<Input name="email" />);

    const inputElement = getByTestId('email');
    const containerElement = getByTestId('input-container');

    fireEvent.focus(inputElement);
    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).not.toHaveStyle('border-color: #ff9000');
      expect(containerElement).not.toHaveStyle('color: #ff9000');
    });
  });

  it('should keep input text highlight when input filled', async () => {
    const { getByTestId } = render(<Input name="email" />);

    const inputElement = getByTestId('email');
    const containerElement = getByTestId('input-container');

    fireEvent.change(inputElement, {
      target: { value: 'johndoe@example.com.br' },
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyle('color: #ff9000');
    });
  });
});
