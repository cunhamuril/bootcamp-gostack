import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  margin-top: 80px;

  font-size: 48px;
  max-width: 450px;
  line-height: 56px;

  color: #3a3a3a;
`;

export const Form = styled.form`
  display: flex;

  margin-top: 40px;
  max-width: 700px;

  input {
    flex: 1;
    border: 0;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;

    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    border: 0;
    width: 210px;
    height: 70px;

    color: #fff;
    font-weight: bold;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;

  max-width: 700px;

  a {
    display: flex;
    align-items: center;

    width: 100%;
    padding: 24px;
    border-radius: 5px;

    background: #fff;
    text-decoration: none;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        margin-top: 4px;

        font-size: 18px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
