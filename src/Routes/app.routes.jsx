import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Dishe } from "../pages/Dish"
import { Signin } from "../pages/Signin"
import { Signup } from "../pages/Signup"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish" element={<Dishe />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}
