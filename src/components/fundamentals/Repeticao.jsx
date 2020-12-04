import React from 'react'
import products from '../../data/products'

export default props => {

  function getProductsListItem() {
    // Map: transforma a LI em um trecho JSX
    return products.map(prod => {
      // Quando ocorre mudança na ordem em virtude do map, o brownser pede o Key com um valor unico
      return <li key={prod.id}>{prod.id} - {prod.name} - R$ {prod.preco}</li>
    })
  }

  return (
    <div>
      <h2>Repetição</h2>
      <ul>
        {getProductsListItem()}
      </ul>
    </div>
  )
}