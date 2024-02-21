import { Container, BackButton, Main ,DishTitle ,DishDescription} from "./styles"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { MobileHeader } from "../../components/MobileHeader"
import { LuChevronLeft } from "react-icons/lu"
import Dishimage from "../../assets/Mask group-1.png"

export function Dishes() {
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
        <DishTitle>Salada Ravanello</DishTitle>
        <DishDescription>
          Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
        </DishDescription>
      </Main>
      <Footer />
    </Container>
  )
}
