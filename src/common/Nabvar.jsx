import { Link } from "react-router-dom";
import logo from "../image/logo.jpg";
import nic from "../image/IF-2023-17548341-AP.pdf";
import habilitante from "../image/disposicion.pdf";

export const Nabvar = () => {
  return (
    <>
      <div className=" container sm:flex sm:flex-col justify-around items-center m-10 md:flex  lg:flex-row">
        <div className="">
          <Link to="*">
            <img className=" h-30 w-80" src={logo} alt="playa" />
          </Link>
        </div>

        <div className=" text-2xl  mt-3 gap-3 px-6 sm:flex sm:text-base md:flex  lg:flex">
          <Link to="/nosotros">
            <h2 className="hover:text-gray-400 hover:underline duration-500 px-4">
              Nosotros
            </h2>
          </Link>
          <Link to="/contactos">
            <h2 className="hover:text-gray-400 duration-500 px-4 hover:underline ">
              Contactos
            </h2>
          </Link>

          <a
            className="hover:text-gray-400 duration-500"
            href="https://www.argentina.gob.ar/servicio/presentar-una-denuncia-contra-una-agencia-de-viajes"
            target="_blank"
          >
            <h1 className="px-4 hover:text-gray-400 duration-500 hover:underline">
              Denuncias
            </h1>
          </a>
          <a className="" href={habilitante} target="_blank">
            <h1 className="px-4  hover:text-gray-400 duration-500 hover:underline ">
              Disposicion habilitante
            </h1>
          </a>
          <a className="" href={nic} target="_blank">
            <h1 className="px-4  hover:text-gray-400 hover:underline duration-500">
              Oficina virtual
            </h1>
          </a>
        </div>
      </div>

      <div className="px-20 py-3 ">
        <p className="text-xs"> Mariela Rivero viajes y turismo</p>
        <p className="text-xs">
          Razón social Mariela Rivero viajes y turismo sas
        </p>
        <p className="text-xs">Cuit 30717791068</p>
        <p className="text-xs">
          Numero de permiso precario PV-2023-00475655-APN-DRAV#MTYD
        </p>
      </div>
    </>
  );
};
