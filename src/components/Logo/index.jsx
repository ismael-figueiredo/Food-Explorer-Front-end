import { Container } from "./styles"
import logo from "../../assets/logo.png"

export function Logo(){
  return(
    <Container>
      <img src={logo} alt="Logotipo Food explorer" />
      <h1>food explorer</h1>
    </Container>
  )
}