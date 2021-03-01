import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import SignIn from '../../pages/SignIn';

const mockedHistoryPush = jest.fn();
const mockedSignIn = jest.fn();
const mockedAddToast = jest.fn();

// Simulando importação de uma lib (nesse caso react-router-dom)
jest.mock('react-router-dom', () => ({
  // Simulando: uma função que vai retornar um objeto com uma função "vazia" chamada push
  useHistory: () => ({
    push: mockedHistoryPush,
  }),

  // Simulando: retorna um elemento React com uma children
  Link: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock('../../hooks/auth', () => ({
  useAuth: () => ({
    signIn: mockedSignIn,
  }),
}));

jest.mock('../../hooks/toast', () => ({
  useToast: () => ({
    addToast: mockedAddToast,
  }),
}));

describe('SignIn Page', () => {
  beforeEach(() => {
    mockedSignIn.mockClear();
  });

  it('should be able to sign in', async () => {
    const { getByText, getByTestId } = render(<SignIn />);

    const emailField = getByTestId('email');
    const passwordField = getByTestId('password');
    const buttonElement = getByText('Entrar');

    fireEvent.change(emailField, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedSignIn).toBeCalled;
      // expect(mockedHistoryPush).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('should not be able to sign in with invalid credentials', async () => {
    const { getByText, getByTestId } = render(<SignIn />);

    const emailField = getByTestId('email');
    const passwordField = getByTestId('password');
    const buttonElement = getByText('Entrar');

    fireEvent.change(emailField, { target: { value: 'not-valid-email' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedSignIn).not.toBeCalled;
    });
  });

  it('should display an error if login fails', async () => {
    // Override na função mockedSignIn
    mockedSignIn.mockImplementation(() => {
      throw new Error();
    });

    const { getByText, getByTestId } = render(<SignIn />);

    const emailField = getByTestId('email');
    const passwordField = getByTestId('password');
    const buttonElement = getByText('Entrar');

    fireEvent.change(emailField, { target: { value: 'not-valid-email' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedAddToast).toBeCalledWith(
        expect.objectContaining({
          type: 'error',
        }),
      );
    });
  });
});
