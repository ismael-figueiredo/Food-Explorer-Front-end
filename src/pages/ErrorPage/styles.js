import styled, { keyframes } from "styled-components"

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;

  text-align: center;

  img {
    width: 10rem;
    height: 10rem;
    animation: ${float} 3s ease-in-out infinite;
  }

  h2 {
    margin: 20px 0;
  }

  button {
    margin-top: 20px;
    max-width: 20rem;
  }
`
