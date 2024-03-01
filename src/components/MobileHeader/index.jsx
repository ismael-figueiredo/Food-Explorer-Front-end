import { Container } from "./styles"
import { LuMenu } from "react-icons/lu"
import { MobileReceiptButton } from "../MobileReceiptButton"
import { useNavigate } from "react-router-dom"

import Logo from "../../assets/logo.png"

export function MobileHeader({ isAdmin = false, onOpenMenu, ...rest }) {
  const navigate = useNavigate()
 
  return (
    <Container>
      <LuMenu size="2rem" onClick={onOpenMenu} />
      <div onClick={() => navigate("/")}>
        <img src={Logo} alt="Logotipo food explorer" />
        <h1>food explorer</h1>
        {isAdmin && <span>admin</span>}
      </div>
      {isAdmin && <div></div>}

      {!isAdmin && <MobileReceiptButton rating={6} />}
    </Container>
  )
}
