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
        <a
          href="https://www.linkedin.com/in/ismael-figueiredo-09689a211/"
          target="blank"
        >
          <span> © 2024 - Ismael Figueiredo</span>
        </a>
      </main>
    </Container>
  )
}
