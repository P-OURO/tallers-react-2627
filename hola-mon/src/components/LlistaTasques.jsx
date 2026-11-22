import Missatge from "./Missatge"
import Tasca from "./Tasca"

function LlistaTasques({ tasques, missatgeBuit, onToggle, onElimina }) {

    return (
        <section>
            {tasques.length === 0 && <Missatge text={missatgeBuit}/>}
            <ul className="mt-4">
                {tasques.map(({ ...tasca }) => (
                    <Tasca key={tasca.id} tasca={tasca} onToggle={() => onToggle(tasca.id)} onElimina={() => onElimina(tasca.id)}/>
                ))}
            </ul>
        </section>
    )
}

export default LlistaTasques