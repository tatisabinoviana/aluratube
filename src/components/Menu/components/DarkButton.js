import React from 'react';
import styled from 'styled-components';
import LightImage from './light.png';

const StyledDarkButton = styled.div`
  svg {
    /* z-index: -1; */
  }
  .svg-circulo {
    position: fixed;
  }
  span {
    position: fixed;

    /* left: 12%; */
    /* right: 56%; */
    /* top: 19.23%; */
    /* bottom: 19.23%; */

    /* font-family: 'Helvetica'; */
    /* font-style: normal; */
    /* font-weight: 700; */
    /* font-size: 16px; */
    /* line-height: 18px; */
  }
  .testet {
    /* height: 400px; */
    /* width: 100%; */
    /* height: 230px; */
    background-image: url('light.png');
    /* position: absolute;
    left: 58%;
    right: 10%;
    top: 19.23%;
    bottom: 19.23%;

    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;

    color: #ffffff; */
  }

  /* display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase};
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;

  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase};
    width: 40px;
    height: 40px;

    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
    
  } */
`;

export default function DarkButton() {
  const [lightMode, setLightMode] = React.useState(true);
  return (
    <StyledDarkButton>
      <button
        onClick={() => {
          console.log(lightMode);
          setLightMode(!lightMode);
        }}
      >
        {lightMode ? <BotaoLight /> : <BotaoDark />}
      </button>
    </StyledDarkButton>
  );
}

function BotaoDark() {
  return (
    <>
      <span>🌙</span>
      <svg
        className="svg-circulo"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#FAFAFA" />
      </svg>
      <div>
        <svg
          width="50"
          height="26"
          viewBox="0 0 50 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="50" height="26" rx="13" fill="#333333" />
        </svg>
      </div>
    </>
  );
}

function BotaoLight() {
  return (
    <div>
      <svg
        className="svg-circulo"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#FAFAFA" />
      </svg>
      <span>☀️</span>

      <div>
        <svg
          width="50"
          height="26"
          viewBox="0 0 50 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="50" height="26" rx="13" fill="#333333" />
        </svg>
      </div>
    </div>
  );
}
