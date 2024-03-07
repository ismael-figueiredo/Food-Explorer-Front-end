import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useOrders } from "../../hooks/orders"
import { useAuth } from "../../hooks/auth"
import { Container } from "./styles"
import { LuPlus, LuMinus } from "react-icons/lu"
import { TiChevronRight } from "react-icons/ti"
import { FaRegHeart, FaHeart } from "react-icons/fa"
import { PiPencilSimple } from "react-icons/pi"

export function DishCard({
  name,
  id,
  image,
  price,
  description,
  initialAmount = 1,
  isFavorite = false,
}) {
  const [fav, setFav] = useState(isFavorite)
  const [amount, setAmount] = useState(initialAmount)
  const {isAdmin} = useAuth()
  const [totalPrice, setTotalPrice] = useState(
    parseFloat(price.replace(",", ".")) * initialAmount
  )

  const { addOrder } = useOrders() 

  const includeInOrder = () => {
    const orderDetails = {
      id,
      name,
      amount,
      price: totalPrice, 
    }

    addOrder(orderDetails) 
  }


  useEffect(() => {
    setTotalPrice((parseFloat(price.replace(",", ".")) * amount).toFixed(2))
  }, [amount, price])

  const toggleFav = () => setFav(!fav)

  const increaseAmount = () => setAmount((prevAmount) => prevAmount + 1)

  const decreaseAmount = () =>
    setAmount((prevAmount) => Math.max(prevAmount - 1, 1))

  const navigate = useNavigate()

  return (
    <Container>
      {!isAdmin && (
        <button className="FavDish" onClick={toggleFav}>
          {fav ? <FaHeart size="1.5rem" /> : <FaRegHeart size="1.5rem" />}
        </button>
      )}
      {isAdmin && (
        <button className="FavDish" onClick={() => navigate(`/edit/${id}`)}>
          <PiPencilSimple size="1.5rem" />
        </button>
      )}
      <img src={image} alt={`Imagem do prato ${name}`} />
      <span className="DishName" onClick={() => navigate(`/dish/${id}`)}>
        {name}
        <TiChevronRight />
      </span>
      <p>{description}</p>
      <span className="DishPrice">{`R$ ${totalPrice
        .toString()
        .replace(".", ",")}`}</span>

      <div className="DishFooter">
        {!isAdmin && (
          <div className="AmountDish">
            <button onClick={decreaseAmount}>
              <LuMinus size="1.5rem" />
            </button>
            <span>{`${amount}`.padStart(2, "0")}</span>
            <button onClick={increaseAmount}>
              <LuPlus size="1.5rem" />
            </button>
          </div>
        )}
        {!isAdmin && <button onClick={includeInOrder}>Incluir</button>}
      </div>
    </Container>
  )
}
