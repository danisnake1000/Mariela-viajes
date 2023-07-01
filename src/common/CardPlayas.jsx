import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  {CardActionArea}  from '@mui/material';
import playa from '../image/playa amanecer.webp'
import playa2 from '../image/playa2.jpg'
import playa3 from '../image/playa del carmen.jpg'


const playas = [

  {
    imagen: playa,
    titulo: "PLAYA DEL CARMEN",
    descripcion: "Playa car"
  },
  {
    imagen: playa2,
    titulo: " MEXICO",
    descripcion: "Can Cun"
  },
  {
    imagen: playa3,
    titulo: " PUNTA CANA",
    descripcion: "Bahybe"
  },,
  {
    imagen: playa3,
    titulo: " PUNTA CANA",
    descripcion: "Bahybe"
  },,
  {
    imagen: playa3,
    titulo: " PUNTA CANA",
    descripcion: "Bahybe"
  },

]

export const CardPlayas = ({valor}) => {

console.log(playas)

  return (
    
    <div className=' flex flex-wrap justify-center m-2 gap-5 text-right'>

      {playas.map((playa, index) =>{

        return ( <Card key={index} sx={{ maxWidth: 300}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={playa.imagen}
          alt="PLAYA"
        />
        <CardContent >
          <Typography  gutterBottom variant="h5" component="div">
            {playa.titulo} 
          </Typography>
          <Typography  gutterBottom variant="h5" component="div">
            {valor} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {playa.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>)
       
      
    })}
    </div>
    

   
    
  )
}
