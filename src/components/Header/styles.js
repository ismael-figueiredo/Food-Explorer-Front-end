import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.header`
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 70rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  .content {
    width: 70rem;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 6.5rem;
    gap: 2rem;

    > div {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: end;

      div {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 8px;
        width:12.3rem;
        & h1 {
          font-size: 1.5rem;
          font-weight: 700;
        }
        > img {
          height: 1.5rem;
        }
      }
      > span {
        display: block;
        text-align: end;
        color: ${({ theme }) => theme.COLORS.CAKE_100};
        line-height: 160%;
        font-size: 0.75rem;
      }
    }

    > button:nth-last-child(2) {
      max-width: 13.5rem;
      min-width: 10rem;
      &:focus {
        outline: none;
      }
    }

    > button:nth-last-child(1) {
      background-color: transparent;
      border: none;
      width: 2rem;
      height: 2rem;
      margin-right: 2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`
