import styled from 'styled-components';
import { shade } from 'polished';

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

    a {
      text-decoration: none;

      color: #ff9000;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  display: flex;

  max-width: 1120px;
  margin: 64px auto;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  h2 {
    margin-top: 32px;

    color: #999591;
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

export const NextAppointment = styled.section`
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

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    display: block;

    margin-bottom: 16px;
    padding-bottom: 16px;

    font-size: 20px;
    line-height: 26px;

    color: #999591;
    border-bottom: 1px solid #3e3b47;
  }

  > p {
    color: #999591;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    display: flex;
    align-items: center;

    margin-left: auto;

    width: 70px;

    color: #f4ede8;

    svg {
      margin-right: 8px;

      color: #ff9000;
    }
  }

  div {
    flex: 1;
    display: flex;
    align-items: center;

    margin-left: 24px;

    padding: 16px 24px;
    border-radius: 10px;

    background: #3e3b47;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;

      object-fit: cover;
    }

    strong {
      margin-left: 24px;

      font-size: 20px;

      color: #fff;
    }
  }
`;

export const Calendar = styled.aside`
  width: 380px;

  .DayPicker {
    border-radius: 10px;
    background: #28262e;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    margin: 16px;
    border-spacing: 8px;
    border-collapse: separate;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    border-radius: 10px;

    color: #fff;
    background: #3e3b47;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    border-radius: 10px;

    color: #232129 !important;
    background: #ff9000 !important;
  }
`;
