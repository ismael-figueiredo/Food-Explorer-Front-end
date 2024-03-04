import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Dish } from "../pages/Dish"
import { DefaultLayout } from "../Layouts/DefaultLayout"
export function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dish/:id" element={<Dish />} />
      </Route>
    </Routes>
  )
}
