import styled from 'styled-components';
import { shade, transparentize } from 'polished';

export const Container = styled.button`
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

  &:not(:disabled):hover {
    background: ${shade(0.2, '#ff9000')};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${transparentize(0.4, '#ff9000')};
  }
`;
