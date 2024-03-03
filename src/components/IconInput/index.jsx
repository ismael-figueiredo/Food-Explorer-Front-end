import { Container } from "./styles"

export function IconInput({ icon: Icon, ...rest }) {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    
      <Container onSubmit={handleSubmit}>
        {Icon && <Icon size="1.5rem" />}
        <input {...rest} />
      </Container>
   
  )
}
