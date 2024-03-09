import { createContext, useContext, useState } from "react"

const AlertContext = createContext()

export function useAlert() {
  return useContext(AlertContext)
}

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ visible: false, message: "", type: "" })

  const showAlert = (message, type = "success") => {
    setAlert({ visible: true, message, type })
    
  }

  const hideAlert = () => {
    setAlert({ ...alert, visible: false })
  }

  return (
    <AlertContext.Provider value={{ alert, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  )
}
