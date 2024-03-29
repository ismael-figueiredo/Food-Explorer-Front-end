import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"
import GlobalStyle from "./styles/global"
import { Routes } from "./Routes"
import { AuthProvider } from "./hooks/auth"
import { OrdersProvider } from "./hooks/orders"
import { SearchProvider } from "./hooks/search"
import { AlertProvider } from "./hooks/alert"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <AlertProvider>
          <OrdersProvider>
            <SearchProvider>
              <Routes />
            </SearchProvider>
          </OrdersProvider>
        </AlertProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
