//Pagina principal para el login y el register ya que estaran en la misma pagina

import { useEffect } from "react"
import Swal from "sweetalert2"
import { useAuthStore, useForm } from "../../hooks"

const loginFormFields = {
  loginEmail: '',
  loginPassword: ''
}

const registerFormFields = {
  registerName: '',
  registerEmail: '',
  registerPassword: '',
  registerPassword2: ''
}

export const LoginPage = () => {

  const { startLogin, errorMessage, startRegister } = useAuthStore()

  const { loginEmail, loginPassword, onInputChange:onLoginInputChange } = useForm(loginFormFields)
  const { registerName, registerEmail, registerPassword, registerPassword2, onInputChange:onRegisterInputChange } = useForm(registerFormFields)



  const loginSubmit = (event) => {
    event.preventDefault()

    startLogin({ email:loginEmail, password:loginPassword})

  }

  const registerSubmit = ( event ) => {
    event.preventDefault()
    if(registerPassword !== registerPassword2) {
      Swal.fire('Error en registro', 'Constrasenas no son iguales', 'error')
      return;
    }

    startRegister({name: registerName, email: registerEmail, password: registerPassword})

  }

  useEffect(() => {

    if(errorMessage !== undefined) {
      Swal.fire('Error en la autenticacion', errorMessage, 'error')
    }
    
  }, [errorMessage])
  

  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <div className="flex w-full justify-center">
        <div className="flex flex-col w-2/6 items-center border border-gray-200 rounded-xl shadow-xl ">
          <h3 className="font-bold text-2xl tracking-normal my-10">Login</h3>
          <form action="" className="flex flex-col px-5 w-5/6 lg:w-4/6" onSubmit={loginSubmit} >
            <input 
              type="text"
              placeholder="Email"
              className="my-1 px-2 border border-gray-200 rounded-lg focus:outline-blue-500 text-base py-1"
              name="loginEmail"
              value={loginEmail}
              onChange={onLoginInputChange}
            />
            <input 
              type="password" 
              placeholder="Password"  
              className="my-1 px-2 border border-gray-200 rounded-lg focus:outline-blue-500 text-base py-1"
              name="loginPassword"
              value={loginPassword}
              onChange={onLoginInputChange}
            />
            <input 
              type="submit" 
              value='Login' 
              className="bg-blue-500 text-white font-bold rounded-xl sm:w-fit px-5 py-1 self-center mt-2"
            />
          </form>

        </div>
        <div className="flex flex-col w-2/6 items-center bg-blue-500 rounded-xl shadow-2xl">
          <h3 className="font-bold text-2xl tracking-normal my-10 text-white">Registro</h3>
          <form action="" className="flex flex-col px-5 w-5/6 lg:w-4/6" onSubmit={registerSubmit} >
            <input 
              type="text" 
              placeholder="Name" 
              className="my-1 px-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-500 text-base py-1" 
              name="registerName"
              value={registerName}
              onChange={onRegisterInputChange}
            />
            <input 
              type="text" 
              placeholder="Email" 
              className="my-1 px-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-500 text-base py-1" 
              name="registerEmail"
              value={registerEmail}
              onChange={onRegisterInputChange}
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="my-1 px-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-500 text-base py-1" 
              name="registerPassword"
              value={registerPassword}
              onChange={onRegisterInputChange}
            />
            <input 
              type="password" 
              placeholder="Confirm Password" 
              className="my-1 px-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-500 text-base py-1" 
              name="registerPassword2"
              value={registerPassword2}
              onChange={onRegisterInputChange}
            />
            <input 
              type='submit' 
              value='Crear cuenta' 
              className="bg-white text-blue-500 font-bold rounded-xl sm:w-fit px-5 py-1 self-center mb-10 mt-2" 

            />
          </form>
        </div>
      </div>
    </div>
  )
}
