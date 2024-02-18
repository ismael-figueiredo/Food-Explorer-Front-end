import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  min-width: 420px;
  user-select: none;
  cursor: pointer;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    main {
      min-width: 74rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`
export const MainDishes = styled.section`
  min-width: 420px;
  max-width: 70rem;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    position: relative;
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
`
export const CategoryTitle = styled.div`
  margin-top: 3.88rem;
  margin-left: 1.1rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 140%;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
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
`
export const CarouselControls = styled.div`
  display: none;
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 18rem;
    margin-top: -30rem;
    min-width: 72rem;
    width: 80%;
    transform: translateY(12.5rem);
    z-index: 2;
    pointer-events: none;

    &::before,
    &::after {
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

    &::before {
      left: 0;
      transform: rotateY(180deg);
    }

    &::after {
      right: 0;
    }
  }
`
export const CarouselButton = styled.button`
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
`
