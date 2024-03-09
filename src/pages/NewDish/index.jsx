import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../service/api"
import { IngredientItem } from "../../components/IngredientItem"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { LuUpload, LuChevronLeft, LuChevronDown } from "react-icons/lu"
import { useAlert } from "../../hooks/alert"
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

export function NewDish() {
  const navigate = useNavigate()
  const {showAlert} = useAlert()

  const [newIngredient, setNewIngredient] = useState("")

  const [name, setName] = useState("")
  const [category, setCategory] = useState("meals")
  const [ingredients, setIngredient] = useState([])
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState()

  function handleSubmit(e) {
    e.preventDefault()
  }
  function handleAddIngredient() {
    setIngredient((prev) => [...prev, newIngredient])
    setNewIngredient("")
  }
  function handleDeleteIngredient(deleted) {
    setIngredient((prev) => prev.filter((ingredient) => ingredient !== deleted))
  }
  function handleDisabledButton() {
    return !category || ingredients.length === 0 || !price || !description
  }
  async function handleCreateDish() {
    const fileUploadForm = new FormData()
    if (image) {
      fileUploadForm.append("image", image)
    }

    fileUploadForm.append("name", name)
    fileUploadForm.append("category", category)
    fileUploadForm.append("ingredients", JSON.stringify(ingredients))
    fileUploadForm.append("price", price)
    fileUploadForm.append("description", description)

    try {
      await api.post("/dish", fileUploadForm, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      showAlert("Prato criado com sucesso","success")
      navigate("/")
    } catch (error) {
      if (error.response) {
        showAlert(error.response.data.message,"danger")
      } else {
        showAlert("Não foi possível cadastrar.","danger")
      }
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <BackButton onClick={() => navigate("/")}>
          <LuChevronLeft />
          Voltar
        </BackButton>
        <h1>Novo Prato</h1>
        <div className="line1">
          <section title="Adicionar imagem" className="img">
            <label>Imagem do prato</label>
            <ImgInput>
              <span>
                <LuUpload />
                Selecione imagem
              </span>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </ImgInput>
          </section>

          <section title="Nome do item" className="name">
            <label>Nome</label>
            <Input
              type={"text"}
              placeholder={"Ex.: Salada Ceasar"}
              onChange={(e) => setName(e.target.value)}
            />
          </section>

          <section title="categoria do item" className="Select">
            <label>Categoria</label>
            <Select onChange={(e) => setCategory(e.target.value)}>
              <option value="meals">Refeição</option>
              <option value="desserts">Sobremesa</option>
              <option value="drinks">Bebibas</option>
            </Select>
            <LuChevronDown />
          </section>
        </div>
        <div className="line2">
          <section title="Ingredientes do item">
            <label>Ingredients</label>
            <IngredientsContent>
              <IngredientItem
                isNew
                placeholder="Adicionar"
                onChange={(e) => setNewIngredient(e.target.value)}
                value={newIngredient}
                onClick={handleAddIngredient}
              />
              {ingredients.map((ingredient, index) => (
                <IngredientItem
                  key={String(index)}
                  value={ingredient}
                  onClick={() => {
                    handleDeleteIngredient(ingredient)
                  }}
                />
              ))}
            </IngredientsContent>
          </section>
          <section title="Preço do item">
            <label>Preço</label>
            <PriceInput>
              <span>R$</span>
              <input
                placeholder="00,00"
                type="number"
                min="0"
                step="0.01"
                onChange={(e) => setPrice(e.target.value)}
              />
            </PriceInput>
          </section>
        </div>
        <div className="line3">
          <section title="Descrição do prato">
            <label>Descrição</label>
            <DescriptionArea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />
          </section>
        </div>
        <div className="line4">
          <div />
          <Button
            title={"Criar prato"}
            disabled={handleDisabledButton()}
            onClick={handleCreateDish}
          />
        </div>
      </Form>
    </Container>
  )
}
