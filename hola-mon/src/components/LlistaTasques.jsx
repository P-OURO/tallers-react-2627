import Missatge from "./Missatge"
import Tasca from "./Tasca"
import { useContext } from 'react'
import { TasquesContext } from '../context/TasquesContext.js'

function LlistaTasques({ filtre }) {
    const { tasques } = useContext(TasquesContext)

    const tasquesFiltrades = tasques.filter((tasca) => {
        if (filtre === 'pendents') return !tasca.feta
        if (filtre === 'fetes') return tasca.feta
        return true
    })

    let missatgeBuit = 'Encara no hi ha tasques. Afegeix-ne una.'

    if (tasques.length > 0 && filtre === 'pendents') {
        missatgeBuit = 'No hi ha tasques pendents. Bona feina!';
    } else if (tasques.length > 0 && filtre === 'fetes') {
        missatgeBuit = 'Encara no has marcat cap tasca com a feta';
    }

    return (
        <section>
            {tasques.length === 0 && <Missatge text={missatgeBuit}/>}
            <ul className="mt-4">
                {tasquesFiltrades.map((tasca) => (
                    <Tasca key={tasca.id} tasca={tasca}/>
                ))}
            </ul>
        </section>
    )
}

export default LlistaTasques