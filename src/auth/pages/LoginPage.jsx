//Pagina principal para el login y el register ya que estaran en la misma pagina
export const LoginPage = () => {
  return (
    <div className="grid content-center w-10/12 mx-auto h-screen text-lg">
      <div className="flex justify-evenly">
        <div className="text-center shadow-lg w-2/4 rounded-lg border border-gray-00">
          <h3 className="text-2xl font-bold my-5">Ingreso</h3>
          <form action="">
            <div>
              <input type="text" placeholder="Correo" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-blue-500  m-2 px-2 py-1" />
            </div>
            <div>
              <input type="text" placeholder="Contrasena" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-blue-500  m-2 px-2 py-1" />
            </div>
            <div className="">
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center" >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="text-center shadow-lg w-2/4 rounded-lg bg-blue-500">
          <h3>Registro</h3>
            <form action="">
              <div>
                <input type="text" placeholder="Nombre" />
              </div>
              <div>
                <input type="text" placeholder="Correo" />
              </div>
              <div>
                <input type="text" placeholder="Contrasena" />
              </div>
              <div>
                <input type="text" placeholder="Repita la contrasena" />
              </div>
              <div>
                <button type="submit">
                  Crear Cuenta
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}
