import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    bottom: calc(100% + 12px);

    /* Hack para centralizar um elemento em position absolute */
    left: 50%;
    transform: translateX(-50%);

    width: 160px;
    padding: 8px;
    border-radius: 4px;
    visibility: hidden;

    opacity: 0;
    color: #312e38;
    font-size: 14px;
    font-weight: 500;
    background: #ff9000;
    transition: opacity 0.4s;

    /* Flecha do tooltip */
    &::before {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);

      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;

      content: '';
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
