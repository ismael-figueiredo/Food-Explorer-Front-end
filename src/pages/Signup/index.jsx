import { Container } from "./styles"
import { Logo } from "../../components/Logo"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { useState } from "react"
import { api } from "../../service/api"
import { useNavigate } from "react-router-dom"

export function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPasswoerd] = useState("")

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleSignup() {
    if (!name || !email || !password) {
      return alert("preencha todos os campos.")
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso.")
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        }else{
          alert("Não foi possivel cadastrar")
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
          <Button title="Entrar" onClick={handleSignup} />
          <a href="/">Já tenho uma conta</a>
        </form>
      </section>
    </Container>
  )
}
