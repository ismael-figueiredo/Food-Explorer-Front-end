import { useRef, useState } from "react"
import { api } from "../../service/api"
import { DishCard } from "../DishCard"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import {
  Container,
  CarouselControls,
  CarouselButton,
  CategoryTitle,
  MainDishes,
} from "./styles"

export function Carousel({ Category, Dishes }) {
  const dishesRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startScrollLeft, setStartScrollLeft] = useState(0)
  const [velocity, setVelocity] = useState(0)

  const onDragStart = (e) => {
    setIsDragging(true)
    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX
    setStartX(clientX)
    setStartScrollLeft(dishesRef.current.scrollLeft)
    dishesRef.current.style.scrollBehavior = "auto"
  }

  const onDragMove = (e) => {
    if (!isDragging) return
    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX
    const walk = clientX - startX
    dishesRef.current.scrollLeft = startScrollLeft - walk
  }

  const onDragEnd = () => {
    setIsDragging(false)
    applyInertia()
  }

  const applyInertia = () => {
    let inertiaVelocity = velocity
    const deceleration = 0.95
    const inertia = () => {
      if (Math.abs(inertiaVelocity) > 0.5) {
        dishesRef.current.scrollLeft += inertiaVelocity
        inertiaVelocity *= deceleration
        requestAnimationFrame(inertia)
      } else {
        dishesRef.current.style.scrollBehavior = "smooth"
      }
    }

    inertia()
  }

  const scroll = (direction) => {
    setIsDragging(false)
    const scrollAmount = 332
    dishesRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <Container
      onMouseDown={onDragStart}
      onMouseLeave={onDragEnd}
      onMouseUp={onDragEnd}
      onMouseMove={onDragMove}
      onTouchStart={onDragStart}
      onTouchEnd={onDragEnd}
      onTouchMove={onDragMove}
    >
      <CategoryTitle>{Category}</CategoryTitle>
      <CarouselControls>
        <CarouselButton onClick={() => scroll("left")}>
          <PiCaretLeftBold size={"2.5rem"} />
        </CarouselButton>
        <CarouselButton onClick={() => scroll("right")}>
          <PiCaretRightBold size={"2.5rem"} />
        </CarouselButton>
      </CarouselControls>
      <MainDishes ref={dishesRef}>
        {Dishes.map((dish, index) => (
          <DishCard
            key={index}
            name={dish.name}
            image={`${api.defaults.baseURL}/files/${dish.image}`}
            price={dish.price}
            id={dish.id}
            description={dish.description}
          />
        ))}
      </MainDishes>
    </Container>
  )
}
