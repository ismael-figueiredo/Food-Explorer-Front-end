import { Container } from "./styles"
import { PiReceiptBold } from "react-icons/pi"

export function MobileReceiptButton({rating=0,...rest}) {
  return (
    <Container {...rest}>
      <PiReceiptBold size="2rem" />
      <div>
        <span>{rating}</span>
      </div>
    </Container>
  )
}
