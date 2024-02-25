import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 448px;
  height: 100vh;
`
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    > button {
      margin-top: 3rem;
      border-radius: 3.5px;
      width: 100%;
      height: 3rem;
      border: none;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    }
  }

  min-width: 19.75rem;

  img {
    margin-top: 1rem;
    width: 16.5rem;
    height: 16.5rem;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    max-width: 70rem;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    section {
      width: 45rem;
      align-items: start;
      padding-left: 3rem;
      > button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 8.2rem;

        padding: 1.5rem;
        margin-top: 3rem;
        height: 3rem;

        font-size: 0.875rem;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
      }
    }
    img {
      margin-top: 1rem;
      width: 24rem;
      height: 24rem;
    }
  }
`
export const BackButton = styled.button`
  display: flex;
  align-self: start;
  align-items: center;
  justify-content: center;

  margin-top: 2.29rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: transparent;
  border: none;

  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 140%;
`
export const DishTitle = styled.h2`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  padding-top: 1rem;

  font-family: "Poppins", sans-serif;
  font-size: 1.69rem;
  font-weight: 500;
  line-height: 140%;
  
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 2.5rem;
  }
`
export const DishDescription = styled.p`
  max-width: 19.7rem;
  padding-top: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 1rem;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  line-height: 140%;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    min-width: 43rem;
    text-align: left;
    font-size: 1.5rem;
  }
`
export const Ingredient = styled.span`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  padding: 0.25rem 0.5rem;
  margin-bottom: -0.5rem;
  border-radius: 5px;
  display: block;

  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
`
export const IngredientContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding-top: 1.5rem;
  justify-content: center;
  max-width: 19.75rem;

  font-size: 1.5rem;
  gap: 2rem;
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-wrap: nowrap;
    max-width: 43rem;
  }
`
export const Controls = styled.div`
  padding-top: 3.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 19.75rem;
  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 160%;
  }
  button:nth-child(4) {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.3rem;
    width: 11.7rem;
    height: 2.3rem;
    border-radius: 3.5px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

    font-size: 0.6rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }
  button:nth-child(5) {
    display: none;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 2rem;
    max-width: 43rem;
    button:nth-child(4) {
      display: none;
    }
    button:nth-child(5) {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0 1.5rem;
      height: 3rem;
      border-radius: 3.5px;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

      font-size: 0.875rem;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
    }
    
  }
`
