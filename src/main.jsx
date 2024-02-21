import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"
import GlobalStyle from "./styles/global"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { Home } from "./pages/Home"
import { Dishes } from "./pages/Dish"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Dishes />
    </ThemeProvider>
  </React.StrictMode>
)
