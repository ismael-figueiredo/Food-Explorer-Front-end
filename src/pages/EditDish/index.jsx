import {
  BackButton,
  Container,
  Form,
  ImgInput,
  Select,
  IngredientsContent,
  PriceInput,
  DescriptionArea,
} from "./styles"
import { MobileHeader } from "../../components/MobileHeader"
import { IngredientItem } from "../../components/IngredientItem"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useNavigate } from "react-router-dom"
import { LuUpload, LuChevronLeft, LuChevronDown } from "react-icons/lu"

export function EditDish() {
  const navigate = useNavigate()
  return (
    <Container>
      <Header />
      <MobileHeader />
      <Form>
        <BackButton onClick={() => navigate("/")}>
          <LuChevronLeft />
          Voltar
        </BackButton>
        <h1>Editar Prato</h1>
        <div className="line1">
          <section title="Adicionar imagem" className="img">
            <label>Imagem do prato</label>
            <ImgInput>
              <span>
                <LuUpload />
                Selecione imagem
              </span>
              <input type="file" />
            </ImgInput>
          </section>

          <section title="Nome do item" className="name">
            <label>Nome</label>
            <Input type={"text"} placeholder={"Ex.: Salada Ceasar"} />
          </section>

          <section title="categoria do item" className="Select">
            <label>Categoria</label>
            <Select>
              <option value="Refeição">Refeição</option>
              <option value="Refeição">Sobremesa</option>
              <option value="Refeição">Bebibas</option>
            </Select>
            <LuChevronDown />
          </section>
        </div>
        <div className="line2">
          <section title="Ingredientes do item">
            <label>Ingredients</label>
            <IngredientsContent>
              <IngredientItem value={"Pão de alho"} />
              <IngredientItem isNew placeholder="Adicionar" />
            </IngredientsContent>
          </section>
          <section title="Preço do item">
            <label>Preço</label>
            <PriceInput>
              <span>R$</span>
              <input placeholder="00,00" type="number" min="0" />
            </PriceInput>
          </section>
        </div>
        <div className="line3">
          <section title="Descrição do prato">
            <label>Descrição</label>
            <DescriptionArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
          </section>
        </div>
        <div className="line4">
          <div/>
          <Button title={"Exluir prato"} disabled />
          <Button title={"Salvar alteraçoes"} disabled />
        </div>
      </Form>

      <Footer />
    </Container>
  )
}
