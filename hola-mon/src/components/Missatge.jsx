const ESTILS = {
    info: 'text-black',
    exit: 'text-green-500',
    error: 'text-rose-500',
    base: 'title-100'
}

function Missatge({ text, tipus="info" }) {
    const estilVariant = ESTILS[tipus];
    return (
        <section>
            <p className={`${ESTILS.base} ${estilVariant}`}>
                {text}
            </p>
        </section>
    )
}

export default Missatge