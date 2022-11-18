import React from 'react'
import { useAuthStore } from '../../hooks'

//Componente Navbar que sera nuestra barra de navegacion de la app
export const Navbar = () => {


  const {startLogout, user} = useAuthStore()

  return (
    <div className='w-full sticky top-0 '>
      <nav className='w-full bg-indigo-800 mb-2 px-4 py-2 shadow-lg'>
        <ul className='flex justify-between text-white items-center'>
          <li>
            <span>
              <i className='fas fa-calendar-alt'></i>
              &nbsp;
              {user.name}
            </span>
          </li>
          <li>
            <button onClick={startLogout} className='bg-red-700 rounded-lg px-3 focus:ring-2 focus:ring-red-600 hover:bg-red-800'>
              <span>
                <i className='fas fa-sign-out-alt'></i>
                &nbsp;
                Salir
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
