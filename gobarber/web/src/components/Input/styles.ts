import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 16px;
  border-radius: 10px;

  background: #232129;
  border: 2px solid #232129;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;

    border: 0;

    color: #f4ede8;
    background: transparent;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
    color: #666360;
  }
`;
