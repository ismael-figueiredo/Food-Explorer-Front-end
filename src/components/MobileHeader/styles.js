import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.header`
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
  height: 7.12rem;
  min-width: 420px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  align-items: end;
  padding-bottom: 1.75rem;
  padding-left: 1.75rem;
  padding-right: 1.75rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > svg {
    cursor: pointer;
  }
  div:nth-last-child(2) {
    display: flex;
    align-items: center;
    gap: 8px;
    > span {
      color: ${({ theme }) => theme.COLORS.CAKE_100};
      font-size: 0.75rem;
    }
  }
  div{
    cursor: pointer;
  }
  h1 {
    font-family: Roboto "sans-serif";
    font-size: 1.32rem;
    font-weight: 700;
  }
  img {
    height: 1.5rem;
  }
`
