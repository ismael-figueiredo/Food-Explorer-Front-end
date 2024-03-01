import { useNavigate } from "react-router-dom"
import { Container } from "./styles"
import { IconInput } from "../IconInput"
import { Button } from "../Button"
import { ReceiptButton } from "../ReceiptButton"
import { LuSearch, LuLogOut } from "react-icons/lu"
import { useAuth } from "../../hooks/auth"
import Logo from "../../assets/logo.png"

export function Header({ isAdmin = false, ...rest }) {
  const navigate = useNavigate()
  const { signOut } = useAuth()
  return (
    <Container>
      <div className="content">
        <div>
          <div onClick={() => navigate("/")}>
            <img src={Logo} alt="Logotipo food explorer" />
            <h1>food explorer</h1>
          </div>
          {isAdmin && <span>admin</span>}
        </div>
        <IconInput
          icon={LuSearch}
          placeholder="Busque por pratos ou ingredientes"
        />

        {isAdmin && (
          <Button title={"Novo Prato"} onClick={() => navigate("/new")} />
        )}
        {!isAdmin && <ReceiptButton rating={6} />}
        <button onClick={signOut}>
          <LuLogOut size="2rem" />
        </button>
      </div>
    </Container>
  )
}
