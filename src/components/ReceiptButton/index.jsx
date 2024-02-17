import { Container } from "./styles"
import { PiReceiptBold } from "react-icons/pi"

export function ReceiptButton({rating=0,...rest}) {
  return (
    <Container {...rest}>
      <PiReceiptBold size="1.5rem" />
     {`Pedidos (${rating})`}
    </Container>
  )
}
