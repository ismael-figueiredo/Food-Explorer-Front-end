import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  min-width: 420px;
  padding: 3.5rem;

  div {
    padding-top: 9.7rem;
    padding-bottom: 4.56rem;
  }

  section:nth-child(2) {
    h1 {
      display: none;
    }
  }

  label {
    display: block;
    font-weight: 400;
    padding-bottom: 0.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  input {
    margin-bottom: 2rem;
  }

  a {
    display: block;
    font-family: "Poppins", sans-serif;
    padding-top: 2rem;
    font-weight: 500;
    font-size: 0.875rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    &:focus {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "logo input";

    height: 100vh;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;

    section:first-child {
      grid-area: logo;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    div {
      padding: 0;
    }

    section:nth-child(2) {
      grid-area: input;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      padding: 4rem;
      height: 33.8rem;
      width: 29.75rem;
      border-radius: 1rem;
      margin-left: auto;
      margin-right: 3.25rem;

      h1 {
        display: block;
        text-align: center;
        font-size: 2rem;
        font-weight: 500;
        font-family: "Poppins", sans-serif;
        padding-bottom: 2rem;
      }
    }
  }
`
