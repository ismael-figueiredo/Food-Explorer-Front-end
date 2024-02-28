import styled from "styled-components"

export const Container = styled.div`
  min-width: 428px;
`

export const Form = styled.form`
  padding: 0.7rem 2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  > h1 {
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    margin-bottom: 2rem;
  }
  .Select {
    position: relative;
    svg {
      width: 1.5rem;
      height: 1.5rem;
      position: absolute;
      top: 3rem;
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

  section {
    label {
      display: block;
      margin-top: 1.5rem;
      margin-bottom: 1rem;
      font-family: "Roboto", sans-serif;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }
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
export const Select = styled.select`
  border: none;

  cursor: pointer;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  padding: 0 1rem;
  font-size: 0.87rem;
`
export const BackButton = styled.button`
  background: none;
  border: none;

  margin-bottom: 2.2rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 140%;

  > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`
export const IngredientsContent = styled.div`
  display: flex;
  padding: 0.5rem;
  gap: 1rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  width: 100%;
  min-height: 3rem;
  border-radius: 0.5rem;
  flex-wrap: wrap;
`
export const PriceInput = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  padding-left: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  border-radius: 0.5rem;
  > span {
    font-family: "Roboto", sans-serif;
    padding-right: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
  > input {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const DescriptionArea = styled.textarea`
  margin-bottom: 1.5rem;
  resize: none;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  height: 11rem;
  width: 100%;
  border: none;
  border-radius: 0.5rem;

  padding: 0.88rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`
