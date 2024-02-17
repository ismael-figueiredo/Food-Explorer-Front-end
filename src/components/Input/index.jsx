import { Container } from "./styles"

export function Input({ icon: Icon, ...rest }) {
  return (
    <>
      {Icon && <Icon size="2rem" />}
      <Container {...rest} />
    </>
  )
}
