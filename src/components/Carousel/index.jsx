import { useRef } from "react"
import {
  Container,
  CarouselControls,
  CarouselButton,
  CategoryTitle,
  MainDishes,
} from "./styles"
import { DishCard } from "../DishCard"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

export function Carousel({ Category, Dishes }) {
  const dishesRef = useRef(null)

  const scroll = (direction) => {
    if (direction === "left") {
      dishesRef.current.scrollBy({ left: -332, behavior: "smooth" })
    } else {
      dishesRef.current.scrollBy({ left: 332, behavior: "smooth" })
    }
  }

  return (
    <Container>
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
            image={dish.image}
            price={dish.price}
            description={dish.description}
            isAdmin={false}
          />
        ))}
      </MainDishes>
    </Container>
  )
}
