import { Container } from "./styles"
import { Logo } from "../../components/Logo"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export function Signup() {
  return (
    <Container>
      <section>
        <Logo />
      </section>
      <section>
        <form action="">
          <h1>Crie sua conta</h1>
          <label htmlFor="nome">Seu nome</label>
          <Input
            id="nome"
            name="nome"
            placeholder="Exemplo: Maria da Silva"
            type="text"
          />
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            name="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
          />
          <label htmlFor="senha">Senha</label>
          <Input
            id="senha"
            name="senha"
            type="password"
            placeholder="No mínimo 6 caracteres"
          />
          <Button title="Entrar" type="submit" />
          <a href="/login">Já tenho uma conta</a>
        </form>
      </section>
    </Container>
  )
}
