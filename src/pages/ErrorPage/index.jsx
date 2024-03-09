import { useNavigate } from "react-router-dom"
import { Container } from "./styles"
import Logo from "../../assets/logo.png"
import { Button } from "../../components/Button"

export function ErrorPage() {
  const navigate = useNavigate()
  return (
    <Container>
      <img src={Logo} />
      <h2>Desculpe, pagina não encontrada!</h2>
      <Button title={"Voltar"} onClick={() => navigate("/")} />
    </Container>
  )
}
