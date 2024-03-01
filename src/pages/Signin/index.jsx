import { Container } from "./styles"
import { Logo } from "../../components/Logo"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"

export function Signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const { signIn } = useAuth()
  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleSignIn() {
    signIn({ email, password })
  }
  return (
    <Container>
      <section>
        <Logo />
      </section>
      <section>
        <h1>Faça Login</h1>
        <form onSubmit={handleSubmit}>
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title="Entrar" onClick={handleSignIn} />

          <a href="/signup">Criar uma conta</a>
        </form>
      </section>
    </Container>
  )
}
