import {
  Container,
  BackButton,
  Main,
  DishTitle,
  DishDescription,
  Ingredient,
  IngredientContent,
} from "./styles"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { MobileHeader } from "../../components/MobileHeader"
import { LuChevronLeft } from "react-icons/lu"
import Dishimage from "../../assets/Mask group-1.png"

export function Dishes() {
  const dish = {
    name: "Salada Ravanelo",
    description:
      "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
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
        <DishTitle>{dish.name}</DishTitle>
        <DishDescription>{dish.description}</DishDescription>
        <IngredientContent>
          {dish.ingredients &&
            dish.ingredients.map((ingredient) => (
              <Ingredient key={ingredient}>{ingredient}</Ingredient>
            ))}
        </IngredientContent>
      </Main>
      <Footer />
    </Container>
  )
}
