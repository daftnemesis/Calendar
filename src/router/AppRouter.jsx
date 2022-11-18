import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth"
import { CalendarPage } from "../calendar"
import { useAuthStore } from "../hooks"

//Componente de las rutas principales
export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore()

  // const authStatus = 'not-authenticated' // Variable temporal para realizar rutas condicionales

  useEffect(() => {
    checkAuthToken()
  }, [])
  

  if(status === 'checking'){
    return (
      <h3>Cargando....</h3>
    )
  }

  return (
    <Routes>
      {
        (status === 'not-authenticated')
          ? (
            <>
              <Route path='/auth/*' element={ <LoginPage /> } /> //Ruta raiz para entrar en el login cuando no estas autenticado
              <Route path='/*' element={ <Navigate to={'/auth/login'} /> } /> //Ruta para casos que lo de arriba no funcione
            </>
          )
          :(

            <>
              <Route path='/' element={ <CalendarPage />} />// Ruta para entrar cuando ya estas autenticado
              <Route path='/*' element={ <Navigate to={'/'} /> } /> //Ruta para casos que lo de arriba no funcione
            </>

          ) 
          
      }

    </Routes>
  )
}
