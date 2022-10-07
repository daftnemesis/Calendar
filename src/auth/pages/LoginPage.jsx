//Pagina principal para el login y el register ya que estaran en la misma pagina
export const LoginPage = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <div className="flex w-full justify-center">
        <div className="flex flex-col w-2/6 items-center border border-gray-200 rounded-xl shadow-xl ">
          <h3 className="font-bold text-2xl tracking-normal my-10">Login</h3>
          <form action="" className="flex flex-col px-5 w-5/6 lg:w-4/6">
            <input type="text" placeholder="Email" className="my-1 px-2 border border-gray-200 rounded-lg focus:outline-blue-500 text-base py-1" />
            <input type="password" placeholder="Password"  className="my-1 px-2 border border-gray-200 rounded-lg focus:outline-blue-500 text-base py-1" />
            <input type="submit" value='Login' className="bg-blue-500 text-white font-bold rounded-xl sm:w-fit px-5 py-1 self-center mt-2" />
          </form>

        </div>
        <div className="flex flex-col w-2/6 items-center bg-blue-500 rounded-xl shadow-2xl">
          <h3 className="font-bold text-2xl tracking-normal my-10 text-white">Registro</h3>
          <form action="" className="flex flex-col px-5 w-5/6 lg:w-4/6">
            <input type="text" placeholder="Name" className="my-1 px-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-500 text-base py-1" />
            <input type="text" placeholder="Last Name"  className="my-1 px-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-500 text-base py-1" />
            <input type="text" placeholder="Email" className="my-1 px-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-500 text-base py-1" />
            <input type="password" placeholder="Password" className="my-1 px-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-500 text-base py-1" />
            <input type="password" placeholder="Confirm Password" className="my-1 px-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-500 text-base py-1" />
            <input type='submit' value='Crear cuenta' className="bg-white text-blue-500 font-bold rounded-xl sm:w-fit px-5 py-1 self-center mb-10 mt-2" />
          </form>
        </div>
      </div>
    </div>
  )
}
