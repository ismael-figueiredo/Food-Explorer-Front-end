import { Container } from "./styles"
import { MobileHeader } from "../../components/MobileHeader"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Carousel } from "../../components/Carousel"
import { Loader } from "../../components/Loader"
import MobileMacarons from "../../assets/macarons.png"
import Macarons from "../../assets/macarons2.png"
import { SidebarMenu } from "../../components/SidebarMenu"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { api } from "../../service/api"

export function Home() {
  const Dishes = []
  const { user, isAdmin } = useAuth()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [search, setSearsh] = useState("")
  const [dishes, setDishes] = useState([])
  const [removeloading, setRevomeloading] = useState(false)

  const mealsDishes = dishes.filter((dish) => dish.category === "meals")
  const dessertsDishes = dishes.filter((dish) => dish.category === "desserts")
  const drinksDishes = dishes.filter((dish) => dish.category === "drinks")

  useEffect(() => {
     setRevomeloading(false)
    const timer = setTimeout(() => {
      async function fetchDishes() {
        try {
          const response = await api.get(`/dish?search=${search}`)
          setDishes(response.data.dishes)
          setRevomeloading(true) 
        } catch (error) {
          console.error("Falha ao buscar os pratos:", error)
         
        }
      }
      fetchDishes()
    }, 500) 
    return () => clearTimeout(timer)
  }, [search]) 
  return (
    <Container>
      <SidebarMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        isAdmin={isAdmin}
        onSearch={setSearsh}
      />
      <MobileHeader onOpenMenu={() => setMenuIsOpen(true)} isAdmin={isAdmin} />
      <Header isAdmin={isAdmin} onSearch={setSearsh} />

      <main data-menu-is-open={menuIsOpen}>
        <section className="Banner">
          <img
            className="MobileMacarons"
            src={MobileMacarons}
            alt="Foto de vários macarons flutuando"
          />
          <img
            className="Macarons"
            src={Macarons}
            alt="Foto de vários macarons flutuando"
          />
          <div>
            <div>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </div>
        </section>

        {removeloading ? (
          <>
            {mealsDishes.length > 0 && (
              <Carousel Category="Refeições" Dishes={mealsDishes} />
            )}
            {dessertsDishes.length > 0 && (
              <Carousel Category="Sobremesas" Dishes={dessertsDishes} />
            )}
            {drinksDishes.length > 0 && (
              <Carousel Category="Bebidas" Dishes={drinksDishes} />
            )}
          </>
        ) : (
          <Loader />
        )}
      </main>

      <Footer />
    </Container>
  )
}
