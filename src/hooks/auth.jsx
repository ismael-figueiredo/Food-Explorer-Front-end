import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../service/api"

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/session", { email, password })
      const { user, token } = response.data
      localStorage.setItem("@FoodExplorer:user", JSON.stringify(user))
      localStorage.setItem("@FoodExplorer:token", token)

      api.defaults.headers.authorization = `Bearer ${token}`
      setData({ user, token })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar.")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@FoodExplorer:token")
    localStorage.removeItem("@FoodExplorer:user")
    setData({})
  }

  useEffect(() => {
    const token = localStorage.getItem("@FoodExplorer:token")
    const user = localStorage.getItem("@FoodExplorer:user")

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`
      setData({ token, user: JSON.parse(user) })
    }
  }, [])
  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
