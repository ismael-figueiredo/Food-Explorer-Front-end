import { Container } from "./styles"
import { IconInput } from "../IconInput"
import { Button } from "../Button"
import { ReceiptButton } from "../ReceiptButton"
import { LuSearch, LuLogOut } from "react-icons/lu"
import Logo from "../../assets/logo.png"

export function Header({ isAdmin =false , ...rest }) {
  return (
    <Container>
      <div>
        <div>
          <img src={Logo} alt="Logotipo food explorer" />
          <h1>food explorer</h1>
        </div>
        {isAdmin&&<span>admin</span>}
      </div>
      <IconInput
        icon={LuSearch}
        placeholder="Busque por pratos ou ingredientes"
      />

      {isAdmin && <Button title={"Novo Prato"}/>}
      {!isAdmin && <ReceiptButton rating={6} />}
      <button>
        <LuLogOut size="2rem" />
      </button>
    </Container>
  )
}
