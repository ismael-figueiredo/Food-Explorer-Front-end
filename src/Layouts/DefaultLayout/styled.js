import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-width: 428px;
  min-height: calc(100vh - 7rem);
  height: 100%;
  margin-top: 7rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  > header {
    position: fixed;
    top: 0;
    z-index: 2;
  }
`
