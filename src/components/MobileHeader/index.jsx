import { Container } from "./styles"
import { LuMenu } from "react-icons/lu"
import { MobileReceiptButton } from "../MobileReceiptButton"
import Logo from "../../assets/logo.png"

export function MobileHeader({ isAdmin = false, onOpenMenu, ...rest }) {
  return (
    <Container>
      <LuMenu size="2rem" onClick={onOpenMenu} />
      <div>
        <img src={Logo} alt="Logotipo food explorer" />
        <h1>food explorer</h1>
        {isAdmin && <span>admin</span>}
      </div>
      {isAdmin && <div></div>}

      {!isAdmin && <MobileReceiptButton rating={6} />}
    </Container>
  )
}
