import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.header`
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 74rem;
  height: 6.5rem;

  padding: 0 auto;
  gap: 2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
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
      min-width: 16rem;
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

  > form {
    max-width: 40rem;
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
`
