import { Container } from "./styles"

export function IconInput({ icon: Icon, ...rest }) {
  return (
    
      <Container>
        {Icon && <Icon size="1.5rem" />}
        <input {...rest} />
      </Container>
   
  )
}
