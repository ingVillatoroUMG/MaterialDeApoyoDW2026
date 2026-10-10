import {useState, useReducer} from 'react'

const estadoinicial = {
    nombre: '',
    apellido: '',
    carnet: '',
    telefono: '',
    seccion:''
}

function cambioEstado(estado, accion){
    console.log(estado, accion)
    switch(accion.type){
        case 'MODIFICACION':
            return {...estado, [accion.campo]: accion.valor}
        case 'CLEAR':
            return estadoinicial
    }
}

export default function Formulario() {
    const [estado, dispatch] = useReducer(cambioEstado, estadoinicial)

    function cambiarValor(e){
        dispatch({type: 'MODIFICACION', campo: e.target.name, valor: e.target.value})
    }

    return(
        <>
            <form>
                <h3>Registro</h3>
                <input type="text" placeholder="Nombre" onChange={cambiarValor} name="nombre"/>
                <input type="text" placeholder="Apellido" onChange={cambiarValor} name="apellido"/>
                <input type="number" placeholder="Carnet" onChange={cambiarValor} name="carnet"/>
                <input type="number" placeholder="Telefono" onChange={cambiarValor} name="telefono"/>
                <input type="text" placeholder="Seccion" onChange={cambiarValor} name="seccion"/>
                <p>Nombre: {estado.nombre}</p>
                <p>Apellido: {estado.apellido}</p>
                <p>Carnet: {estado.carnet}</p>
                <p>Telefono: {estado.telefono}</p>
                <p>Seccion: {estado.seccion}</p>
                <button type="button" onClick={() => dispatch({type: 'CLEAR'})}>Limpiar Pantalla</button>
            </form>
        </>
    )
}