import styled from "styled-components"

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
        transform: scale(1.1);
        transition: all 0.2s;
      }
    }
  }
  > button {
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
`
