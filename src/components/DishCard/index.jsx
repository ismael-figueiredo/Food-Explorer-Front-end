import { useState } from "react"
import { Container } from "./styles"
import DishImage from "../../assets/Mask group-1.png"
import { LuPlus, LuMinus, LuChevronRight } from "react-icons/lu"
import { FaRegHeart, FaHeart } from "react-icons/fa"
import { PiPencilSimple } from "react-icons/pi"

const Dish = {
  name: "Torrada Parma",
  image: DishImage,
  price: "55,29",
  description: "Presunto de parma e rúcula em um pão com fermentação natural.",
}

export function DishCard({ isAdmin = true }) {
  const [fav, setFav] = useState(false)
  const [amount, setAmount] = useState(0)

  const toggleFav = () => {
    setFav(!fav)
  }
  const increaseAmount = () => {
    setAmount((prevAmount) => prevAmount + 1)
  }

  const decreaseAmount = () => {
    setAmount((prevAmount) => Math.max(prevAmount - 1, 0))
  }
  return (
    <Container>
      {!isAdmin && (
        <button className="FavDish" onClick={toggleFav}>
          {fav ? <FaHeart size="1.5rem" /> : <FaRegHeart size="1.5rem" />}
        </button>
      )}
      {isAdmin && (
        <button className="FavDish">
          <PiPencilSimple size="1.5rem" />
        </button>
      )}
      <img src={Dish.image} alt={`Imagem do item ${Dish.name}`} />
      <span className="DishName">
        {Dish.name}
        <LuChevronRight />
      </span>
      <span className="DishPrice">{`R$ ${Dish.price}`}</span>
      <div className="AmountDish">
        {!isAdmin && (
          <button onClick={decreaseAmount}>
            <LuMinus size="1.5rem" />
          </button>
        )}
        {!isAdmin && <span>{amount}</span>}
        {!isAdmin && (
          <button onClick={increaseAmount}>
            <LuPlus size="1.5rem" />
          </button>
        )}
      </div>
      {!isAdmin && <button>incluir</button>}
    </Container>
  )
}
