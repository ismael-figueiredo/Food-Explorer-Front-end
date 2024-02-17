import { Container } from "./styles"
import { MobileHeader } from "../../components/MobileHeader"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import MobileMacarons from "../../assets/macarons.png"
import Macarons from "../../assets/macarons2.png"

export function Home() {
  return (
    <Container>
      <MobileHeader />
      <Header />
      <section className="Banner">
        <img
          className="MobileMacarons"
          src={MobileMacarons}
          alt="Foto de vaios macarons flutuando"
        />
        <img
          className="Macarons"
          src={Macarons}
          alt="Foto de vaios macarons flutuando"
        />
        <div>
          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com  ingredientes selecionados.</p>
          </div>
        </div>
      </section>
      <Footer />
    </Container>
  )
}
