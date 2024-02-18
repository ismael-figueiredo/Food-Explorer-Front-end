import { Container } from "./styles"
import { MobileHeader } from "../../components/MobileHeader"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Carousel } from "../../components/Carousel"
import DishImage from "../../assets/Mask group-1.png"
import MobileMacarons from "../../assets/macarons.png"
import Macarons from "../../assets/macarons2.png"

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
    name: "Cheesecake de Morango",
    description: "Cheesecake cremoso com cobertura de morango.",
    image: DishImage,
    price: "30,00",
  },
  {
    name: "Tiramisu",
    description: "Clássico tiramisu italiano com mascarpone e café.",
    image: DishImage,
    price: "35,00",
  },
  {
    name: "Brownie de Chocolate",
    description: "Brownie de chocolate intenso com nozes.",
    image: DishImage,
    price: "20,00",
  },
  {
    name: "Pudim de Leite",
    description: "Pudim de leite condensado caramelizado.",
    image: DishImage,
    price: "25,00",
  },
  {
    name: "Sorvete Artesanal",
    description: "Sorvete artesanal de baunilha com calda de chocolate.",
    image: DishImage,
    price: "15,00",
  },
]

const drinks = [
  {
    name: "Caipirinha",
    description: "Caipirinha de limão clássica com cachaça.",
    image: DishImage,
    price: "22,00",
  },
  {
    name: "Mojito",
    description: "Mojito refrescante com rum, hortelã e limão.",
    image: DishImage,
    price: "24,00",
  },
  {
    name: "Suco de Laranja",
    description: "Suco de laranja natural espremido na hora.",
    image: DishImage,
    price: "10,00",
  },
  {
    name: "Água de Coco",
    description: "Água de coco natural e refrescante.",
    image: DishImage,
    price: "8,00",
  },
  {
    name: "Café Expresso",
    description: "Café expresso forte e aromático.",
    image: DishImage,
    price: "5,00",
  },
]

export function Home() {
  return (
    <Container>
      <MobileHeader />
      <Header />
      <main>
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

        <Carousel Category="Refeições" Dishes={meals} />

        <Carousel Category="Sobremesas" Dishes={desserts} />

        <Carousel Category="Bebidas" Dishes={drinks} />
      </main>
      <Footer />
    </Container>
  )
}
