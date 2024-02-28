import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 10.3rem;
  max-width: 100rem;

  background-color: ${({ theme, $isnew }) =>
    $isnew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme, $isnew }) =>
    $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};

  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  border-radius: 0.5rem;
  padding: 0.6rem 1rem;
  gap: 0.5rem;

  > button {
    border: none;
    background: none;
    width: 1rem;
    height: 1rem;

    font-size: 1rem;
    color: ${({ theme, $isnew }) =>
      $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    > svg {
      width: 1rem;
      height: 1rem;
    }
  }

  > input {
    display: flex;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: none;
    background-color: transparent;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
