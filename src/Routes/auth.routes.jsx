import { Routes, Route } from "react-router-dom"
import { Signin } from "../pages/Signin"
import { Signup } from "../pages/Signup"
import { ErrorPage } from "../pages/ErrorPage"

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
