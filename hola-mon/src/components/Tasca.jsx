import { useContext } from 'react';
import { TasquesContext } from '../context/TasquesContext';
import Boto from './Boto';

function Tasca({ tasca }) {
    const { toggleTasca, eliminaTasca } = useContext(TasquesContext)
    let estilVariant = tasca.feta? 'text-gray-600 line-through font-semibold' : '';

    return (
        <section className='flex flex-wrap gap-3 items-center'>
            <input id={tasca.id} type="checkbox" checked={tasca.feta} onChange={() => toggleTasca(tasca.id)}/>
            <label htmlFor={tasca.id} className={estilVariant}>{tasca.text}</label>
            <Boto variant="perill" onClick={() => eliminaTasca(tasca.id)} aria-label={tasca.text}>Eliminar</Boto>
        </section>
    )
}

export default Tasca