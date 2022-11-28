import React from 'react'
import Agua from '../Graficos/Agua'
import GorduraCorporal from '../Graficos/GorduraCorporal'
import IMC from '../Graficos/IMC'
import IMC2 from '../Graficos/IMC2'
import Peso from '../Graficos/Peso'
import Peso2 from '../Graficos/IdadeMetabolica'



export default function Dados() {
  return (
    <>      
      <IMC2 />
      <GorduraCorporal />
      <Peso />
      <Agua />
      <IMC/>
      <Peso2/>
    </>

  )
}
