import { Container } from "./styles"
import { IconInput } from "../IconInput"
import { LuX, LuSearch } from "react-icons/lu"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

export function SidebarMenu({ menuIsOpen = false, onCloseMenu, onSearch }) {
  const navigate = useNavigate()

  const { signOut, user, isAdmin } = useAuth()

  function handleSignOut() {
    navigate("/")
    signOut()
  }
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
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => onSearch(e.target.value)}
        />

        {user && isAdmin && (
          <button onClick={() => navigate("/new")}>Novo prato</button>
        )}

        {user && <button onClick={handleSignOut}>Sair</button>}

        {!user && <button>Entrar</button>}
      </main>
    
    </Container>
  )
}
