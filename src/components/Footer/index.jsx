import { Container } from "./styles"
import DisabledLogo from "../../assets/DisabledLogo.png"

export function Footer() {
 
  return (
    <Container>
      <main>
        <div>
          <img src={DisabledLogo} />
          <h2>food Explorer</h2>
        </div>
        <span>© 2024 - Ismael Figueiredo</span>
      </main>
    </Container>
  )
}
