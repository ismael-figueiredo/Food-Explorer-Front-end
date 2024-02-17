import { Container } from "./styles"
import { LuMenu } from "react-icons/lu"
import { MobileReceiptButton } from "../MobileReceiptButton"
import Logo from "../../assets/logo.png"

export function MobileHeader({ isadmin=true, ...rest }) {
  return (
    <Container>
      <LuMenu size="2rem" />
      <div>
        <img src={Logo} alt="Logotipo food explorer" />
        <h1>food explorer</h1>
        {!isadmin && <span>admin</span>}
      </div>
      {!isadmin && <div></div>}

      {isadmin && <MobileReceiptButton rating={6} />}
    </Container>
  )
}
