import Tasca from "./Tasca"

function LlistaTasques({ tasques, onToggle, onElimina }) {

    return (
        <section>
            <ul>
                {tasques.map(({ ...tasca }) => (
                    <Tasca tasca={tasca} onToggle={() => onToggle(tasca.id)} onElimina={() => onElimina(tasca.id)}/>
                ))}
            </ul>
        </section>
    )
}

export default LlistaTasques