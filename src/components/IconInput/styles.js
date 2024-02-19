import styled from "styled-components"

export const Container = styled.form`
  width: 100%;
  height: 3rem;
  display: flex;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  border-radius: 8px;

  > input {
    display: flex;

    height: 56px;
    min-width: 75%;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
  > svg {
    margin-right: 0.88rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`
