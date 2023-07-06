import React from "react";

import { RiInstagramFill, RiWhatsappLine, RiMailLine } from "react-icons/ri";
export const Footer = () => {
  return (
    <footer className=" text-center flex flex-wrap ">
      <div className=" flex flex-col flex-wrap relative h-96 w-full">
        {/* <img
          src="/src/image/playa.jpg"
          className="w-full h-full object-cover absolute mix-blend-overlay "
        /> */}
        <div className="px-8 py-10">
          <div className="">
            <h1 className=" flex p-4">CONTACTOS</h1>
          </div>

          <div className="flex p-2  ">
            <a target="_blank" href="https://wa.me/542614604776"><RiWhatsappLine className="text-2xl" /></a>
            
            <h4 className="px-4">Whatsapp </h4>
          </div>
          <div className="flex p-2  ">
            <RiInstagramFill className="text-2xl " />
            <h4 className="px-4">Mariela Rivero Viajes </h4>
          </div>
          <div className="flex p-2  ">
            <RiMailLine className="text-2xl " />
            <h4 className="px-4">Correo electronico</h4>
          </div>

          <div className="flex p-2  ">
          <a href="https://www.argentina.gob.ar/economia/comercio/defensadelconsumidor" target="_blank">defensa consumidor</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
