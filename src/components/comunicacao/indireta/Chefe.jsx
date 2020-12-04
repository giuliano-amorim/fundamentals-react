import React, { useState } from 'react'
import Subordinado from './Subordinado'

export default (props) => {

  const [texto, setTexto] = useState('Valor')
  const [num, setNum] = useState(0)

  function quandoClicar(valorGerado, texto) {

    setNum(valorGerado)
    setTexto(texto)


  }
  return (
    <div>
      <h4>{texto}: {num}</h4>
      <Subordinado onClicar={quandoClicar}></Subordinado>
    </div>
  )
}
// Comunicação no sentido do FILHO (subordinado) para o PAI (chefe)
// O filho não tem referência do pai. 
// O pai tem referência do filho ()