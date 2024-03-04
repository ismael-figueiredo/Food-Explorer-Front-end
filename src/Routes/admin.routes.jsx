import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Dish } from "../pages/Dish"
import { NewDish } from "../pages/NewDish"
import { EditDish } from "../pages/EditDish"
import { DefaultLayout } from "../Layouts/DefaultLayout"

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dish/:id" element={<Dish />} />
        <Route path="/new" element={<NewDish />} />
        <Route path="/edit/:id" element={<EditDish />} />
      </Route>
    </Routes>
  )
}
