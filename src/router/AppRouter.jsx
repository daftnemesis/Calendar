import { Navigate, Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth"
import { CalendarPage } from "../calendar"

//Componente de las rutas principales
export const AppRouter = () => {

  const authStatus = 'not-authenticate' // Variable temporal para realizar rutas condicionales

  return (
    <Routes>
      {
        (authStatus === 'not-authenticated')
          ? <Route path='/auth/*' element={ <LoginPage /> } /> //Ruta raiz para entrar en el login cuando no estas autenticado
          : <Route path='/*' element={ <CalendarPage />} />// Ruta para entrar cuando ya estas autenticado
      }

      <Route path='/*' element={ <Navigate to={'/auth/login'} /> } /> //Ruta para casos que lo de arriba no funcione
    </Routes>
  )
}
