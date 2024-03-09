import { useSearch } from "../../hooks/search"
import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { Outlet } from "react-router-dom"
import { MobileHeader } from "../../components/MobileHeader"
import { SidebarMenu } from "../../components/SidebarMenu"
import { Container } from "./styled"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Alert } from "../../components/Alert"


export function DefaultLayout() {
  const { isAdmin } = useAuth()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { setSearch } = useSearch()
  return (
    <Container>
      <Alert />
      <Header />
      <MobileHeader />
      <SidebarMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        isAdmin={isAdmin}
        onSearch={setSearch}
      />
      <MobileHeader onOpenMenu={() => setMenuIsOpen(true)} isAdmin={isAdmin} />
      <Header isAdmin={isAdmin} onSearch={setSearch} />
      <Outlet />
      <Footer />
    </Container>
  )
}
