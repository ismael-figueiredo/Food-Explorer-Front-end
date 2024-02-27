import styled from "styled-components"

export const Container = styled.div``

export const Form = styled.form`
  padding: 0.7rem 2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  > h1 {
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .Select {
    position: relative;
    svg {
      width: 1.5rem;
      height: 1.5rem;
      position: absolute;
      top: 2rem;
      right: 1.6rem;
      pointer-events: none;
      transition: transform 0.3s ease;
    }
    &:hover {
      svg {
        filter: brightness(0.9);
      }
    }
  }
`
export const Select = styled.select`
  border: none;
  -webkit-appearance: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  padding: 0 1rem;
  font-size: 0.87rem;
`

export const ImgInput = styled.div`
  position: relative;
  display: flex;
  height: 3rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  cursor: pointer;
  align-items: center;

  padding: 0.75rem 2rem;
  border-radius: 0.5rem;

  > input {
    opacity: 0;
    padding-top: 1rem;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: "Poppins", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    cursor: pointer;
    > svg {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`
export const BackButton = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 140%;

  > svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`
