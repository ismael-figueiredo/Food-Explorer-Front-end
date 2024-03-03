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
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../service/api"
import { useAuth } from "../../hooks/auth"

export function Dish() {
  const [data, setData] = useState({})
  const navigate = useNavigate()
  const parms = useParams()
  const { isAdmin } = useAuth()
  useEffect(() => {
    async function fechDish() {
      const response = await api.get(`/dish/${parms.id}`)
      setData(response.data)
    }
    fechDish()
    console.log(data)
  }, [])

  return (
    <Container>
      <MobileHeader />
      <Header />
      <Main>
        <BackButton onClick={() => navigate("/")}>
          <LuChevronLeft size="2rem" />
          voltar
        </BackButton>
        <img
          src={`${api.defaults.baseURL}/files/${data.image}`}
          alt={`imagem do prato ${"teste"}`}
        />
        <section>
          <DishTitle>{data.name}</DishTitle>
          <DishDescription>{data.description}</DishDescription>
          <IngredientContent>
            {data.ingredients &&
              data.ingredients.length > 0 &&
              data.ingredients.map((ingredient) => (
                <Ingredient key={ingredient}>{ingredient}</Ingredient>
              ))}
          </IngredientContent>

          {!isAdmin && (
            <Controls>
              <button>
                <LuMinus size="1.7rem" />
              </button>
              <span>01</span>
              <button>
                <LuPlus size="1.7rem" />
              </button>
              <button>
                <PiReceiptBold size="1.5rem" /> Pedir • R$ {data.price}
              </button>
              <button>incluir • R$ {data.price}</button>
            </Controls>
          )}

          {isAdmin && (
            <button onClick={() => navigate("/edit")}>Editar prato</button>
          )}
        </section>
      </Main>
      <Footer />
    </Container>
  )
}
