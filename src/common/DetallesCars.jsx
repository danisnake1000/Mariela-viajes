import React from "react";
import { useParams } from "react-router";
import playas from "../../fakeApi";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";


export const DetallesCars = () => {
  const { idCard } = useParams();

  let select = playas.find((playa) => playa.id == idCard);


  return (
   
      <div >

        {select.titulo}
        
      </div>
     
   
  );
};
