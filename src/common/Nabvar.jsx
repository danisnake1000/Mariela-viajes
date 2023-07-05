import { Link } from 'react-router-dom'
import logo from '../image/logo.jpg'


export const Nabvar = () => {
  return (
    <>
   
    <div className='flex flex-wrap justify-around items-center px-5 py-3 relative'>
    <img  className=' h-20 w-50' src={logo} alt="playa" />
    <div>
      <Link to="/nosotros"><h2>Nosotros</h2></Link>
    </div>
    {/* <ul className='flex gap-6 justify-center'>
        <li className='text-5 hover:bg-gray-200 rounded-full p-2 w-26 drop-shadow-md '>Inicio</li>
        <li className='text-5 hover:bg-gray-200 rounded-full p-2 w-26 drop-shadow-md '>Contactos</li>
        <li className='text-5 hover:bg-gray-200 rounded-full p-2 w-26 drop-shadow-md'>Nosotros</li>
        
    </ul> */}
    </div>
    </>
    
  )
}
