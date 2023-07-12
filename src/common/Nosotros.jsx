import React from "react";

import { Nabvar } from "./Nabvar";


import pdfFile from "../image/nota.pdf"; // Ruta al archivo PDF
import { Typography } from "@material-tailwind/react";

export const Nosotros = () => {
  const handleDownload = () => {
    
    link = pdfFile;
   
 
  };

  return (
    <div>
      <Nabvar />
      <p>inspiracion</p>
    
     
   
      {/* <p>
        Mariela Rivero viajes y turismo
        <br />
        Cuit 30717791068
      </p>
      <br />
      <p>numero de permiso precario PV-2023-00475655-APN-DRAV#MTYD</p>
      <br />
      <a href={pdfFile} download="nombre-archivo.pdf">
        Descargar PDF
      </a>
      <br />
      <br /> */}
    </div>
  );
};


