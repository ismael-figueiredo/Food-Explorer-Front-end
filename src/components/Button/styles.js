import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  height: 3rem;
  border: none;
  border-radius: 5px;
  font-size: 0.875rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    &:hover {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
      cursor: no-drop;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
  &:focus {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
