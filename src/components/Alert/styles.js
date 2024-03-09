import styled, { css, keyframes } from "styled-components"

const slideIn = keyframes`
  from {
    right: -25rem; 
  }
  to {
    right: .5rem; 
  }
`

const slideOut = keyframes`
  from {
    right: .5rem; 
  }
  to {
    right: -25rem; 
  }
`

export const Container = styled.div`
  position: fixed;
  z-index: 4;
  top: 5rem;
  right: 0rem;
  width: 20rem;
  height: 5rem;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_300};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.5s forwards;
  ${({ $type }) => {
    switch ($type) {
      case "danger":
        return css`
          border-left: 5px solid red;
        `
      case "success":
        return css`
          border-left: 5px solid green;
        `
      case "warning":
        return css`
          border-left: 5px solid orange;
        `
      default:
        return null
    }
  }}

  ${({ $visible }) =>
    !$visible &&
    css`
      animation: ${slideOut} 0.5s forwards;
    `}
`

export const Message = styled.span`
  flex-grow: 1;
  margin-left: 0.5rem;
`

export const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  background-color: ${({ $type }) =>
    $type === "danger" ? "red" : $type === "success" ? "green" : "orange"};
  width: ${({ $progress }) => `${$progress}%`};
  transition: width 0.2s ease-in-out;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`
