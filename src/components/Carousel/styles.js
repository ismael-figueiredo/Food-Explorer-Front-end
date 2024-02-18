import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  min-width: 420px;

  h3:first-of-type {
    margin-top: 3.88rem;
    margin-left: 1.1rem;
    font-family: "Poppins", sans-serif;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 140%;
  }
  .MainDishes {
    min-width: 420px;
    max-width: 70rem;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
  }
  .carouselControls {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    main {
      min-width: 74rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .MainDishes {
      position: relative;
      display: flex;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }
    h3:first-of-type {
      width: 70rem;
      display: block;
      align-self: start;
      margin-top: 3rem;
      font-family: "Poppins", sans-serif;
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
    }

    .carouselControls {
      display: flex;
      justify-content: space-between;
      position: relative;
      top: 18rem;
      margin-top: -30rem;
      min-width: 70rem;
      width: 80%;
      transform: translateY(12.5rem);
      z-index: 2;
      pointer-events: none;
    }

    .carouselControls::before,
    .carouselControls::after {
      content: "";
      position: absolute;
      top: 0;
      width: 13rem;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(0, 10, 15, 0.01) 0%,
        #000a0f 100%
      );
      pointer-events: none;
      z-index: -1;
    }

    .carouselControls::before {
      left: 0;
      transform: rotateY(180deg);
    }

    .carouselControls::after {
      right: 0;
    }

    .prevButton,
    .nextButton {
      pointer-events: all;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: none;
      width: 2rem;
      height: 30rem;
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
      z-index: 3;
    }
  }
`
