import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Dishe } from "../pages/Dish"
import { NewDish } from "../pages/NewDish"
import { EditDish } from "../pages/EditDish"
export function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish:id" element={<Dishe />} />
     
    </Routes>
  )
}
