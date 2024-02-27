import { BackButton, Container, Form, ImgInput, Select } from "./styles"
import { MobileHeader } from "../../components/MobileHeader"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { LuUpload, LuChevronLeft, LuChevronDown } from "react-icons/lu"

export function NewDish() {
  return (
    <Container>
      <Header />
      <MobileHeader />
      <Form>
        <BackButton>
          <LuChevronLeft />
          Voltar
        </BackButton>
        <h1>Novo Prato</h1>
        <section title="image">
          <label>Imagem do prato</label>
          <ImgInput>
            <span>
              <LuUpload />
              Selecione imagem
            </span>
            <input type="file" />
          </ImgInput>
        </section>

        <section title="name">
          <label>Nome</label>
          <Input type={"text"} placeholder={"Ex.: Salada Ceasar"} />
        </section>

        <section title="category" className="Select">
          <label>Categoria</label>
          <Select>
            <option value="Refeição">Refeição</option>
            <option value="Refeição">Refeição</option>
          </Select>
          <LuChevronDown />
        </section>
      </Form>

      <Footer />
    </Container>
  )
}
