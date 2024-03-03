import { Container } from "./style"
import LoaderImg from "../../assets/loader.svg"

export function Loader() {
  return (
    <Container>
      <img src={LoaderImg} alt="loader" />
      <p>Carregando...</p>
    </Container>
  )
}
