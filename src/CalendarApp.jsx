import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router"
import { store } from "./store"

//Componente principal el cual estara en el main.jsx
export const CalendarApp = () => {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  )
}
