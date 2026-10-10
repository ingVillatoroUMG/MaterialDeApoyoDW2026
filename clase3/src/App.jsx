import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente,{Componente2} from './Componente/Componente.jsx'

function App() {
  let arr=[
    {marca:"Toyota", placa:"HRL234", color:"Rojo", modelo:"Prius"},
    {marca:"Honda", placa:"CVR678", color:"Azul", modelo:"Civic"},
    {marca:"Mazda", placa:"MZ1234", color:"Negro", modelo:"MX-5"}
  ]
  return (
    <div>
      {arr.map(function(carro){
        return <Componente {...carro}/>
      
      })}
      <Componente marca="Honda" placa="CVR678" color="Azul" modelo="Civic"/>
      <Componente2/>
    </div>
  )
}

export default App
