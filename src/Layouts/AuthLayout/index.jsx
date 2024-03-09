import { Outlet } from "react-router-dom"
import { Alert } from "../../components/Alert"

export function AuthLayout() {
  return (
    <div>
      <Alert />
      <Outlet />
    </div>
  )
}
