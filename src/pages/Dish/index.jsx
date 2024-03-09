import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { useOrders } from "../../hooks/orders"
import { api } from "../../service/api"
import { PiReceiptBold } from "react-icons/pi"
import { LuPlus, LuMinus, LuChevronLeft } from "react-icons/lu"
import { Loader } from "../../components/Loader"
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

export function Dish() {
  const [data, setData] = useState({})
  const [amount, setAmount] = useState(1) 
  const [isLoading, setIsLoading] = useState(true)
  const { isAdmin } = useAuth()
  const { addOrder } = useOrders()

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dish/${params.id}`)
        setData(response.data)
      } catch (error) {
        console.error("Erro ao buscar dados do prato:", error)
      } finally {
        setIsLoading(false) 
      }
    }

    fetchDish()
  }, [params.id])

  const includeInOrder = () => {
    if (data && data.id) {
      const orderDetails = {
        id: data.id,
        name: data.name,
        amount,
        price: data.price,
        image: `${api.defaults.baseURL}/files/${data.image}`,
        description: data.description,
      }
     

      addOrder(orderDetails)
    }
  }

  const increaseAmount = () => setAmount((prevAmount) => prevAmount + 1)

  const decreaseAmount = () =>
    setAmount((prevAmount) => Math.max(prevAmount - 1, 1))

  const totalPrice = () => {
    const price = parseFloat(data.price?.replace(",", ".") || 0)
    return (price * amount).toFixed(2)
  }
 if (isLoading) {
   return <Loader /> 
 }
  return (
    <Container>
      <Main>
        <BackButton onClick={() => navigate("/")}>
          <LuChevronLeft size="2rem" />
          Voltar
        </BackButton>
        <img
          src={`${api.defaults.baseURL}/files/${data.image}`}
          alt={`Imagem do prato ${data.name}`}
        />
        <section>
          <DishTitle>{data.name}</DishTitle>
          <DishDescription>{data.description}</DishDescription>
          <IngredientContent>
            {data.ingredients &&
              data.ingredients.map((ingredient, index) => (
                <Ingredient key={index}>{ingredient}</Ingredient>
              ))}
          </IngredientContent>

          {!isAdmin && (
            <Controls>
              <button onClick={decreaseAmount}>
                <LuMinus size="1.7rem" />
              </button>
              <span>{`${amount}`.padStart(2, "0")}</span>
              <button onClick={increaseAmount}>
                <LuPlus size="1.7rem" />
              </button>
              <button onClick={includeInOrder}>
                <PiReceiptBold size="1.5rem" /> Pedir • R$ {totalPrice()}
              </button>
              <button onClick={includeInOrder}>
                incluir • R$ {totalPrice()}
              </button>
            </Controls>
          )}

          {isAdmin && (
            <button onClick={() => navigate(`/edit/${data.id}`)}>
              Editar prato
            </button>
          )}
        </section>
      </Main>
    </Container>
  )
}
