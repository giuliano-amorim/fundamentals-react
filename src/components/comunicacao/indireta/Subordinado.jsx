import React from 'react'

export default (props) => {

  function acao() {
    props.onClicar(Math.random(), 'Número gerado')
  }

  return (
    <div>
      <button onClick={(acao)}>Alterar</button>
    </div>
  )
}

// A partir da ação do evento no Filho, tenha um efeito ou impacto no pai