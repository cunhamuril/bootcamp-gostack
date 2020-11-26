import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  > header {
    display: flex;
    align-items: center;

    height: 144px;
    background-color: #28262e;

    div {
      width: 100%;
      max-width: 1120px;

      margin: 0 auto;

      svg {
        width: 24px;
        height: 24px;

        color: #999591;
        transition: 0.2s;

        &:hover {
          transform: translateX(-3px);
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin: -90px auto 0;

  width: 100%;
  max-width: 700px;
  overflow: hidden;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 340px;
    text-align: center;

    h1 {
      margin-top: 32px;
      margin-bottom: 24px;

      font-size: 20px;
      text-align: left;
    }

    div.old-password {
      margin-top: 24px;
    }
  }

  input[name='old_password'] {
    margin-top: 24px;
  }
`;

export const AvatarInput = styled.div`
  position: relative;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    bottom: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    border: none;
    border-radius: 50%;

    cursor: pointer;
    background: #ff9000;
    transition: background-color 0.2s;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background-color: ${shade(0.2, '#ff9000')};
    }
  }
`;
