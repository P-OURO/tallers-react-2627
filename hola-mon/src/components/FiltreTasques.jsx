import Boto from "./Boto"

const FILTRES = [
    { id: "totes", etiqueta: "Totes" },
    { id: "pendents", etiqueta: "Pendents" },
    { id: "fetes", etiqueta: "Fetes" }
]

function FiltreTasques({ filtre, onCanviaFiltre }) {

    return (
        <div role="group" aria-label="Filtrar tasques">
            {FILTRES.map(({ id, etiqueta }) => (
                <Boto key={id} variant={filtre === id ? 'primari' : 'secundari'} onClick={() => onCanviaFiltre(id)} aria-pressed={filtre === id}>{etiqueta}</Boto>
            ))}
        </div>
    )
}

export default FiltreTasques