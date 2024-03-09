import { useNavigate } from "react-router-dom"
import { useOrders } from "../../hooks/orders"
import { Container } from "./styles"
import { LuMenu } from "react-icons/lu"
import { MobileReceiptButton } from "../MobileReceiptButton"
import Logo from "../../assets/logo.png"

export function MobileHeader({ isAdmin = false, onOpenMenu, ...rest }) {
  const navigate = useNavigate()
  const { orders } = useOrders()
  
 
  return (
    <Container>
      <LuMenu size="2rem" onClick={onOpenMenu} />
      <div onClick={() => navigate("/")}>
        <img src={Logo} alt="Logotipo food explorer" />
        <h1>food explorer</h1>
        {isAdmin && <span>admin</span>}
      </div>
      {isAdmin && <div></div>}

      {!isAdmin && (
        <MobileReceiptButton
          rating={orders.length}
          onClick={() => navigate("/orders")}
        />
      )}
    </Container>
  )
}
