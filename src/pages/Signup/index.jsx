import { useNavigate } from "react-router-dom"
import { useAlert } from "../../hooks/alert"
import { useState } from "react"
import { api } from "../../service/api"
import { Container } from "./styles"
import { Logo } from "../../components/Logo"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPasswoerd] = useState("")

  const navigate = useNavigate()
  const { showAlert } = useAlert()

  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleSignup() {
    if (!name || !email || !password) {
      return showAlert("Preencha todos os campos!", "warning")
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        showAlert("Usuário cadastrado com sucesso.")
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          showAlert(error.response.data.message, "warning")
        } else {
          showAlert("Não foi possivel cadastrar", "danger")
        }
      })
  }
  return (
    <Container>
      <section>
        <Logo />
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <h1>Crie sua conta</h1>
          <label htmlFor="nome">Seu nome</label>
          <Input
            id="nome"
            name="nome"
            placeholder="Exemplo: Maria da Silva"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            name="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="senha">Senha</label>
          <Input
            id="senha"
            name="senha"
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => setPasswoerd(e.target.value)}
          />
          <Button title="Criar conta" onClick={handleSignup} />
          <a href="/">Já tenho uma conta</a>
        </form>
      </section>
    </Container>
  )
}
