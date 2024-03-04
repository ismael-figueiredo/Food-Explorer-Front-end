import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  object-fit: cover;
  overflow-y: auto;

  transform: translateX(0);
  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open="false"] {
    transform: translateX(-100%);
  }

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    height: 7rem;
    align-items: center;

    width: 100%;
    padding: 4rem 1.75rem 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    button {
      display: flex;
      align-items: center;
      justify-content: center;

      border: none;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background: none;
      width: 2rem;
      height: 2rem;
      svg {
        height: 2rem;
        width: 2rem;
      }
    }
    h1 {
      font-size: 1.32rem;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
    }
  }
  > main {
    height: 100%;
    padding: 2.25rem 1.75rem;
    > button {
      width: 100%;
      height: 3.3rem;
      padding-left: 0.6rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background: none;

      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

      text-align: left;
      font-family: "Poppins", sans-serif;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 300;
      line-height: 140%;
    }
    form {
      margin-bottom: 3rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    &[data-menu-is-open="true"] {
      display: none;
    }
  }
`
