import { createGlobalStyle } from "styled-components"
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints"

export default createGlobalStyle`
*{
  padding:0;
  margin: 0;
  box-sizing: border-box;
}
:root{
  font-size: 16px;
  @media (min-width:${DEVICE_BREAKPOINTS.LG}){
    font-size: 16px;

  }
}
body{
  background-color:${({ theme }) => theme.COLORS.DARK_400} ;
  color: ${({ theme }) => theme.COLORS.LIGHT_100} ;
  -webkit-font-smoothing: antialiased;
}
body, input,select, textarea{
font-family: "Roboto", sans-serif;
font-size: 1rem;

outline: none;
}
button {
   font-family: "Poppins", sans-serif;
}
a {
  text-decoration: none;
}
button, a {
  cursor: pointer;
  transition: filter 0.2s;
}
button:hover , a:hover{
filter: brightness(0.9)
}
`
