import { useRef } from "react"
import { Container } from "./styles"
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
      <main>
        <div>
          <h3>{Category}</h3>
        </div>
        <div className="carouselControls">
          <button className="prevButton" onClick={() => scroll("left")}>
            <PiCaretLeftBold size={"2.5rem"} />
          </button>
          <button className="nextButton" onClick={() => scroll("right")}>
            <PiCaretRightBold size={"2.5rem"} />
          </button>
        </div>
        <section className="MainDishes" ref={dishesRef}>
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
        </section>
      </main>
    </Container>
  )
}
