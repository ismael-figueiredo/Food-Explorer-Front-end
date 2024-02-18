import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  min-width: 420px;

  .Banner {
    min-width: 23.5rem;
    display: flex;
    border-radius: 8px;

    margin: 2.75rem 1.25rem 0 2.25rem;
    background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: left;
      width: 100%;
      height: 100%;
      margin-left: -1.5rem;

      > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h2 {
          padding-top: 2.25rem;
          font-size: 1.125rem;
          font-weight: 600;
          font-size: 1.125rem;
          line-height: 140%;
        }

        p {
          padding-top: 0.2rem;
          max-width: 200px;
          font-family: "Poppins", sans-serif;
          padding-right: 0.5rem;
          font-size: 0.75rem;
          font-weight: 400;
          line-height: 1.05rem;
          line-height: 140%;
        }
      }
    }
  }

  .MobileMacarons {
    margin-top: -1.8rem;
    margin-left: -1.5rem;
    width: 11.9rem;
    height: 9.3 rem;
  }
  .Macarons {
    display: none;
  }
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

    .Banner {
      margin: 10.25rem 2rem 2rem 2rem;
      min-width: 70rem;
      max-width: 70rem;
      justify-content: left;
      border-radius: 8px;
      > div {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        div {
          h2 {
            padding-top: 5.5rem;
            font-weight: 500;
            font-size: 2.5rem;
            line-height: 3.5rem;
          }
          p {
            font-family: "Roboto", sans-serif;
            max-width: 100%;
            font-size: 1rem;
          }
        }
      }

      .MobileMacarons {
        display: none;
      }
      .Macarons {
        display: block;
        margin-top: -8.25rem;
        margin-left: -3.3rem;
      }
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
