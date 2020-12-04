import React, { useState } from 'react'


export default (props) => {
  const [name, setName] = useState('Escreva algo no campo abaixo')
  return (
    <>
      <h3>{name}</h3>
      <input type="text" value={name}
        onChange={e => setName(e.target.value)} />
    </>
  )
}


// Componentes controlados - não é possível mudar, logo, é necessários usar os Hooks.