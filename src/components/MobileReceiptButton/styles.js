import styled from "styled-components"

export const Container = styled.button`
  position: relative;
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: none;
  width: 2rem;
  height: 2rem;

  span {
    width: 1.25rem;
    height: 1.25rem;
    font-size: 0.87rem;
    display: flex;
    position: absolute;
    align-items: center;
    top: -0.5rem;
    right: -0.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  }
`
