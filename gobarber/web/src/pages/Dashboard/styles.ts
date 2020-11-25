import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;

  margin: 0 auto;
  max-width: 1120px;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;

    border: 0;
    background: transparent;

    svg {
      width: 20px;
      height: 20px;

      color: #999591;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;

    object-fit: cover;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;

    margin-left: 16px;

    line-height: 24px;

    span {
      color: #f4ede8;
    }

    strong {
      color: #ff9000;
    }
  }
`;

export const Content = styled.main`
  display: flex;

  max-width: 1120px;
  margin: 64px auto;
`;

export const Schedule = styled.section`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    display: flex;
    align-items: center;

    margin-top: 8px;
    font-weight: 500;

    color: #ff9000;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      width: 1px;
      height: 12px;

      margin: 0 8px;

      content: '';
      background: #ff9000;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  strong {
    font-size: 20px;
    font-weight: 400;

    color: #999591;
  }

  div {
    position: relative;

    display: flex;
    align-items: center;

    margin-top: 10px;

    padding: 16px 24px;
    border-radius: 10px;

    background: #3e3b47;

    &::before {
      position: absolute;
      top: 10%;
      left: 0;

      width: 1px;
      height: 80%;

      content: '';
      background: #ff9000;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;

      object-fit: cover;
    }

    strong {
      margin-left: 24px;
      color: #fff;
    }

    span {
      display: flex;
      align-items: center;

      margin-left: auto;

      color: #999591;

      svg {
        margin-right: 8px;

        color: #ff9000;
      }
    }
  }
`;

export const Calendar = styled.aside`
  width: 380px;
`;
