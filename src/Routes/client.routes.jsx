import { Routes, Route } from "react-router-dom"
import { Orders } from "../pages/Orders"
import { Home } from "../pages/Home"
import { Dish } from "../pages/Dish"
import { DefaultLayout } from "../Layouts/DefaultLayout"
import { ErrorPage } from "../pages/ErrorPage"

export function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dish/:id" element={<Dish />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}
