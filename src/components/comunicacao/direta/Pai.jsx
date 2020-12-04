import React from 'react'
import Filho from './Filho'

export default props =>
  <div>
    <Filho {...props}><strong>Giu</strong></Filho>
    <Filho sobrenome={props.sobrenome}>Jesica</Filho>
    <Filho sobrenome='Amorim'>Leonardo</Filho>
  </div>


// Comunicação no sentido PAI para o FILHO