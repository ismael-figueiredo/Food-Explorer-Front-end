import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-width: 420px;
  height: 4.8rem;

  padding: 0 1.74rem;
  margin-top: 1.5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  font-family: "Roboto", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;

  > div {
    display: flex;
    gap: 0.4rem;
    > img {
      height: 1.25rem;
    }
    > h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
      font-size: 1rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0 7.7rem;

    min-width: 74rem;
    font: 0.85rem;

    > div {
      > img {
        height: 1.87rem;
      }
      > h2 {
        font-size: 1.5rem;
      }
    }
  }
`
