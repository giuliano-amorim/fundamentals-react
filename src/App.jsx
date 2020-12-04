import React from 'react'
import './App.css'
import Card from './components/layout/Card'
import Primeiro from './components/fundamentals/Primeiro'
import ComParamentro from './components/fundamentals/ComParamentro'
import ComFilhos from './components/fundamentals/ComFilhos'
import Repeticao from './components/fundamentals/Repeticao'
import Condicional from './components/fundamentals/Condicional'
import CondicionalComIf from './components/fundamentals/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Chefe from './components/comunicacao/indireta/Chefe'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Loteria from './components/loteria/Loteria'
export default (props) => (

  <div className="App">
    <h1>Fundamentos React</h1>
    <div className='Cards'>

      <Card titulo="#11 - Loteria" color="#7d087d" >
        <Loteria qtdeNumeros={5} />
      </Card>

      <Card titulo="#10 - Contador" color="#BC8F8F" >
        <Contador passo={10} valor={100} />
      </Card>

      <Card titulo="#09 - Input" color="#BDB76B" >
        <Input />
      </Card>

      <Card titulo="#08 - Comunicação Indireta" color="#808000" >
        <Chefe />
      </Card>

      <Card titulo="#07 - Comunicação Direta" color="#006400" >
        <Pai sobrenome='Souza' />
      </Card>

      <Card titulo="#06 - Condicional v2" color="#483D8B" >
        <CondicionalComIf number={9} />
      </Card>

      <Card titulo="#05 - Condicional v1" color="#4682B4" >
        <Condicional number={10} />
      </Card>

      <Card titulo="#04 - Repetição" color='	#708090' >
        <Repeticao />
      </Card>
      <Card titulo="#03 - Componente com Filhos" color='#008B8B' >
        <ComFilhos>
          <ul>
            <li>Raul</li>
            <li>Leonardo</li>
            <li>Daniel</li>
            <li>Vitor</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card titulo="#02 - Componente com Parametro" color='#5F9EA0' >
        <ComParamentro titulo="Esse é o título"
          subtitulo="Esse é o subtitulo" />
        <ComParamentro titulo="Opa"
          subtitulo="Epa" />
      </Card>

      <Card titulo=" #01 - Primeiro Componente" color='#2F4F4F' >
        <Primeiro />
      </Card>
    </div>
  </div >

)