import { Container } from "./styles";
import DisabledLogo from "../../assets/DisabledLogo.png"


export function Footer(){
  return (
    <Container>
      <div>
        <img src={DisabledLogo} />
        <h2>food Explorer</h2>
      </div>
      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  )
}