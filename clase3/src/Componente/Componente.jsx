export default function Componente({placa, marca, color, modelo}) {
    return(
        <>
            <p>Placa {placa}</p>
            <p>Marca {marca}</p>
            <p>Color {color}</p>
            <p>Modelo {modelo}</p>
        </>
    )
}

export function Componente2() {
    return(
        <>
            <h4>Placa CVR678</h4>
            <h4>Marca Honda</h4>
            <h4>Color Azul</h4>
            <h4>Modelo Civic</h4>
        </>
    )
}   