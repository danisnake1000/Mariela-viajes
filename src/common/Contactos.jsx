import React from "react";
import { Nabvar } from "./Nabvar";

export const Contactos = () => {
  return (
    <div>
      <Nabvar />

      <div className=" flex items-center flex-col flex-wrap">
       
        <div className="px-8 py-10">
          <div className="">
            <h1 className=" flex p-4 text-5xl py-12 ">CONTACTOS</h1>
          </div>

          <div className="flex p-2  ">
            <a
              className="flex"
              target="_blank"
              href="https://wa.me/542614604776"
            >
              {" "}
              <h4 className="px-4">Whatsapp +5492614604776</h4>
            </a>
          </div>
          {/* <div className="flex p-2  ">
            <h4 className="px-4">Mariela Rivero Viajes</h4>
          </div> */}
          <div className="flex p-2  ">
            <a
              className="flex"
              target="_blank"
              href="mailto:marielarivero145@gmail.com"
            >
              <h1 className="px-4">Correo Electronico: marielarivero145@gmail.com</h1>
            </a>
          </div>

          <div className="flex p-2  ">
           
          </div>
        </div>
      </div>
    </div>
  );
};
