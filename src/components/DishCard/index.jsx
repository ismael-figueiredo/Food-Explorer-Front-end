import { useState, useEffect } from "react"
import { Container } from "./styles" // Certifique-se de que o caminho está correto
import { LuPlus, LuMinus } from "react-icons/lu"
import { TiChevronRight } from "react-icons/ti"
import { FaRegHeart, FaHeart } from "react-icons/fa"
import { PiPencilSimple } from "react-icons/pi"

export function DishCard({
  name,
  image,
  price,
  description,
  isAdmin = false,
  initialAmount = 1, 
  isFavorite = false, 
}) {
  const [fav, setFav] = useState(isFavorite) 
  const [amount, setAmount] = useState(initialAmount) 
  const [totalPrice, setTotalPrice] = useState(
    parseFloat(price.replace(",", ".")) * initialAmount
  )

  useEffect(() => {
    setTotalPrice((parseFloat(price.replace(",", ".")) * amount).toFixed(2))
  }, [amount, price])

  const toggleFav = () => setFav(!fav)

  const increaseAmount = () => setAmount((prevAmount) => prevAmount + 1)

  const decreaseAmount = () =>
    setAmount((prevAmount) => Math.max(prevAmount - 1, 1))

  return (
    <Container>
      {!isAdmin && (
        <button className="FavDish" onClick={toggleFav}>
          {fav ? <FaHeart size="1.5rem" /> : <FaRegHeart size="1.5rem" />}
        </button>
      )}
      {isAdmin && (
        <button className="EditDish">
          <PiPencilSimple size="1.5rem" />
        </button>
      )}
      <img src={image} alt={`Imagem do prato ${name}`} />
      <span className="DishName">
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
        {!isAdmin && <button>Incluir</button>}
      </div>
    </Container>
  )
}
