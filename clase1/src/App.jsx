import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente from './Componentes/Componente.jsx'

function App() {
  let arr=[
    { placa: "CRV560", marca: "Toyota", color: "Rojo", modelo: "Prius" },
    { placa: "ABC123", marca: "Honda", color: "Azul", modelo: "Civic" }
  ]
  return (
    <div> 
      <h1>Desarrollo Web</h1>
      {arr.map(
        function(carro){
          return <Componente {...carro} />
        }
      )}
      <Componente placa="CRV560" marca="Toyota" color="Rojo" modelo="Prius" />
      <Componente placa="ABC123" marca="Honda" color="Azul" modelo="Civic" />
      <Componente placa="XYZ789" marca="Ford" color="Blanco" modelo="Focus" />
      <Componente placa="DEF456" marca="Chevrolet" color="Negro" modelo="Camaro" />
    </div>
  )
}

export default App
