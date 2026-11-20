import { useState } from 'react';
import Boto from './Boto';

function FormulariTasca({ onAfegir }) {
    const [text, setText] = useState("");

    function envia(e) {
        e.preventDefault();
        const textNet = text.trim();

        if (!textNet) {
            setError("Escriu una tasca abans d'afegir-la.");
            return
        }

        onAfegir(textNet);
        setText("");
        setError("");
    }

    return (
        <form className='bg-white flex flex-wrap flex-col' onSubmit={envia}>
            <label htmlFor="tasca">Nova tasca</label>
            <input id="tasca" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Introdueix la tasca" autoComplete="off" />
            <Boto type="submit">Afegeix</Boto>
        </form>
    )
}

export default FormulariTasca