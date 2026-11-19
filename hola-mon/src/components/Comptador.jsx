import Boto from './Boto';
import Missatge from './Missatge';

function Comptador({ valor, missatge, tipus, onCanvia, onReinicia, pas = 1 }) {
    let accions = [
        { id: "incrementa", text: "Incrementar", variant: "primari" },
        { id: "decrementa", text: "Decrementar", variant: "secundari" },
        { id: "reinicia", text: "Reset", variant: "perill" }
    ];

    function executaAccio(id) {
        if (id === 'incrementa') onCanvia(1)
        if (id === 'decrementa') onCanvia(-1)
        if (id === 'reinicia') onReinicia()
    }

    return (
        <main>
            <p className='title-100'>Clicks fets: {valor}</p>
            <Missatge text={missatge} tipus={tipus} />

            <div className='container-buttons'>
                {accions.map(({ id, text, variant }) => (
                    <Boto key={id} variant={variant} onClick={() => executaAccio(id)}>
                        {text}
                    </Boto>
                ))}
            </div>
        </main>
    )
}

export default Comptador