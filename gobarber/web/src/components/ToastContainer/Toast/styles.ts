import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import { IToastProps } from './interfaces';

const toastTypeVariations = {
  info: css`
    color: #3172b7;
    background: #ebf8ff;
  `,
  success: css`
    color: #2e656a;
    background: #e6fffa;
  `,
  error: css`
    color: #c53030;
    background: #fddede;
  `,
};

export const Container = styled(animated.div)<Omit<IToastProps, 'message'>>`
  position: relative;

  display: flex;

  width: 360px;
  border-radius: 10px;
  padding: 16px 30px 16px 16px;

  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  ${(props) => toastTypeVariations[props.type || 'info']}

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;

      font-size: 14px;
      line-height: 20px;

      opacity: 0.8;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;

    border: 0;

    opacity: 0.6;
    color: inherit;
    background: transparent;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
