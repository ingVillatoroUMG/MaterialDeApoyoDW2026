export default function Componente(props) {
    const { placa, marca, color, modelo } = props

    return (
        <>
            <h4>Placa {placa}</h4>
            <h4>Marca {marca}</h4>
            <h4>Color {color}</h4>
            <h4>Modelo {modelo}</h4>
        </>
    )
}