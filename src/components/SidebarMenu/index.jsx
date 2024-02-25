import { Container } from "./styles"
import { Footer } from "../Footer"
import { IconInput } from "../IconInput"
import { LuX, LuSearch } from "react-icons/lu"

export function SidebarMenu({
  isAdmin = true,
  isAuthenticated = true,
  menuIsOpen = true,
  onCloseMenu,
}) {
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

        {isAuthenticated && isAdmin && <button>Editar prato</button>}

        {isAuthenticated && <button>Sair</button>}

        {!isAuthenticated && <button>Entrar</button>}
      </main>
      <Footer />
    </Container>
  )
}
