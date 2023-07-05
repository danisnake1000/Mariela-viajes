import React from 'react'
import { Footer } from '../../common/Footer'

import { Nabvar } from '../../common/Nabvar'
import { CardPlayas } from '../../common/CardPlayas'
import { Lugares } from '../../common/Lugares'




export const Home = () => {
  return (
    
    <>
    <Nabvar/>
    <CardPlayas valor={200}/>
    <Lugares />
    <Footer/>
    </>
    
  )
}
