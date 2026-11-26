import { useState, useContext } from 'react';
import Boto from './Boto';
import Missatge from './Missatge';

import { TasquesContext } from '../context/TasquesContext';

function FormulariTasca({}) {
    const { afegeixTasca } = useContext(TasquesContext)
    const [text, setText] = useState("");
    const [error, setError] = useState("");

    function envia(e) {
        e.preventDefault();
        const textNet = text.trim();

        if (!textNet) {
            setError("Escriu una tasca abans d'afegir-la.");
            return
        }

        afegeixTasca(textNet);
        setText("");
        setError("");
    }

    function canviaText(e) {
        setText(e);
        if (error) setError('');
    }

    return (
        <form noValidate className='bg-white flex flex-wrap flex-col' onSubmit={envia}>
            <label htmlFor="tasca">Nova tasca</label>
            <input id="tasca" type="text" value={text} autoComplete="off" 
                onChange={(e) => canviaText(e.target.value)}
                max-length={80}
                aria-invalid={error ? 'true' : 'false'} 
                aria-describedby={error ? 'error-tasca' : 'ajuda-tasca'}
                placeholder="Introdueix la tasca"/>
            {error && <Missatge text={error} tipus="error" />}
            <Boto type="submit">Afegeix</Boto>
        </form>
    )
}

export default FormulariTasca