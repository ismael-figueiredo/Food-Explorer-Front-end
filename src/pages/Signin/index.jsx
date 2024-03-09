import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { useAlert } from "../../hooks/alert"
import { Container } from "./styles"
import { Logo } from "../../components/Logo"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export function Signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn } = useAuth()
  const { showAlert } = useAlert()

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  const handleSignIn = async () => {
    const result = await signIn({ email, password })
    showAlert(result.message, result.success ? "success" : "warning")
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="senha">Senha</label>
          <Input
            id="senha"
            name="senha"
            type="password"
            placeholder="No mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title="Entrar" onClick={() => handleSignIn()} />
        </form>
        <a href="/signup">Criar uma conta</a>
      </section>
    </Container>
  )
}
