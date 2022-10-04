import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router"

//Componente principal el cual estara en el main.jsx
export const CalendarApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
