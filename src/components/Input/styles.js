import styled from "styled-components"

export const Container = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0.75rem 0.88rem;

  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  border: none;
  border-radius: 8px;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
