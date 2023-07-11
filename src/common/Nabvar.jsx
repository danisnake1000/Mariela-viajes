import { Link } from 'react-router-dom'
import logo from '../image/logo.jpg'


export const Nabvar = () => {
  return (
    <>
   
    <div className='flex flex-wrap justify-around items-center  py-12 relative'>
    <Link to="*"><img  className=' h-20 w-50' src={logo} alt="playa" /></Link>
    <div>
      <Link to="/nosotros"><h2>Nosotros</h2></Link>
   

    </div>
    
    </div>
    </>
    
  )
}
