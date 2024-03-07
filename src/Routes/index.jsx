import { BrowserRouter } from "react-router-dom"
import { useAuth } from "../hooks/auth"
import { AdminRoutes } from "./admin.routes"
import { AuthRoutes } from "./auth.routes"
import { ClientRoutes } from "./client.routes"
import { ROLE } from "../utils/role"

export function Routes() {
  const { user } = useAuth()

  function AccessRoutes() {
    switch (user.role) {
      case ROLE.ADMIN:
        return <AdminRoutes />
      default:
        return <ClientRoutes />
    }
  }
  return (
    <BrowserRouter>{user ? <AccessRoutes /> : <AuthRoutes />}</BrowserRouter>
  )
}
