import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  min-width: 420px;
  .Banner {
    min-width: 23.5rem;
    display: flex;
    justify-content: left;
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
      margin-top:3.88rem ;
      margin-left: 1.1rem;
      font-family: "Poppins", sans-serif;
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 140%;
    }
  .MainDishes {
    display: flex;
    overflow-x:auto;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    .Banner {
      margin: 10.25rem 2rem 0 2rem;
      min-width: 70rem;
      max-width: 170rem;
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
  }
`
