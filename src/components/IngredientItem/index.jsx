import { Container } from "./styles"
import { LuX, LuPlus } from "react-icons/lu"

export function IngredientItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container $isnew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button onClick={onClick} type="button">
        {isNew ? <LuPlus /> : <LuX />}
      </button>
    </Container>
  )
}
