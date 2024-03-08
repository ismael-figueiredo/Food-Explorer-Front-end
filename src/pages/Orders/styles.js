import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding-left: 2.2rem;
  padding-top: 3.5rem;
  h1 {
    padding-left: 1rem;
    padding-bottom: 1.8rem;
    font-family: Poppins;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.8rem;
    
    > h3 {
      font-family: "Poppins", sans-serif;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 500;
      line-height: 160%;
    }
    button{
      max-width: 13.5rem;
    }
  }
`
export const OrderContainer = styled.div`
  height: 6.5rem;
  display: flex;
  align-items: center;

  padding: 1rem;
  gap: 0.8rem;
  > div {
    > div {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
  }
  h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
  }
  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", sans-serif;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }
  > img {
    max-width: 100%;
    max-height: 100%;
  }
  a{
    
  }
  button {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.TOMATO_400};
    border: none;
  }
  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: .87rem;
    display: none;
  }
`
