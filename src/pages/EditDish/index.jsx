import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../service/api"
import { useAuth } from "../../hooks/auth"
import { MobileHeader } from "../../components/MobileHeader"
import { IngredientItem } from "../../components/IngredientItem"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { LuUpload, LuChevronLeft, LuChevronDown } from "react-icons/lu"
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

export function EditDish() {
  const [data, setData] = useState({})
  const [name, setName] = useState("")
  const [category, setCategory] = useState("meals")
  const [ingredients, setIngredient] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState()

  const navigate = useNavigate()
  const parms = useParams()

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
    return !name || ingredients.length === 0 || !price || !description
  }
  async function handleDeleteDish() {
    const confirm = window.confirm("Deseja realmente deletar este prato?")

    if (confirm) {
      try {
        await api.delete(`/dish/${parms.id}`)
        alert("Prato deletado com sucesso!")
        navigate("/")
      } catch (error) {
        console.error("Erro ao deletar o prato:", error)
        alert("Não foi possível deletar o prato.")
      }
    }
  }

  async function handleUpdateDish() {
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
      await api.put(`/dish/${parms.id}`, fileUploadForm, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      alert("Prato atualizado com sucesso")
      navigate("/")
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar.")
      }
    }
  }

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dish/${parms.id}`)
        const dish = response.data
        setData(dish)
        setName(dish.name)
        setCategory(dish.category)
        setIngredient(dish.ingredients)
        setPrice(dish.price)
        setDescription(dish.description)
      } catch (error) {
        console.error("Erro ao buscar o prato:", error)
      }
    }
    fetchDish()
  }, [parms.id])

  return (
    <Container>
      <Header />
      <MobileHeader />
      <Form onSubmit={handleSubmit}>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </section>

          <section title="categoria do item" className="Select">
            <label>Categoria</label>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
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
              {ingredients.map((ingredient, index) => (
                <IngredientItem
                  key={index}
                  value={ingredient}
                  onClick={() => {
                    handleDeleteIngredient(ingredient)
                  }}
                />
              ))}
              <IngredientItem
                isNew
                placeholder="Adicionar"
                onChange={(e) => setNewIngredient(e.target.value)}
                value={newIngredient}
                onClick={handleAddIngredient}
              />
            </IngredientsContent>
          </section>
          <section title="Preço do item">
            <label>Preço</label>
            <PriceInput>
              <span>R$</span>
              <input
                placeholder="00,00"
                min="0"
                value={price}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </section>
        </div>
        <div className="line4">
          <div />
          <Button title={"Exluir prato"} onClick={handleDeleteDish} />
          <Button
            title={"Salvar alteraçoes"}
            disabled={handleDisabledButton()}
            onClick={handleUpdateDish}
          />
        </div>
      </Form>

      <Footer />
    </Container>
  )
}
