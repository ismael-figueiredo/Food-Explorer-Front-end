import { Container } from "./styles"
import { Logo } from "../../components/Logo"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export function Signin() {
  return (
    <Container>
      <section>
        <Logo />
      </section>
      <section>
        <h1>Faça Login</h1>
        <form>
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
         
          <a href="/signup">Criar uma conta</a>
        
        </form>
      </section>
    </Container>
  )
}
