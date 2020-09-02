import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;
  max-width: 700px;

  form {
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      width: 100%;
      padding: 16px;
      border-radius: 10px;

      color: #f4ede8;
      background: #232129;
      border: 2px solid #232129;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      margin-top: 16px;

      width: 100%;
      height: 56px;
      padding: 0 16px;
      border-radius: 10px;

      border: 0;
      color: #312e38;
      font-weight: 500;
      background: #ff9000;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      display: block;
      margin-top: 24px;

      color: #f4ede8;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;

    margin-top: 24px;

    color: #ff9000;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;

  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
