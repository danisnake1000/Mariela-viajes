import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import playas from "../../fakeApi";
import { Link } from "react-router-dom";

export const CardPlayas = () => {
  return (
    <>
      <h1 className="flex justify-center text-3xl p-10">
        Vacaciones en donde vos quieras
      </h1>

      <div className=" flex flex-wrap justify-center m-2 gap-5 text-right  ">
        {playas.map((playa) => {
          return (
            <div key={playa.id}>
              {/* <Link to={`/detalles/${playa.id}`}> */}
                <Card sx={{ maxWidth: 400,height:400}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="190"
                      image={playa.imagen}
                      alt="PLAYA"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {playa.titulo}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                      ></Typography>
                      <Typography variant="body2" color="text.secondary">
                        {playa.descripcion}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              {/* </Link> */}
            </div>
          );
        })}
      </div>
    </>
  );
};
