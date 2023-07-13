import { Link } from "react-router-dom";
import logo from "../image/logo.jpg";
import nic from "../image/IF-2023-25500229-APN.pdf"
import habilitante from "../image/PV-2023-68045224-APN.pdf"

export const Nabvar = () => {


  const handleDownload = () => {
    link= habilitante;
  }

  return (
    <>
      <div className="flex flex-wrap justify-around items-center p-10 gap-5 ">
        <Link to="*">
          <img className=" h-30 w-80" src={logo} alt="playa" />
        </Link>

        <div className="flex gap-3 justify-aroundpx-6">
          <Link to="/nosotros">
            <h2 className="">Nosotros</h2>
          </Link>
          <Link to="/contactos">
            <h2 className="">Contactos</h2>
          </Link>

          <a className="" 
            href="https://www.argentina.gob.ar/servicio/presentar-una-denuncia-contra-una-agencia-de-viajes"
            target="_blank"
          >
            <h1 className="px-4">Denuncias</h1>
          </a>
          <a className=""
            href={habilitante}
            
            target="_blank"
          >
            <h1 className="px-4">Disposicion habilitante</h1>
          </a>
          <a className=""
            href={nic}
            target="_blank"
          >
            <h1 className="px-4">Oficina virtual</h1>
          </a>
        </div>
      </div>
      <div className="px-20 py-3 ">
        <p className="text-xs"> Mariela Rivero viajes y turismo</p>
        <p className="text-xs">Cuit 30717791068</p>
        <p className="text-xs">
          Numero de permiso precario PV-2023-00475655-APN-DRAV#MTYD
        </p>
      </div>
    </>
  );
}
