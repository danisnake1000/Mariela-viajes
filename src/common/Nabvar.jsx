import { Link } from "react-router-dom";
import logo from "../image/logo.jpg";

export const Nabvar = () => {
  return (
    <>
      <div className="flex flex-wrap justify-around items-center ">
        <Link to="*">
          <img className=" h-30 w-80" src={logo} alt="playa" />
        </Link>

        <div className="flex gap-3 justify-aroundpx-6">
          <Link to="/nosotros">
            <h2 className="text-2xl">Nosotros</h2>
          </Link>
          <Link to="/contactos">
            <h2 className="text-2xl">Contactos</h2>
          </Link>
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
};
