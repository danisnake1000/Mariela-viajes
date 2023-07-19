import React from "react";

import { RiInstagramFill, RiWhatsappLine, RiMailLine } from "react-icons/ri";
export const Footer = () => {
  return (
    <footer className=" text-center flex flex-wrap bg-slate-100 mt-9">
      <div className=" flex flex-col flex-wrap relative  w-full ">
       
        <div className="px-8 py-10">
          <div className="">
            <h1 className=" flex p-4 text-2xl">CONTACTOS</h1>
          </div>

          <div className="flex p-2  ">
            <a
              className="flex"
              target="_blank"
              href="https://wa.me/542614604776"
            >
              <RiWhatsappLine className="text-2xl" />{" "}
              <h4 className="px-4">Whatsapp +5492614604776</h4>
            </a>
          </div>

          <div className="flex p-2  ">
            <a
              className="flex"
              target="_blank"
              href="mailto:marielarivero145@gmail.com"
            >
              <RiMailLine className="text-2xl " />
              <h1 className="px-4"> marielarivero145@gmail.com</h1>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
