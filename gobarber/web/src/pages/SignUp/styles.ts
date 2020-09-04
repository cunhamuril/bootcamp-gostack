import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  min-height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  overflow: hidden;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  overflow: hidden;

  height: 100%;

  animation: ${appearFromRight} 0.5s;

  form {
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  > a {
    display: flex;
    align-items: center;

    margin-top: 24px;

    color: #f4ede8;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;

  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
