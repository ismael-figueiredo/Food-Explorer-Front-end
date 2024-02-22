import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 448px;
`
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 19.75rem;

  img {
    margin-top: 1rem;
    width: 16.5rem;
    height: 16.5rem;
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
  gap: 2rem;
`
export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 19.75rem;
` 
