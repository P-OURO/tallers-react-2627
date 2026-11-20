import Boto from './Boto';

function Tasca({ tasca, onToggle, onElimina }) {
    let estilVariant = tasca.feta? 'text-gray line-through' : '';

    return (
        <section>
            <label htmlFor={tasca.id} className={estilVariant}>{tasca.text}</label>
            <input id={tasca.id} type="checkbox" checked={tasca.feta} onChange={() => onToggle(tasca.id)}/>
            <Boto key={tasca.id} variant="perill" onClick={() => onElimina(tasca.id)} aria-label={tasca.text}>Eliminar</Boto>
        </section>
    )
}

export default Tasca