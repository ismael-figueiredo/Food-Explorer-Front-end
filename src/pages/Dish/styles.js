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
