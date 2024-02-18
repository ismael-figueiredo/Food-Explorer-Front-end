import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  padding: 1.5rem;
  margin: 1.5rem 1rem;

  min-width: 13.12rem;
  height: 18.25rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  .FavDish {
    position: absolute;
    top: 1rem;
    right: -3.2rem;
    background-color: transparent;
    &:hover {
      background-color: transparent;
    }
  }
  img {
    width: 5.5rem;
    height: 5.5rem;
  }

  .DishName {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-family: "Poppins", sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5rem;
  }

  p {
    max-width: 16rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 0.875rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 160%;
    display: none;
  }
  .DishPrice {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }
  .AmountDish {
    display: flex;
    align-items: center;
    gap: 0.88rem;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;

    > button {
      width: 1.5rem;
      height: 1.5rem;
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      &:hover {
        background-color: transparent;
        transform: scale(1.1);
        transition: all 0.2s;
      }
    }
  }
  button {
    width: 10.125rem;
    height: 2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

    border: none;
    border-radius: 5px;

    text-align: center;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
      transition: all 0.2s;
    }
  }
  .DishFooter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 0.94rem;
    min-width: 19rem;
    height: 28.8rem;
    img {
      width: 11rem;
      height: 11rem;
      transition: transform 0.3s ease;
      &:hover {
        transform: scale(1.03);
        cursor: pointer;
      }
    }
    .DishName {
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
    }
    .DishPrice {
      font-size: 2rem;

      font-weight: 400;
      line-height: 160%;
    }
    .DishFooter {
      flex-direction: row;
      gap: 1rem;
      button {
        width: 5.75rem;
        height: 3rem;
      }
    }
    .AmountDish {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 6.25rem;

      span {
        font-size: 1.25rem;

        font-weight: 700;
        padding-bottom: 0.4rem;
      }
    }
    p {
      display: block;
    }
  }
`
