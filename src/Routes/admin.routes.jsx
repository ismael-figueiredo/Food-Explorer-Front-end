import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Dishe } from "../pages/Dish"
import { NewDish } from "../pages/NewDish"
import { EditDish } from "../pages/EditDish"

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish:id" element={<Dishe />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/edit:id" element={<EditDish />} />
    </Routes>
  )
}
