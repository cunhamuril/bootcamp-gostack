import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

import { IContainerProps } from './interfaces';

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 16px;
  border-radius: 10px;

  color: #666360;
  background: #232129;
  border: 2px solid #232129;

  & + div {
    margin-top: 8px;
  }

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: #c53030;
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;

    height: 100%;

    border: 0;

    color: #f4ede8;
    background: transparent;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  margin-left: 16px;

  height: 20px;

  svg {
    margin: 0;
  }

  span {
    color: #fff;
    background: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
