import {
  Container,
  BackButton,
  Main,
  DishTitle,
  DishDescription,
  Ingredient,
  IngredientContent,
  Controls,
} from "./styles"
import { PiReceiptBold } from "react-icons/pi"
import { LuPlus, LuMinus, LuChevronLeft } from "react-icons/lu"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { MobileHeader } from "../../components/MobileHeader"
import Dishimage from "../../assets/Mask group-1.png"

export function Dishes() {
  const dish = {
    name: "Salada Ravanelo",
    description:
      "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial..",
    ingredients: [
      "alface",
      "pepino",
      "pão naan",
      "cebola",
      "rabanete",
      "tomate",
    ],
  }
  return (
    <Container>
      <MobileHeader />
      <Header />
      <Main>
        <BackButton>
          <LuChevronLeft size="2rem" />
          voltar
        </BackButton>
        <img src={Dishimage} alt={`imagem do prato ${"teste"}`} />
        <section>
          <DishTitle>{dish.name}</DishTitle>
          <DishDescription>{dish.description}</DishDescription>
          <IngredientContent>
            {dish.ingredients &&
              dish.ingredients.map((ingredient) => (
                <Ingredient key={ingredient}>{ingredient}</Ingredient>
              ))}
          </IngredientContent>
          <Controls>
            <button>
              <LuMinus size="1.7rem" />
            </button>
            <span>01</span>
            <button>
              <LuPlus size="1.7rem" />
            </button>
            <button>
              <PiReceiptBold size="1.5rem" /> Pedir • R$ 25,00
            </button>
            <button>incluir • R$ 25,00</button>
          </Controls>
        </section>
      </Main>
      <Footer />
    </Container>
  )
}
