import { Container } from "./styles"
import { MobileHeader } from "../../components/MobileHeader"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Carousel } from "../../components/Carousel"
import DishImage from "../../assets/Mask group-1.png"
import DessertImage from "../../assets/Mask group-4.png"
import DrinkImage from "../../assets/Mask group-11.png"
import MobileMacarons from "../../assets/macarons.png"
import Macarons from "../../assets/macarons2.png"
import { SidebarMenu } from "../../components/SidebarMenu"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

const meals = [
  {
    name: "Torrada Parma",
    description:
      "Presunto de parma e rúcula em um pão com fermentação natural.",
    image: DishImage,
    price: "55,29",
  },
  {
    name: "Pasta Carbonara",
    description: "Pasta fresca com molho carbonara tradicional.",
    image: DishImage,
    price: "65,00",
  },
  {
    name: "Salada Caesar",
    description:
      "Salada Caesar com frango grelhado, croutons e queijo parmesão.",
    image: DishImage,
    price: "40,50",
  },
  {
    name: "Hambúrguer Artesanal",
    description:
      "Hambúrguer de carne bovina, queijo cheddar, alface, tomate e molho especial.",
    image: DishImage,
    price: "50,00",
  },
  {
    name: "Pizza Margherita",
    description:
      "Pizza Margherita com molho de tomate, mozzarella de búfala e manjericão fresco.",
    image: DishImage,
    price: "75,90",
  },
]

const desserts = [
  {
    name: "Cheesecake",
    description: "Cheesecake cremoso com cobertura de morango.",
    image: DessertImage,
    price: "30,00",
  },
  {
    name: "Tiramisu",
    description: "Clássico tiramisu italiano com mascarpone e café.",
    image: DessertImage,
    price: "35,00",
  },
  {
    name: "Brownie",
    description: "Brownie de chocolate intenso com nozes.",
    image: DessertImage,
    price: "20,00",
  },
  {
    name: "Pudim de Leite",
    description: "Pudim de leite condensado caramelizado.",
    image: DessertImage,
    price: "25,00",
  },
  {
    name: "Sorvete Artesanal",
    description: "Sorvete artesanal de baunilha com calda de chocolate.",
    image: DessertImage,
    price: "15,00",
  },
]

const drinks = [
  {
    name: "Caipirinha",
    description: "Caipirinha de limão clássica com cachaça.",
    image: DrinkImage,
    price: "22,00",
  },
  {
    name: "Mojito",
    description: "Mojito refrescante com rum, hortelã e limão.",
    image: DrinkImage,
    price: "24,00",
  },
  {
    name: "Suco de Laranja",
    description: "Suco de laranja natural espremido na hora.",
    image: DrinkImage,
    price: "10,00",
  },
  {
    name: "Água de Coco",
    description: "Água de coco natural e refrescante.",
    image: DrinkImage,
    price: "8,00",
  },
  {
    name: "Café Expresso",
    description: "Café expresso forte e aromático.",
    image: DrinkImage,
    price: "5,00",
  },
]

export function Home({ isAdmin = false }) {
  const { user } = useAuth()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <Container>
      <SidebarMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        isAdmin={isAdmin}
      />
      <MobileHeader onOpenMenu={() => setMenuIsOpen(true)} isAdmin={isAdmin} />
      <Header isAdmin={isAdmin} />

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

        <Carousel Category="Refeições" Dishes={meals} isAdmin={isAdmin} />

        <Carousel Category="Sobremesas" Dishes={desserts} isAdmin={isAdmin} />

        <Carousel Category="Bebidas" Dishes={drinks} isAdmin={isAdmin} />
      </main>

      <Footer />
    </Container>
  )
}
