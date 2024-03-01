import { Container } from "./styles"
import { Footer } from "../Footer"
import { IconInput } from "../IconInput"
import { LuX, LuSearch } from "react-icons/lu"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
 
export function SidebarMenu({
  
  isAdmin = true,
  isAuthenticated = true,
  menuIsOpen = true,
  onCloseMenu,
}) {
  const navigate = useNavigate()
  const { signOut } = useAuth()
  return (
    <Container data-menu-is-open={menuIsOpen}>
      <header>
        <button onClick={onCloseMenu}>
          <LuX />
        </button>
        <h1>Menu</h1>
      </header>
      <main>
        <IconInput
          icon={LuSearch}
          placeholder={"Busque por pratos ou ingredientes"}
        />

        {isAuthenticated && isAdmin && <button onClick={() => navigate("/new")}>Novo prato</button>}

        {isAuthenticated && <button onClick={signOut}>Sair</button>}

        {!isAuthenticated && <button>Entrar</button>}
      </main>
      <Footer />
    </Container>
  )
}
